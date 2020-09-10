import { useInfiniteQuery, useQuery } from "react-query";

import { db } from "../firebase";

const getPosts = async (_, section, lastVisible = null) => {
  console.log("We are calling this again and again");
  if (!lastVisible) {
    const first = db.collection(section).orderBy("createdAt", "desc").limit(5);

    return await first.get().then(function (documentSnapshots) {
      // Get the last visible document
      const lastVisible =
        documentSnapshots.docs[documentSnapshots.docs.length - 1];

      const docs = documentSnapshots.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      });

      return { docs: docs, lastVisible: lastVisible };
    });
  } else {
    const first = db
      .collection(section)
      .orderBy("createdAt", "desc")
      .startAfter(lastVisible)
      .limit(5);

    return await first.get().then(function (documentSnapshots) {
      // Get the last visible document
      const lastVisible =
        documentSnapshots.docs[documentSnapshots.docs.length - 1];

      const docs = documentSnapshots.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      });

      return { docs: docs, lastVisible: lastVisible };
    });
  }
};

export default function usePosts(section) {
  return useInfiniteQuery(["posts", section], getPosts, {
    getFetchMore: (lastGroup) => lastGroup.lastVisible
  });
}
