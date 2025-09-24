import React from 'react';
import CommentForm from '../components/CommentForm';

function AllComments() {
  return (
    <div className="container mt-4">
      <h2>Add/View Comments</h2>
      <CommentForm />
    </div>
  );
}

export default AllComments;
