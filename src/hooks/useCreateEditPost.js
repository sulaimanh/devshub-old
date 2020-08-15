import { FieldValue, ServerValue, db } from "../firebase";
import { queryCache, useMutation } from "react-query";

export default function useCreatePost(section, postId) {
  return useMutation(
    (value) => {
      // console.log(value);
      if (value.createdAt) {
        db.collection(section)
          .doc(postId)
          .update({
            ...value,
            updatedAt: FieldValue.serverTimestamp()
          });
      } else {
        db.collection(section).add({
          ...value,
          users: [],
          createdAt: FieldValue.serverTimestamp()
        });
      }

      // db.collection("users")
      //   .doc(value.ownerId)
      //   .update({ [value.section]: FieldValue.arrayUnion(value) });
    },
    {
      onMutate: (post) => {
        if (postId) {
          queryCache.cancelQueries(["posts", section, postId]);

          const previousValue = queryCache.getQueryData([
            "posts",
            section,
            postId
          ]);

          queryCache.setQueryData(["posts", section, postId], (old) => {
            // console.log(old);
            // const newFirst = {
            //   docs: [post, ...first],
            //   lastVisible: first.lastVisible
            // };
            // const updateNew = [newFirst, ...old];

            return { ...post };
          });

          return previousValue;
        } else {
          queryCache.cancelQueries(["posts", section]);

          const previousValue = queryCache.getQueryData(["posts", section]);

          queryCache.setQueryData(["posts", section], (old) => {
            console.log(old);
            const first = old[0].docs;
            const newFirst = {
              docs: [post, ...first],
              lastVisible: first.lastVisible
            };
            const updateNew = [newFirst, ...old];

            return updateNew;
          });

          return previousValue;
        }
      },
      // On failure, roll back to the previous value
      onError: (err, variables, previousValue) => {
        return postId
          ? queryCache.setQueryData(["posts", section, postId], previousValue)
          : queryCache.setQueryData(["posts", section], previousValue);
      },
      // After success or failure, refetch
      onSettled: () => {
        postId
          ? queryCache.invalidateQueries(["posts", section, postId])
          : queryCache.invalidateQueries(["posts", section]);
      }
    }
  );
}