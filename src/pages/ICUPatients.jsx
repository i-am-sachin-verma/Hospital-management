import React, { useEffect, useState } from "react";
import { db } from "../firebase/config";
import { collection, query, where, getDocs } from "firebase/firestore";
import { useAuth } from "../context/AuthContext";

function ICUPatients() {
  const { currentUser } = useAuth();
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    const fetchPatients = async () => {
      if (!currentUser?.icuId) {
        return;  // No ICU assigned, don't query
      }

      const q = query(collection(db, "patients"), where("icuId", "==", currentUser.icuId));
      const querySnapshot = await getDocs(q);
      const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setPatients(data);
    };

    fetchPatients();
  }, [currentUser]);

  if (!currentUser?.icuId) {
    return <div>No ICU assigned to you or you are not logged in.</div>;
  }

  return (
    <div>
      <h2>Patients in your ICU</h2>
      {patients.map(patient => (
        <div key={patient.id}>
          <p>Name: {patient.name}</p>
          <p>Disease: {patient.disease}</p>
        </div>
      ))}
    </div>
  );
}

export default ICUPatients;
