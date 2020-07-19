import { queryCache, useQuery } from "react-query";

import { db } from "../firebase";

const getPost = async (_, section, postId) => {
  const doc = await db.collection(section).doc(postId).get();
  return doc.data();
};

export default function usePosts(section, postId) {
  return useQuery(["posts", section, postId], getPost, {
    initialData: () => {
      return queryCache
        .getQueryData(["posts", section])
        ?.find((post) => post.id === postId);
    }
  });
}
