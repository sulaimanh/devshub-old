// import
import axios from "axios";
import { db } from "../firebase";
import { useQuery } from "react-query";

const getUser = async () => {
  //   const { doc } = await

  const snapshot = await db.collection("users").get();
  return snapshot.docs.map((doc) => doc.data());
};

export default function useUser() {
  return useQuery("users", getUser);
}
