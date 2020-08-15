import { queryCache, useMutation } from "react-query";

import { db } from "../firebase";

export default function useDeletePost() {
  return useMutation(
    (value) => {
      console.log(value.section, value.postId);
      db.collection(value.section).doc(value.postId).delete();
      // db.collection("users")
      //   .doc(value.ownerId)
      //   .update({ [value.section]: FieldValue.arrayUnion(value) });
    },
    {
      onMutate: (post) => {
        queryCache.cancelQueries(["posts", post.section]);
        const previousValue = queryCache.getQueryData(["posts", post.section]);

        console.log(post);

        console.log(previousValue);

        queryCache.setQueryData(["posts", post.section], (old) => {
          if (old) {
            console.log(old);
            return old.filter((p) => p.postId !== post.postId);
          }
        });

        return previousValue;
        return () =>
          queryCache.setQueryData(["posts", post.section], previousValue);
      },
      // On failure, roll back to the previous value
      onError: (err, variables, rollback) => rollback(),
      // queryCache.setQueryData(["posts", section], previousValue);

      // After success or failure, refetch
      onSettled: (post) => {
        console.log(post);
        return queryCache.invalidateQueries(["posts"]);
      }
    }
  );
}
