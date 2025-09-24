import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, BarElement, CategoryScale, LinearScale } from 'chart.js';
Chart.register(BarElement, CategoryScale, LinearScale);

export default function DrugUsageChart({ data }) {
  const drugs = [...new Set(data.map(item => item.drug))];
  const counts = drugs.map(drug => data.filter(i => i.drug === drug).length);

  const chartData = {
    labels: drugs,
    datasets: [{
      label: 'Drug Usage',
      data: counts,
      backgroundColor: '#42a5f5',
    }]
  };

  return <Bar data={chartData} />;
}
