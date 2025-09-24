// import React from "react";
// import PatientForm from "../components/PatientForm.jsx";

// function AddPatient() {
//   return (
//     <div className="container">
//       <h2 className="add_patient_title">Add New Patient</h2>
//       <PatientForm />
//     </div>
//   );
// }

// export default AddPatient;
import React from 'react';
import PatientForm from '../components/PatientForm';

function AddPatient() {
  return (
    <div className="container mt-4">
      <h2>Add New Patient</h2>
      <PatientForm />
    </div>
  );
}

export default AddPatient;
