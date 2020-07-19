import { queryCache, useMutation } from "react-query";

import { db } from "../firebase";

export default function useCreatePost(section) {
  return useMutation(
    (value) => {
      db.collection(value.section).add(value);
      console.log(value.section, value.input);
    },
    {
      onMutate: (post) => {
        queryCache.cancelQueries(["posts", section]);

        const previousValue = queryCache.getQueryData(["posts", section]);
        console.log(previousValue);
        queryCache.setQueryData(["posts", section], (old) => {
          console.log(old);
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
