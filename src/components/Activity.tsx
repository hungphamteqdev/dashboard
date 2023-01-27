import { GetActivityResponse } from '@/types/GetActivityResponse';
import axios from 'axios';
import {
  CategoryScale,
  Chart as ChartJS,
  Filler,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js';
import clsx from 'clsx';
import { useEffect, useRef, useState } from 'react';
import { Line } from 'react-chartjs-2';
import useSwr from 'swr';
import Dropdown from './Dropdown';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

function kFormatter(num: number) {
  let rs: any;
  if (Math.abs(num) > 999) {
    const t = (Math.abs(num) / 1000).toFixed(1) as any;
    rs = Math.sign(num) * t + 'k';
  } else {
    rs = Math.sign(num) * Math.abs(num);
  }
  return rs;
}

//455 x 350

const Activity = () => {
  const chartRef = useRef<ChartJS | null>(null);
  const [bgGradient, setBgGradient] = useState<CanvasGradient | null>(null);
  const [borderGradient, setBorderGradient] = useState<CanvasGradient | null>(
    null
  );
  const [year, setYear] = useState('2020');
  const { data } = useSwr(`/api/activities?year=${year}`, async (url) => {
    const rs = await axios.get(url);
    return rs.data as GetActivityResponse;
  });

  const sortedData = data?.data
    ? data.data.sort((a, b) => {
        return a.order - b.order;
      })
    : [];

  const labels = sortedData.length > 0 ? sortedData.map((v) => v.label) : [];
  const dataset = sortedData.length > 0 ? sortedData.map((v) => v.value) : [];

  useEffect(() => {
    const chart = chartRef.current;
    if (chart) {
      const ctx = chart.ctx;
      const bgGradient = ctx.createLinearGradient(600, 90, 0, 110);
      const borderGradient = ctx.createLinearGradient(0, 100, 600, 100);

      bgGradient.addColorStop(0.0042, 'rgba(52, 79, 219, 0.1)');
      bgGradient.addColorStop(0.9867, 'rgba(207, 107, 255, 0.1)');

      borderGradient.addColorStop(0, 'rgba(52, 79, 219, 1)');
      borderGradient.addColorStop(1, 'rgba(207, 107, 255, 1)');

      setBgGradient(bgGradient);
      setBorderGradient(borderGradient);
    }
  }, []);

  return (
    <div className={clsx('Transection h-full')}>
      <div className={clsx('flex items-center justify-between mb-7.5')}>
        <h3 className="h3">Activity</h3>
        <Dropdown
          onChange={(value) => {
            setYear(value);
          }}
          options={[
            { label: '2020', value: '2020' },
            { label: '2021', value: '2021' },
            { label: '2022', value: '2022' },
          ]}
        />
      </div>
      <div className={clsx('h-[350px]')}>
        <Line
          ref={chartRef}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              y: {
                border: {
                  dash: [3, 3],
                },
                ticks: {
                  stepSize: 50000,
                  color: 'rgba(0,0,0,0.4)',
                  callback: (val, index) => {
                    return kFormatter(+val);
                  },
                  font: {
                    size: 12,
                    weight: '600',
                  },
                },
              },
              x: {
                grid: {
                  display: false,
                },
                ticks: {
                  color: 'rgba(0,0,0,0.4)',
                  font: {
                    size: 12,
                    weight: '600',
                  },
                },
              },
            },
            elements: {
              point: {
                radius: 0,
              },
            },
            plugins: {
              legend: {
                display: false,
              },
            },
          }}
          data={{
            labels,
            datasets: [
              {
                data: dataset,
                borderColor: borderGradient ? borderGradient : {},
                backgroundColor: bgGradient ? bgGradient : {},
                fill: 'start',
              },
            ],
          }}
        />
      </div>
    </div>
  );
};
export default Activity;
