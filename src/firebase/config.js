// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyB5AGFlycGru4SD8BzJvVv_v7ueGUPvZS4",
//   authDomain: "patient-faed9.firebaseapp.com",
//   projectId: "patient-faed9",
//   storageBucket: "patient-faed9.firebasestorage.app",
//   messagingSenderId: "970684639708",
//   appId: "1:970684639708:web:24b738dfce8ba4a6764719"
// };

// const app = initializeApp(firebaseConfig);
//  export const db = getFirestore(app);

// export { db };



import { initializeApp } from "firebase/app";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB5AGFlycGru4SD8BzJvVv_v7ueGUPvZS4",
  authDomain: "patient-faed9.firebaseapp.com",
  projectId: "patient-faed9",
  storageBucket: "patient-faed9.firebasestorage.app",
  messagingSenderId: "970684639708",
  appId: "1:970684639708:web:24b738dfce8ba4a6764719"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const fetchData = async () => {
  const querySnapshot = await getDocs(collection(db, "patients"));
  return querySnapshot.docs.map(doc => doc.data());
};