import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCZuzfprbDseXqloit7qC8_xXx-vw6-wVM",
  authDomain: "quiz-app-bcc9c.firebaseapp.com",
  projectId: "quiz-app-bcc9c",
  storageBucket: "quiz-app-bcc9c.appspot.com",
  messagingSenderId: "609396088272",
  appId: "1:609396088272:web:2c20c31e779bc38cb1edd5",
  measurementId: "G-PV68FSL5C6",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
export const auth = getAuth();
export default app;
