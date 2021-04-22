import admin from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDfNILStiLK73DvT-HiYGeSwNmZtGHn0PQ",
  authDomain: "my-new-react-app.firebaseapp.com",
  databaseURL: "https://my-new-react-app.firebaseio.com",
  projectId: "my-new-react-app",
  storageBucket: "my-new-react-app.appspot.com",
  messagingSenderId: "279915728451",
  appId: "1:279915728451:web:a68fceb806695401838ef6",
};

admin.initializeApp(firebaseConfig);

const db = admin.firestore();

export { admin, db };
