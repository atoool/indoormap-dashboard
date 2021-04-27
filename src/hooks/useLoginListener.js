/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { admin } from "../utils/firebase-admin";

const useLoginListener = ({ onSetToken }) => {
  const [initializing, setInitializing] = useState(true);

  function onAuthStateChanged(user) {
    onSetToken(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = admin.auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);
};

export default useLoginListener;
