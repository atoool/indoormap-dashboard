/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { constants } from "../utils/constants";
import { db } from "../utils/firebase-admin";

const useFirestore = ({ update }) => {
  useEffect(() => {
    const subscriber = db
      .collection(constants.collection)
      .doc(constants.doc)
      .onSnapshot((documentSnapshot) => {
        update(documentSnapshot.data().data);
      });

    // Stop listening for updates when no longer required
    return () => subscriber();
  }, []);
};

export default useFirestore;
