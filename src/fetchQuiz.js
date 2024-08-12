import {
  getFirestore,
  collection,
  getDocs,
  query,
} from "firebase/firestore";

export const fetchAllQuizzes = async () => {
  const db = getFirestore(); // Get Firestore instance

  const colRef = collection(db, "quizzes"); // Replace with your collection name

  // Optional: Add filtering or ordering using query
  const q = query(colRef); // Default: retrieves all documents

  const querySnapshot = await getDocs(q); // Get query results

  const data = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(), // Get data from each document
  }));

  return data;
};



