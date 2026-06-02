import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAmQUOPH1enqocOxhW7g89NaNBnHfqhzDE",
  authDomain: "gudang-interior.firebaseapp.com",
  projectId: "gudang-interior",
  storageBucket: "gudang-interior.firebasestorage.app",
  messagingSenderId: "717359206731",
  appId: "1:717359206731:web:699e40bb2359ef360558ce",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);

export default app;