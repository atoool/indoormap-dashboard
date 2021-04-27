import { admin } from "../utils/firebase-admin";

const useSignIn = ({ email, pass }) => {
  admin
    .auth()
    .signInWithEmailAndPassword(email, pass)
    .then((e) => {})
    .catch((error) => {
      alert(error);
    });
};

export default useSignIn;
