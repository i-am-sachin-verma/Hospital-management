// // src/components/PatientList.jsx
// import React, { useEffect, useState } from 'react';
// import { collection, getDocs, doc, updateDoc } from 'firebase/firestore';
// import { db } from '../firebase/config';

// export default function PatientList() {
//   const [patients, setPatients] = useState([]);
//   const [editId, setEditId] = useState(null);
//   const [formData, setFormData] = useState({ name: '',gender:'', age: '', contact: '', disease: '' });

//   useEffect(() => {
//     fetchPatients();
//   }, []);

//   const fetchPatients = async () => {
//     const querySnapshot = await getDocs(collection(db, 'patients'));
//     const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
//     setPatients(data);
//   };

//   const handleEdit = (patient) => {
//     setEditId(patient.id);
//     setFormData({ name: patient.name,gender:patient.gender, age: patient.age, contact: patient.contact, disease: patient.disease });
//   };

//   const handleSave = async (id) => {
//     await updateDoc(doc(db, 'patients', id), formData);
//     alert('Patient updated!');
//     setEditId(null);
//     setFormData({ name: '',gender:'' ,age: '', contact: '', disease: '' });
//     fetchPatients();
//   };

//   return (
//     <div className="container mt-4">
//       <h2 className="mb-4">🧾 Patient List</h2>
//       {patients.map((p) => (
//         <div className="card mb-3" key={p.id}>
//           <div className="card-body">
//             {editId === p.id ? (
//               <>
//                 <input className="form-control mb-2" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} placeholder='Name' />
//                 <input className="form-control mb-2" value={formData.gender} onChange={e => setFormData({ ...formData, gender: e.target.value })} placeholder='Gender' />
//                 <input className="form-control mb-2" value={formData.age} onChange={e => setFormData({ ...formData, age: e.target.value })} placeholder='Age'/>
//                 <input className="form-control mb-2" value={formData.contact} onChange={e => setFormData({ ...formData, contact: e.target.value })} placeholder='Conatct' />
//                 <input className="form-control mb-2" value={formData.disease} onChange={e => setFormData({ ...formData, disease: e.target.value })} placeholder='Disease' />
//                 <button className="btn btn-success me-2" onClick={() => handleSave(p.id)}>Save</button>
//                 <button className="btn btn-secondary" onClick={() => setEditId(null)}>Cancel</button>
//               </>
//             ) : (
//               <>
//                 <h5 className="card-title">{p.name}</h5>
//                 <p className="card-text">Gender: {p.gender}</p>
//                 <p className="card-text">Age: {p.age}</p>
//                 <p className="card-text">Contact: {p.contact}</p>
//                 <p className="card-text">Disease: {p.disease}</p>
//                 <button className="btn btn-primary" onClick={() => handleEdit(p)}>Edit</button>
//               </>
//             )}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }
// import React, { useEffect, useState } from 'react';
// import { collection, getDocs, doc, updateDoc } from 'firebase/firestore';
// import { db } from '../firebase/config';

// export default function PatientList() {
//   const [patients, setPatients] = useState([]);
//   const [editId, setEditId] = useState(null);

//   const [formData, setFormData] = useState({
//     name: '',
//     gender: '',
//     age: '',
//     contact: '',
//     disease: '',
//     records: {
//       surgical: {
//         name: '',
//         date: '',
//         hospital: '',
//         surgeon: '',
//         outcome: '',
//       },
//       antimicrobial: {
//         name: '',
//         infection: '',
//         duration: '',
//         response: '',
//       },
//       antifungal: {
//         name: '',
//         condition: '',
//         duration: '',
//         response: '',
//       },
//       lab: {
//         test: '',
//         date: '',
//         result: '',
//         observation: '',
//       }
//     }
//   });

//   useEffect(() => {
//     fetchPatients();
//   }, []);

//   const fetchPatients = async () => {
//     const querySnapshot = await getDocs(collection(db, 'patients'));
//     const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
//     setPatients(data);
//   };

//   const handleEdit = (patient) => {
//     setEditId(patient.id);
//     setFormData({
//       name: patient.name || '',
//       gender: patient.gender || '',
//       age: patient.age || '',
//       contact: patient.contact || '',
//       disease: patient.disease || '',
//       records: {
//         surgical: {
//           name: patient.records?.surgical?.name || '',
//           date: patient.records?.surgical?.date || '',
//           hospital: patient.records?.surgical?.hospital || '',
//           surgeon: patient.records?.surgical?.surgeon || '',
//           outcome: patient.records?.surgical?.outcome || '',
//         },
//         antimicrobial: {
//           name: patient.records?.antimicrobial?.name || '',
//           infection: patient.records?.antimicrobial?.infection || '',
//           duration: patient.records?.antimicrobial?.duration || '',
//           response: patient.records?.antimicrobial?.response || '',
//         },
//         antifungal: {
//           name: patient.records?.antifungal?.name || '',
//           condition: patient.records?.antifungal?.condition || '',
//           duration: patient.records?.antifungal?.duration || '',
//           response: patient.records?.antifungal?.response || '',
//         },
//         lab: {
//           test: patient.records?.lab?.test || '',
//           date: patient.records?.lab?.date || '',
//           result: patient.records?.lab?.result || '',
//           observation: patient.records?.lab?.observation || '',
//         }
//       }
//     });
//   };

//   const handleSave = async (id) => {
//     await updateDoc(doc(db, 'patients', id), formData);
//     alert('Patient record updated!');
//     setEditId(null);
//     setFormData({
//       name: '',
//       gender: '',
//       age: '',
//       contact: '',
//       disease: '',
//       records: {
//         surgical: { name: '', date: '', hospital: '', surgeon: '', outcome: '' },
//         antimicrobial: { name: '', infection: '', duration: '', response: '' },
//         antifungal: { name: '', condition: '', duration: '', response: '' },
//         lab: { test: '', date: '', result: '', observation: '' }
//       }
//     });
//     fetchPatients();
//   };

//   const handleRecordChange = (section, field, value) => {
//     setFormData({
//       ...formData,
//       records: {
//         ...formData.records,
//         [section]: {
//           ...formData.records[section],
//           [field]: value
//         }
//       }
//     });
//   };

//   return (
//     <div className="container mt-4">
//       <h2 className="mb-4">🧾 Patient List</h2>
//       {patients.map((p) => (
//         <div className="card mb-4" key={p.id}>
//           <div className="card-body">
//             {editId === p.id ? (
//               <>
//                 <input className="form-control mb-2" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} placeholder='Name' />
//                 <input className="form-control mb-2" value={formData.gender} onChange={e => setFormData({ ...formData, gender: e.target.value })} placeholder='Gender' />
//                 <input className="form-control mb-2" value={formData.age} onChange={e => setFormData({ ...formData, age: e.target.value })} placeholder='Age' />
//                 <input className="form-control mb-2" value={formData.contact} onChange={e => setFormData({ ...formData, contact: e.target.value })} placeholder='Contact' />
//                 <input className="form-control mb-3" value={formData.disease} onChange={e => setFormData({ ...formData, disease: e.target.value })} placeholder='Disease' />

//                 {/* Surgical */}
//                 <h5>🩺 Surgical Records</h5>
//                 <input className="form-control mb-2" placeholder="Surgery Name" value={formData.records.surgical.name} onChange={e => handleRecordChange('surgical', 'name', e.target.value)} />
//                 <input className="form-control mb-2" placeholder="Surgery Date" value={formData.records.surgical.date} onChange={e => handleRecordChange('surgical', 'date', e.target.value)} />
//                 <input className="form-control mb-2" placeholder="Hospital Name" value={formData.records.surgical.hospital} onChange={e => handleRecordChange('surgical', 'hospital', e.target.value)} />
//                 <input className="form-control mb-2" placeholder="Surgeon Name" value={formData.records.surgical.surgeon} onChange={e => handleRecordChange('surgical', 'surgeon', e.target.value)} />
//                 <textarea className="form-control mb-3" placeholder="Outcome / Notes" value={formData.records.surgical.outcome} onChange={e => handleRecordChange('surgical', 'outcome', e.target.value)} />

//                 {/* Antimicrobial */}
//                 <h5>🧫 Antimicrobial Records</h5>
//                 <input className="form-control mb-2" placeholder="Antibiotic Name" value={formData.records.antimicrobial.name} onChange={e => handleRecordChange('antimicrobial', 'name', e.target.value)} />
//                 <input className="form-control mb-2" placeholder="Infection Treated" value={formData.records.antimicrobial.infection} onChange={e => handleRecordChange('antimicrobial', 'infection', e.target.value)} />
//                 <input className="form-control mb-2" placeholder="Duration" value={formData.records.antimicrobial.duration} onChange={e => handleRecordChange('antimicrobial', 'duration', e.target.value)} />
//                 <textarea className="form-control mb-3" placeholder="Response" value={formData.records.antimicrobial.response} onChange={e => handleRecordChange('antimicrobial', 'response', e.target.value)} />

//                 {/* Antifungal */}
//                 <h5>🦠 Antifungal Records</h5>
//                 <input className="form-control mb-2" placeholder="Antifungal Name" value={formData.records.antifungal.name} onChange={e => handleRecordChange('antifungal', 'name', e.target.value)} />
//                 <input className="form-control mb-2" placeholder="Condition Treated" value={formData.records.antifungal.condition} onChange={e => handleRecordChange('antifungal', 'condition', e.target.value)} />
//                 <input className="form-control mb-2" placeholder="Duration" value={formData.records.antifungal.duration} onChange={e => handleRecordChange('antifungal', 'duration', e.target.value)} />
//                 <textarea className="form-control mb-3" placeholder="Response" value={formData.records.antifungal.response} onChange={e => handleRecordChange('antifungal', 'response', e.target.value)} />

//                 {/* Lab Records */}
//                 <h5>🔬 Lab Records</h5>
//                 <input className="form-control mb-2" placeholder="Test Name" value={formData.records.lab.test} onChange={e => handleRecordChange('lab', 'test', e.target.value)} />
//                 <input className="form-control mb-2" placeholder="Test Date" value={formData.records.lab.date} onChange={e => handleRecordChange('lab', 'date', e.target.value)} />
//                 <input className="form-control mb-2" placeholder="Test Result" value={formData.records.lab.result} onChange={e => handleRecordChange('lab', 'result', e.target.value)} />
//                 <textarea className="form-control mb-3" placeholder="Observations" value={formData.records.lab.observation} onChange={e => handleRecordChange('lab', 'observation', e.target.value)} />

//                 <button className="btn btn-success me-2" onClick={() => handleSave(p.id)}>Save</button>
//                 <button className="btn btn-secondary" onClick={() => setEditId(null)}>Cancel</button>
//               </>
//             ) : (
//               <>
//                 <h5>{p.name}</h5>
//                 <p>Gender: {p.gender}</p>
//                 <p>Age: {p.age}</p>
//                 <p>Contact: {p.contact}</p>
//                 <p>Disease: {p.disease}</p>

//                 <h6>🩺 Surgical: {p.records?.surgical?.name || 'N/A'}</h6>
//                 <h6>🧫 Antibiotic: {p.records?.antimicrobial?.name || 'N/A'}</h6>
//                 <h6>🦠 Antifungal: {p.records?.antifungal?.name || 'N/A'}</h6>
//                 <h6>🔬 Lab Test: {p.records?.lab?.test || 'N/A'}</h6>

//                 <button className="btn btn-primary" onClick={() => handleEdit(p)}>Edit</button>
//               </>
//             )}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }


import React, { useEffect, useState } from 'react';
import { collection, getDocs, doc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase/config';

export default function PatientList() {
  const [patients, setPatients] = useState([]);
  const [editId, setEditId] = useState(null);

  const [formData, setFormData] = useState({
    name: '',
    gender: '',
    age: '',
    contact: '',
    disease: '',
    records: {
      surgical: { name: '', date: '', hospital: '', surgeon: '', outcome: '' },
      antimicrobial: { name: '', infection: '', duration: '', response: '' },
      antifungal: { name: '', condition: '', duration: '', response: '' },
      lab: { test: '', date: '', result: '', observation: '' }
    }
  });

  useEffect(() => {
    fetchPatients();
  }, []);

  const fetchPatients = async () => {
    const querySnapshot = await getDocs(collection(db, 'patients'));
    const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setPatients(data);
  };

  const handleEdit = (patient) => {
    setEditId(patient.id);
    setFormData({
      name: patient.name || '',
      gender: patient.gender || '',
      age: patient.age || '',
      contact: patient.contact || '',
      disease: patient.disease || '',
      records: {
        surgical: {
          name: patient.records?.surgical?.name || '',
          date: patient.records?.surgical?.date || '',
          hospital: patient.records?.surgical?.hospital || '',
          surgeon: patient.records?.surgical?.surgeon || '',
          outcome: patient.records?.surgical?.outcome || '',
        },
        antimicrobial: {
          name: patient.records?.antimicrobial?.name || '',
          infection: patient.records?.antimicrobial?.infection || '',
          duration: patient.records?.antimicrobial?.duration || '',
          response: patient.records?.antimicrobial?.response || '',
        },
        antifungal: {
          name: patient.records?.antifungal?.name || '',
          condition: patient.records?.antifungal?.condition || '',
          duration: patient.records?.antifungal?.duration || '',
          response: patient.records?.antifungal?.response || '',
        },
        lab: {
          test: patient.records?.lab?.test || '',
          date: patient.records?.lab?.date || '',
          result: patient.records?.lab?.result || '',
          observation: patient.records?.lab?.observation || '',
        }
      }
    });
  };

  const handleSave = async (id) => {
    await updateDoc(doc(db, 'patients', id), formData);
    alert('Patient record updated!');
    setEditId(null);
    setFormData({
      name: '',
      gender: '',
      age: '',
      contact: '',
      disease: '',
      records: {
        surgical: { name: '', date: '', hospital: '', surgeon: '', outcome: '' },
        antimicrobial: { name: '', infection: '', duration: '', response: '' },
        antifungal: { name: '', condition: '', duration: '', response: '' },
        lab: { test: '', date: '', result: '', observation: '' }
      }
    });
    fetchPatients();
  };

  const handleRecordChange = (section, field, value) => {
    setFormData({
      ...formData,
      records: {
        ...formData.records,
        [section]: {
          ...formData.records[section],
          [field]: value
        }
      }
    });
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4 text-center fw-bold">🧾 Patient Records</h2>
      {patients.map((p) => (
        <div className="card shadow mb-4 border-primary" key={p.id}>
          <div className="card-header d-flex justify-content-between align-items-center bg-dark text-white">
            <h5 className="mb-0 fw-bold">{p.name} </h5>
            <button className="btn btn-light btn-sm" onClick={() => handleEdit(p)}>✏️ Edit</button>
          </div>
          <div className="card-body">
            {editId === p.id ? (
              <>
                <input className="form-control mb-2" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} placeholder='Name' />
                <input className="form-control mb-2" value={formData.gender} onChange={e => setFormData({ ...formData, gender: e.target.value })} placeholder='Gender' />
                <input className="form-control mb-2" value={formData.age} onChange={e => setFormData({ ...formData, age: e.target.value })} placeholder='Age' />
                <input className="form-control mb-2" value={formData.contact} onChange={e => setFormData({ ...formData, contact: e.target.value })} placeholder='Contact' />
                <input className="form-control mb-3" value={formData.disease} onChange={e => setFormData({ ...formData, disease: e.target.value })} placeholder='Disease' />

                {/* Surgical Records */}
                <h5 className="text-primary">🩻 Surgical Records</h5>
                <div className="row">
                  <div className="col-md-6 mb-2"><input className="form-control" placeholder="Surgery Name" value={formData.records.surgical.name} onChange={e => handleRecordChange('surgical', 'name', e.target.value)} /></div>
                  <div className="col-md-6 mb-2"><input type="date" className="form-control" value={formData.records.surgical.date} onChange={e => handleRecordChange('surgical', 'date', e.target.value)} /></div>
                  <div className="col-md-6 mb-2"><input className="form-control" placeholder="Hospital" value={formData.records.surgical.hospital} onChange={e => handleRecordChange('surgical', 'hospital', e.target.value)} /></div>
                  <div className="col-md-6 mb-2"><input className="form-control" placeholder="Surgeon" value={formData.records.surgical.surgeon} onChange={e => handleRecordChange('surgical', 'surgeon', e.target.value)} /></div>
                  <div className="col-12 mb-3"><textarea className="form-control" placeholder="Outcome" value={formData.records.surgical.outcome} onChange={e => handleRecordChange('surgical', 'outcome', e.target.value)} /></div>
                </div>

                {/* Antimicrobial Records */}
                <h5 className="text-success">🧫 Antimicrobial Records</h5>
                <div className="row">
                  <div className="col-md-6 mb-2"><input className="form-control" placeholder="Antibiotic Name" value={formData.records.antimicrobial.name} onChange={e => handleRecordChange('antimicrobial', 'name', e.target.value)} /></div>
                  <div className="col-md-6 mb-2"><input className="form-control" placeholder="Infection" value={formData.records.antimicrobial.infection} onChange={e => handleRecordChange('antimicrobial', 'infection', e.target.value)} /></div>
                  <div className="col-md-6 mb-2"><input className="form-control" placeholder="Duration" value={formData.records.antimicrobial.duration} onChange={e => handleRecordChange('antimicrobial', 'duration', e.target.value)} /></div>
                  <div className="col-12 mb-3"><textarea className="form-control" placeholder="Response" value={formData.records.antimicrobial.response} onChange={e => handleRecordChange('antimicrobial', 'response', e.target.value)} /></div>
                </div>

                {/* Antifungal Records */}
                <h5 className="text-warning">🦠 Antifungal Records</h5>
                <div className="row">
                  <div className="col-md-6 mb-2"><input className="form-control" placeholder="Antifungal Name" value={formData.records.antifungal.name} onChange={e => handleRecordChange('antifungal', 'name', e.target.value)} /></div>
                  <div className="col-md-6 mb-2"><input className="form-control" placeholder="Condition" value={formData.records.antifungal.condition} onChange={e => handleRecordChange('antifungal', 'condition', e.target.value)} /></div>
                  <div className="col-md-6 mb-2"><input className="form-control" placeholder="Duration" value={formData.records.antifungal.duration} onChange={e => handleRecordChange('antifungal', 'duration', e.target.value)} /></div>
                  <div className="col-12 mb-3"><textarea className="form-control" placeholder="Response" value={formData.records.antifungal.response} onChange={e => handleRecordChange('antifungal', 'response', e.target.value)} /></div>
                </div>

                {/* Lab Records */}
                <h6 className="text-danger">🔬 Lab Records</h6>
                <div className="row">
                  <div className="col-md-6 mb-2"><input className="form-control" placeholder="Test" value={formData.records.lab.test} onChange={e => handleRecordChange('lab', 'test', e.target.value)} /></div>
                  <div className="col-md-6 mb-2"><input type="date" className="form-control" value={formData.records.lab.date} onChange={e => handleRecordChange('lab', 'date', e.target.value)} /></div>
                  <div className="col-md-6 mb-2"><input className="form-control" placeholder="Result" value={formData.records.lab.result} onChange={e => handleRecordChange('lab', 'result', e.target.value)} /></div>
                  <div className="col-12 mb-3"><textarea className="form-control" placeholder="Observation" value={formData.records.lab.observation} onChange={e => handleRecordChange('lab', 'observation', e.target.value)} /></div>
                </div>

                <button className="btn btn-success me-2" onClick={() => handleSave(p.id)}>Save</button>
                <button className="btn btn-secondary" onClick={() => setEditId(null)}>Cancel</button>
              </>
            ) : (
              <>
                
                <p><strong> 🧑 Age:</strong> {p.age}</p>
                <p><strong>👤 Gender:</strong> {p.gender}</p>
                <p><strong>🩺 Disease:</strong> {p.disease}</p>
                <p><strong>📞 Contact:</strong> {p.contact}</p>
                <h6 className="text-primary fw-bold mt-2
                      "> 🩺 Surgical:<span style={{color:'black', fontWeight:'500'}}> {p.records?.surgical?.name || 'N/A'}</span></h6>
                <h6 className="text-success fw-bold  mt-2
                          ">🧫 Antibiotic: <span style={{color:'black', fontWeight:'500'}}> {p.records?.antimicrobial?.name || 'N/A'}</span></h6>
                <h6 className="text-warning fw-bold  mt-2
                    ">🦠 Antifungal: <span style={{color:'black', fontWeight:'500'}}> {p.records?.antifungal?.name || 'N/A'} </span></h6>
                <h6 className="text-danger fw-bold  mt-2
                    ">🔬 Lab Test: <span style={{color:'black', fontWeight:'500'}}> {p.records?.lab?.test || 'N/A'} </span></h6>
                <button className="btn btn-primary mt-2 px-5" onClick={() => handleEdit(p)}>Edit</button>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
