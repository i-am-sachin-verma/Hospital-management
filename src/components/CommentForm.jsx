import React, { useState } from 'react';
import { db } from '../firebase/config';
import { collection, addDoc } from 'firebase/firestore';
import { useAuth } from '../context/AuthContext';

function CommentForm() {
  const { currentUser } = useAuth();
  const [comment, setComment] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addDoc(collection(db, 'comments'), {
      text: comment,
      addedBy: currentUser.uid,
      createdAt: new Date()
    });
    alert('Comment added!');
    setComment('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        className="form-control mb-2"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Enter your comment"
        required
      />
      <button className="btn btn-primary" type="submit">Add Comment</button>
    </form>
  );
}

export default CommentForm;
