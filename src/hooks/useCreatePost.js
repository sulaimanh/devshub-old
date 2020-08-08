import { FieldValue, ServerValue, db } from "../firebase";
import { queryCache, useMutation } from "react-query";

export default function useCreatePost(section) {
  return useMutation(
    (value) => {
      // console.log(value);
      db.collection(value.section).add({
        ...value,
        users: [],
        createdAt: FieldValue.serverTimestamp()
      });
      // db.collection("users")
      //   .doc(value.ownerId)
      //   .update({ [value.section]: FieldValue.arrayUnion(value) });
    },
    {
      onMutate: (post) => {
        queryCache.cancelQueries(["posts", section]);

        const previousValue = queryCache.getQueryData(["posts", section]);

        queryCache.setQueryData(["posts", section], (old) => {
          const first = old[0].docs;
          const newFirst = {
            docs: [post, ...first],
            lastVisible: first.lastVisible
          };
          const updateNew = [newFirst, ...old];

          return updateNew;
        });

        return previousValue;
      },
      // On failure, roll back to the previous value
      onError: (err, variables, previousValue) =>
        queryCache.setQueryData(["posts", section], previousValue),
      // After success or failure, refetch
      onSettled: () => {
        queryCache.invalidateQueries(["posts", section]);
      }
    }
  );
}
