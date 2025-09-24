import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';
Chart.register(ArcElement, Tooltip, Legend);

export default function DiseaseChart({ data }) {
  const diseases = [...new Set(data.map(item => item.disease))];
  const counts = diseases.map(disease => data.filter(i => i.disease === disease).length);

  const pieData = {
    labels: diseases,
    datasets: [{
      label: 'Disease Occurrence',
      data: counts,
      backgroundColor: ['#66bb6a', '#ef5350', '#ab47bc', '#ffa726', '#29b6f6']
    }]
  };

  return <Pie data={pieData} />;
}
