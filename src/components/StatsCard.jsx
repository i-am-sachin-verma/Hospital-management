import React from 'react';
import './StatsCard.css';

export default function StatsCard({ label, value }) {
  return (
    <div className="stat-card">
      <strong>{label}</strong>
      <div>{value}</div>
    </div>
  );
}
