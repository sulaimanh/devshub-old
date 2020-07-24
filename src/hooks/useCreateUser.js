import { db } from "../firebase";
import { useMutation } from "react-query";

export default function useCreateUser() {
  return useMutation((value) => {
    const docRef = db.collection("users").doc(value.ownerId);

    docRef.get().then((doc) => {
      if (!doc.exists) {
        console.log("IT EXISTS");
        docRef.set(value);
      }
    });
  });
}
