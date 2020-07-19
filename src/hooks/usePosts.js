import axios from "axios";
import { db } from "../firebase";
import { useQuery } from "react-query";

const getPosts = async (_, section) => {
  console.log(section);
  const snapshot = await db.collection(section).get();
  return snapshot.docs.map((doc) => {
    return { ...doc.data(), id: doc.id };
  });
};

export default function usePosts(section) {
  return useQuery(["posts", section], getPosts);
}
