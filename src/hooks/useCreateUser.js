import { queryCache, useMutation } from "react-query";

import { db } from "../firebase";

export default function useCreateUser() {
  return useMutation((value) => {
    db.collection("users").add(value);
  });
}
