// import React, { useState } from "react";
// import { db } from "../firebase/config";
// import { collection, addDoc } from "firebase/firestore";
// import "./Form.css";

// function PatientForm() {
//   const [patient, setPatient] = useState({
//     name: "", age: "", gender: "", contact: "", disease: "",
//   });

//   const handleChange = (e) => {
//     setPatient({ ...patient, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     await addDoc(collection(db, "patients"), patient);
//     alert("Patient added successfully!");
//   };

//   return (
//     <form className="form" onSubmit={handleSubmit}>
//       {["Name", "Age", "Gender", "Contact", "Disease"].map((field) => (
//         <input
//           key={field}
//           type="text"
//           name={field}
//           placeholder={field}
//           value={patient[field]}
//           onChange={handleChange}
//           required
//         />
//       ))}
//       <button type="submit">Submit</button>
//     </form>
//   );
// }

// export default PatientForm;




// import React, { useState } from 'react';
// import { db } from '../firebase/config';
// import { collection, addDoc } from 'firebase/firestore';
// import { useAuth } from '../context/AuthContext';

// function PatientForm() {
//   const { currentUser, userData } = useAuth();

//   const [formData, setFormData] = useState({
//     name: '', 
//     age: '', 
//     gender: '', 
//     contact: '', 
//     disease: ''
//   });

//   const handleChange = (e) => {
//     setFormData({ 
//       ...formData, 
//       [e.target.name]: e.target.value 
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Check that currentUser exists
//     if (!currentUser) {
//       alert('User not logged in');
//       return;
//     }

//     try {
//       await addDoc(collection(db, 'patients'), {
//         ...formData,
//         addedBy: currentUser.uid,
//         icuId: userData?.icuId || null,
//         createdAt: new Date()
//       });
//       alert('Patient added successfully!');
//       setFormData({ name: '', age: '', gender: '', contact: '', disease: '' });
//     } catch (error) {
//       console.error('Error adding patient:', error);
//       alert('Error adding patient. Please try again.');
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       {["name", "age", "gender", "contact", "disease"].map((field) => (
//         <input
//           key={field}
//           className="form-control mb-2"
//           type="text"
//           name={field}
//           value={formData[field]}
//           placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
//           onChange={handleChange}
//           required
//         />
//       ))}
//       <button className="btn btn-primary" type="submit">
//         Add Patient
//       </button>
//     </form>
//   );
// }

// export default PatientForm;




import React, { useState } from 'react';
import { db } from '../firebase/config';
import { collection, addDoc } from 'firebase/firestore';
import { useAuth } from '../context/AuthContext';

function PatientForm() {
  const { currentUser, userData } = useAuth();

  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    contact: '',
    disease: '',
    drug:''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!currentUser || !userData) {
      alert("User not logged in or missing user data.");
      return;
    }

    // Only allow doctor, icu_head, admin to add patients
    if (!['doctor', 'icu_head', 'admin'].includes(userData.role)) {
      alert("You do not have permission to add patients.");
      return;
    }

    try {
      await addDoc(collection(db, 'patients'), {
        ...formData,
        addedBy: currentUser.uid,
        addedByRole: userData.role,
        icuId: userData.icuId || null,
        createdAt: new Date()
      });
      alert("Patient added successfully!");
      setFormData({ name: '', age: '', gender: '', contact: '', disease: '',drug:'' });
    } catch (error) {
      console.error("Error adding patient:", error);
      alert("Error adding patient. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {["name", "age", "gender", "contact", "disease","drug"].map((field) => (
        <input
          key={field}
          className="form-control mb-2"
          type="text"
          name={field}
          value={formData[field]}
          placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
          onChange={handleChange}
          required
        />
      ))}
      <button className="btn btn-primary" type="submit">
        Add Patient
      </button>
    </form>
  );
}

export default PatientForm;
