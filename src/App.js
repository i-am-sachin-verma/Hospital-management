// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import AddPatient from "./pages/AddPatient";
// import AddAllotment from "./pages/AddAllotment";
// import Navbar from "./components/Navbar";


// import 'bootstrap/dist/css/bootstrap.min.css';

// function App() {
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/add-patient" element={<AddPatient />} />
//         <Route path="/add-allotment" element={<AddAllotment />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { AuthProvider } from './context/AuthContext';
// import ProtectedRoute from './components/ProtectedRoute';
// import Navbar from './components/Navbar';
// import Home from './pages/Home';
// import Login from './pages/Login';
// import Signup from './pages/Signup';
// import AddPatient from './pages/AddPatient';
// import AddAllotment from './pages/AddAllotment';
// import MyPatients from './pages/MyPatients';
// import ICUPatients from './pages/ICUPatients';
// import AdminPanel from './pages/AdminPanel';
// import AllComments from './pages/AllComments';

// import 'bootstrap/dist/css/bootstrap.min.css';

// function App() {
//   return (
//     <AuthProvider>
//       <Router>
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/signup" element={<Signup />} />

//           <Route path="/add-patient" element={
//             <ProtectedRoute allowedRoles={['doctor', 'admin', 'icu_head']}>
//               <AddPatient />
//             </ProtectedRoute>
//           } />

//           <Route path="/add-allotment" element={
//             <ProtectedRoute allowedRoles={['admin']}>
//               <AddAllotment />
//             </ProtectedRoute>
//           } />

//           <Route path="/my-patients" element={
//             <ProtectedRoute allowedRoles={['doctor']}>
//               <MyPatients />
//             </ProtectedRoute>
//           } />

//           <Route path="/icu-patients" element={
//             <ProtectedRoute allowedRoles={['icu_head']}>
//               <ICUPatients />
//             </ProtectedRoute>
//           } />

//           <Route path="/admin-panel" element={
//             <ProtectedRoute allowedRoles={['admin']}>
//               <AdminPanel />
//             </ProtectedRoute>
//           } />

//           <Route path="/comments" element={
//             <ProtectedRoute allowedRoles={['doctor', 'icu_head', 'admin']}>
//               <AllComments />
//             </ProtectedRoute>
//           } />
//         </Routes>
//       </Router>
//     </AuthProvider>
//   );
// }

// export default App;



// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Home from "./pages/Home";
// import AddPatient from "./pages/AddPatient";
// import AddAllotment from "./pages/AddAllotment";
// import MyPatients from "./pages/MyPatients";
// import ICUPatients from "./pages/ICUPatients";
// import AdminPanel from "./pages/AdminPanel";
// import AllComments from "./pages/AllComments";
// import Login from "./pages/Login";
// import Signup from "./pages/Signup";

// function App() {
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/add-patient" element={<AddPatient />} />
//         <Route path="/add-allotment" element={<AddAllotment />} />
//         <Route path="/my-patients" element={<MyPatients />} />
//         <Route path="/icu-patients" element={<ICUPatients />} />
//         <Route path="/admin" element={<AdminPanel />} />
//         <Route path="/comments" element={<AllComments />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;



import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";

import Home from "./pages/Home";
import AddPatient from "./pages/AddPatient";
import AddAllotment from "./pages/AddAllotment";
import MyPatients from "./pages/MyPatients";
import ICUPatients from "./pages/ICUPatients";
import AdminPanel from "./pages/AdminPanel";
import AllComments from "./pages/AllComments";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Header from "./components/Header";
import PatientList from "./components/PatientList";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          <Route path="/add-patient" element={
            <ProtectedRoute allowedRoles={['doctor', 'admin', 'icu_head']}>
              <AddPatient />
            </ProtectedRoute>
          } />

          <Route path="/add-allotment" element={
            <ProtectedRoute allowedRoles={['admin']}>
              <AddAllotment />
            </ProtectedRoute>
          } />

          <Route path="/my-patients" element={
            <ProtectedRoute allowedRoles={['doctor']}>
              <MyPatients />
            </ProtectedRoute>
          } />

          <Route path="/icu-patients" element={
            <ProtectedRoute allowedRoles={['icu_head']}>
              <ICUPatients />
            </ProtectedRoute>
          } />

          <Route path="/admin" element={
            <ProtectedRoute allowedRoles={['admin']}>
              <AdminPanel />
            </ProtectedRoute>
          } />
          <Route path="/medical" element={<Header></Header>}/>
           <Route path="/list" element={<PatientList></PatientList>} />
          <Route path="/comments" element={
            <ProtectedRoute allowedRoles={['doctor', 'icu_head', 'admin']}>
           
              <MyPatients/>
            </ProtectedRoute>
          } />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;




