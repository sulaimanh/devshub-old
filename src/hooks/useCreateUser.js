import { db } from "../firebase";
import { useMutation } from "react-query";

export default function useCreateUser() {
  return useMutation((value) => {
    db.collection("users").doc(value.ownerId).set(value);
  });
}
