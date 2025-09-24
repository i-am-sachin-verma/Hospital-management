// import React, { useState } from "react";
// import { db } from "../firebase/config";
// import { collection, addDoc } from "firebase/firestore";
// import "./Form.css";

// function AllotmentForm() {
//   const [allotment, setAllotment] = useState({
//     patientId: "", ward: "", bedNo: "", doctor: "", date: "",
//   });

//   const handleChange = (e) => {
//     setAllotment({ ...allotment, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     await addDoc(collection(db, "allotments"), allotment);
//     alert("Allotment added successfully!");
//   };

//   return (
//     <form className="form" onSubmit={handleSubmit}>
//       <input type="text" name="patientId" placeholder="Patient ID" value={allotment.patientId} onChange={handleChange} required />
//       <input type="text" name="ward" placeholder="Ward" value={allotment.ward} onChange={handleChange} required />
//       <input type="text" name="bedNo" placeholder="Bed Number" value={allotment.bedNo} onChange={handleChange} required />
//       <input type="text" name="doctor" placeholder="Doctor Name" value={allotment.doctor} onChange={handleChange} required />
//       <input type="date" name="date" value={allotment.date} onChange={handleChange} required />
//       <button type="submit">Submit Allotment</button>
//     </form>
//   );
// }

// export default AllotmentForm;
// import React, { useState } from 'react';
// import { db } from '../firebase/config';
// import { collection, addDoc } from 'firebase/firestore';
// import { useAuth } from '../context/AuthContext';

// function AllotmentForm() {
//   const { currentUser } = useAuth();
//   const [formData, setFormData] = useState({
//     patientId: '', ward: '', bedNo: '', doctor: '', date: ''
//   });

//   const handleChange = (e) => {
//     setFormData({...formData, [e.target.name]: e.target.value});
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     await addDoc(collection(db, 'allotments'), {
//       ...formData,
//       addedBy: currentUser.uid,
//       createdAt: new Date()
//     });
//     alert('Allotment added successfully!');
//     setFormData({ patientId: '', ward: '', bedNo: '', doctor: '', date: '' });
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       {["patientId", "ward", "bedNo", "doctor"].map((field) => (
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
//       <input
//         className="form-control mb-2"
//         type="date"
//         name="date"
//         value={formData.date}
//         onChange={handleChange}
//         required
//       />
//       <button className="btn btn-primary" type="submit">Add Allotment</button>
//     </form>
//   );
// }

// export default AllotmentForm;


import React, { useState } from 'react';
import { db } from '../firebase/config';
import { collection, addDoc } from 'firebase/firestore';
import { useAuth } from '../context/AuthContext';

function AllotmentForm() {
  const { currentUser, userData } = useAuth();

  const [formData, setFormData] = useState({
    patientId: '',
    ward: '',
    bedNo: '',
    doctor: '',
    date: ''
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

    // Only admin or icu_head can add allotment
    if (!['admin', 'icu_head'].includes(userData.role)) {
      alert("You do not have permission to add allotments.");
      return;
    }

    try {
      await addDoc(collection(db, 'allotments'), {
        ...formData,
        addedBy: currentUser.uid,
        addedByRole: userData.role,
        icuId: userData.icuId || null,  // Link to ICU if user is icu_head
        createdAt: new Date()
      });
      alert("Allotment added successfully!");
      setFormData({ patientId: '', ward: '', bedNo: '', doctor: '', date: '' });
    } catch (error) {
      console.error("Error adding allotment:", error);
      alert("Error adding allotment. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {["patientId", "ward", "bedNo", "doctor"].map((field) => (
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
      <input
        className="form-control mb-2"
        type="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
        required
      />
      <button className="btn btn-primary" type="submit">Add Allotment</button>
    </form>
  );
}

export default AllotmentForm;

