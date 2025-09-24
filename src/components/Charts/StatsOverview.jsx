import React from 'react';
import StatsCard from '../StatsCard';
import './StatsOverview.css';

export default function StatsOverview({ data }) {
  const total = data.length;
  const diseases = new Set(data.map(d => d.disease)).size;
  const drugs = new Set(data.map(d => d.drug)).size;

  return (
    <div className="stats-container">
      <StatsCard label="Total Patients" value={total} />
      <StatsCard label="Unique Diseases" value={diseases} />
      <StatsCard label="Drugs Used" value={drugs} />
    </div>
  );
}
