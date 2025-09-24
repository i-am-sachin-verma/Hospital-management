
import './Header.css';
import React, { useEffect, useState } from 'react';
import { fetchData } from '../firebase/config';
import DrugUsageChart from './Charts/DrugUsageChart';
import DiseaseChart from './Charts/DiseaseChart';
import StatsOverview from './Charts/StatsOverview';
export default function Header() {
  const [patientData, setPatientData] = useState([]);
  
    useEffect(() => {
      fetchData().then(setPatientData);
    }, []);
  return (
    <div className="app-container">
      <div className='header'>
      <h1>Medical Data Dashboard</h1>

      </div>
      <StatsOverview data={patientData} />
      <div className="charts-section">
        <div className="chart-card">
          <h2 className="chart-title">Drug Usage</h2>
          <DrugUsageChart data={patientData} />
        </div>
        <div className="chart-card">
          <h2 className="chart-title">Disease Occurrence</h2>
          <DiseaseChart data={patientData} />
        </div>
      </div>
    </div>
  );
}
