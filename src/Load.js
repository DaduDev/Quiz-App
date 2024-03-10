import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";

export const Load = async (quizId) => {
  const quizzesRef = collection(db, "quizzes", quizId);
  const querySnap = await getDocs(quizzesRef);
  return querySnap.docs.map((doc) => doc.data());
};
