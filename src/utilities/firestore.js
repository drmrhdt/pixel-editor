import "../firebase/firebaseConfig";
import { firestore } from "../firebase/firebaseConfig";

export const getCollection = async collection => {
  const snapshot = await firestore.collection(collection).get();
  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
};

export const addItem = async (url, collection) => {
  firestore.collection(collection).add({
    date: +new Date(),
    url: url
  });
};
