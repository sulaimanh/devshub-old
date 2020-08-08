import { FieldValue, db } from "../firebase";
import { queryCache, useMutation } from "react-query";

export default function useRemoveRequestToJoin(section, postId) {
  return useMutation(
    (value) => {
      try {
        db.collection(section)
          .doc(postId)
          .update({
            users: FieldValue.arrayRemove(value)
          });
      } catch (err) {
        console.log(err);
      }
    },
    {
      onMutate: (userId) => {
        queryCache.cancelQueries(["posts", section, postId]);
        console.log(userId);
        const previousValue = queryCache.getQueryData([
          "posts",
          section,
          postId
        ]);

        console.log(previousValue);

        queryCache.setQueryData(["posts", section, postId], (old) => {
          return { ...old, users: old.users.splice(old.users.indexOf(userId)) };
        });

        return () =>
          queryCache.setQueryData(["posts", section, postId], previousValue);
      },
      onError: (err, variables, previousValue) => {
        queryCache.setQueryData(["posts", section, postId], previousValue);
      },
      // After success or failure, refetch the [users, ownerId] query
      onSettled: () => {
        queryCache.invalidateQueries(["posts", section, postId]);
      }
    }
  );
}
