import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";

export const fetchAllQuizzes = async () => {
  const quizzesRef = collection(db, "quizzes");
  const querySnap = await getDocs(quizzesRef);
  return querySnap.docs.map((doc) => doc.data());
};
