// import React from "react";
// import AllotmentForm from "../components/AllotmentForm.jsx";

// function AddAllotment() {
//   return (
//     <div className="container">
//       <h2 className="allot_title">Allot Ward / Bed</h2>
//       <AllotmentForm />
//     </div>
//   );
// }

// export default AddAllotment;
import React from 'react';
import AllotmentForm from '../components/AllotmentForm';

function AddAllotment() {
  return (
    <div className="container mt-4">
      <h2>Add Allotment</h2>
      <AllotmentForm />
    </div>
  );
}

export default AddAllotment;
