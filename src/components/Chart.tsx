import { GetChartResponse } from '@/types/GetChartResponse';
import axios from 'axios';
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from 'chart.js';
import clsx from 'clsx';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import useSWR from 'swr';
import TabHeader from './TabHeader';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

// const labels = [
//   '01',
//   '02',
//   '04',
//   '05',
//   '06',
//   '07',
//   '08',
//   '09',
//   '10',
//   '11',
//   '12',
// ];

// postChart('weekly');

const Chart = () => {
  const chartRef = useRef<ChartJS | null>(null);
  const [chartBg, setChartBg] = useState<CanvasGradient | null>(null);
  const [type, setType] = useState('daily');
  const { data } = useSWR(`/api/chart?type=${type}`, async (url) => {
    const res = await axios.get<GetChartResponse>(url);
    return res.data;
  });

  const labels = data ? data.data.map((v) => v.label) : [];
  const dataSet = data ? data.data.map((v) => v.value) : [];

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.ctx;
      const bgGradient = ctx.createLinearGradient(279, 200, 321, 0);
      bgGradient.addColorStop(0.187, 'rgba(52, 79, 219, 1)');
      bgGradient.addColorStop(0.813, 'rgba(207, 107, 255, 1)');
      setChartBg(bgGradient);
    }
  }, []);

  return (
    <div className={clsx('Chart')}>
      <div className={clsx('flex items-center justify-between mb-[25px]')}>
        <h3 className={clsx('h3')}>Chart</h3>
        <TabHeader
          onClick={(value) => {
            setType(value);
          }}
          tabs={[
            {
              label: 'Daily',
              value: 'daily',
            },
            {
              label: 'Weekly',
              value: 'weekly',
            },
            {
              label: 'Monthly',
              value: 'monthly',
            },
          ]}
        />
      </div>
      <div className={clsx('flex items-center gap-[50px]')}>
        <div
          className={clsx(
            'relative pl-5',
            'after:content-[""] after:absolute after:w-[14px] after:h-[14px] after:bg-gradient-to-r after:from-[#344FDB] after:to-[#CF6BFF] after:top-[calc(50%_-_7.5px)] after:left-0'
          )}
        >
          Delivered
        </div>
        <div className={clsx('flex items-center')}>
          <span>250</span>
          <Image width={16} height={16} src={'/caret-up.png'} alt="" />
          <span className={clsx('text-xs text-[#0FC1A1] font-[400]')}>
            4.5%
          </span>
        </div>
        <div
          className={clsx(
            'relative pl-5 text-[#999999]',
            'after:content-[""] after:absolute after:w-[14px] after:h-[14px] after:bg-[#999999] after:top-[calc(50%_-_7.5px)] after:left-0'
          )}
        >
          Expense
        </div>
      </div>

      <div className="mt-8" />
      <div className="h-[180px]">
        <Bar
          ref={chartRef}
          options={{
            maintainAspectRatio: false,
            responsive: true,
            plugins: {
              legend: {
                display: false,
              },
            },
            scales: {
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
              y: {
                ticks: {
                  stepSize: 20,
                  color: 'rgba(0,0,0,0.4)',
                  font: {
                    size: 12,
                    weight: '600',
                  },
                },
                border: {
                  dash: [3, 3],
                },
              },
            },
          }}
          data={{
            labels,
            datasets: [
              {
                data: dataSet,
                backgroundColor: chartBg ? chartBg : {},
                barThickness: 10,
              },
            ],
          }}
        />
      </div>
    </div>
  );
};
export default Chart;
