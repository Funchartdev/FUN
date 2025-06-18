import { Line } from 'react-chartjs-2';
import { useEffect, useState } from 'react';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
} from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

export default function LiveChart() {
  const [data, setData] = useState({
    labels: Array.from({ length: 10 }, (_, i) => `T-${10 - i}`),
    datasets: [
      {
        label: 'Price',
        data: Array.from({ length: 10 }, () => Math.random() * 100),
        borderColor: 'lime',
        backgroundColor: 'rgba(0,255,0,0.2)',
      },
    ],
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setData((prev) => {
        const newVal = prev.datasets[0].data.slice(1);
        newVal.push(Math.random() * 100);
        return {
          ...prev,
          datasets: [
            {
              ...prev.datasets[0],
              data: newVal,
            },
          ],
        };
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return <Line data={data} options={{ responsive: true }} />;
}