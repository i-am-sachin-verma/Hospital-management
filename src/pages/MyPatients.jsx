import React, { useEffect, useState } from 'react';
import {
  collection,
  query,
  where,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  orderBy,
  onSnapshot
} from 'firebase/firestore';
import { db } from '../firebase/config';
import { useAuth } from '../context/AuthContext';

function MyPatients() {
  const { currentUser } = useAuth();
  const [patients, setPatients] = useState([]);
  const [comments, setComments] = useState({}); 
  const [newComment, setNewComment] = useState("");
  const [editCommentId, setEditCommentId] = useState(null);
  const [editText, setEditText] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const q = query(collection(db, 'patients'), where('addedBy', '==', currentUser.uid));
      const snapshot = await getDocs(q);
      const patientList = snapshot.docs.map(docSnap => ({ id: docSnap.id, ...docSnap.data() }));
      setPatients(patientList);

      // real-time comments listener
      patientList.forEach((p) => {
        const cq = query(collection(db, 'patients', p.id, 'comments'), orderBy("createdAt", "desc"));
        onSnapshot(cq, (cSnapshot) => {
          setComments(prev => ({
            ...prev,
            [p.id]: cSnapshot.docs.map(c => ({ id: c.id, ...c.data() }))
          }));
        });
      });
    };
    fetchData();
  }, [currentUser.uid]);

  // Add new comment
  const handleAddComment = async (patientId) => {
    if (!newComment.trim()) return;

    await addDoc(collection(db, "patients", patientId, "comments"), {
      text: newComment,
      createdBy: currentUser.uid,
      createdAt: new Date()
    });

    setNewComment("");
  };

  // Edit comment
  const handleEditComment = async (patientId, commentId) => {
    if (!editText.trim()) return;

    await updateDoc(doc(db, "patients", patientId, "comments", commentId), {
      text: editText
    });

    setEditCommentId(null);
    setEditText("");
  };

  // Delete comment
  const handleDeleteComment = async (patientId, commentId) => {
    await deleteDoc(doc(db, "patients", patientId, "comments", commentId));
  };

  return (
    <div className="container mt-4">
      <h2>My Patients</h2>
      {patients.map(p => (
        <div key={p.id} className="card mb-4">
          <div className="card-body">
            <h5>{p.name} (Age: {p.age})</h5>
            <p>Disease: {p.disease} | Contact: {p.contact}</p>

            <h6>Comments:</h6>
            <div>
              {comments[p.id]?.map(c => (
                <div key={c.id} className="mb-2">
                  {editCommentId === c.id ? (
                    <>
                      <input
                        value={editText}
                        onChange={(e) => setEditText(e.target.value)}
                        className="form-control mb-1"
                      />
                      <button
                        className="btn btn-success btn-sm"
                        onClick={() => handleEditComment(p.id, c.id)}
                      >
                        Save
                      </button>
                    </>
                  ) : (
                    <>
                      <p>{c.text}</p>
                      {c.createdBy === currentUser.uid && (
                        <>
                          <button
                            className="btn btn-warning btn-sm me-2"
                            onClick={() => { setEditCommentId(c.id); setEditText(c.text); }}
                          >
                            Edit
                          </button>
                          <button
                            className="btn btn-danger btn-sm"
                            onClick={() => handleDeleteComment(p.id, c.id)}
                          >
                            Delete
                          </button>
                        </>
                      )}
                    </>
                  )}
                </div>
              ))}
            </div>

            <input
              type="text"
              placeholder="Add a comment..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              className="form-control mt-2"
            />
            <button
              className="btn btn-primary btn-sm mt-2"
              onClick={() => handleAddComment(p.id)}
            >
              Add Comment
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MyPatients;
