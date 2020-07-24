import { FieldValue, db } from "../firebase";
import { queryCache, useMutation } from "react-query";

export default function useCreatePost(section) {
  return useMutation(
    (value) => {
      console.log(value);
      db.collection(value.section).add(value);
      // db.collection("users")
      //   .doc(value.ownerId)
      //   .update({ [value.section]: FieldValue.arrayUnion(value) });
      console.log(value.section, value.input);
    },
    {
      onMutate: (post) => {
        queryCache.cancelQueries(["posts", section]);

        const previousValue = queryCache.getQueryData(["posts", section]);
        console.log(previousValue);
        queryCache.setQueryData(["posts", section], (old) => {
          return [...old, post];
        });

        return previousValue;
      },
      // On failure, roll back to the previous value
      onError: (err, variables, previousValue) =>
        queryCache.setQueryData(["posts", section], previousValue),
      // After success or failure, refetch the todos query
      onSettled: () => {
        queryCache.invalidateQueries(["posts", section]);
      }
    }
  );
}
