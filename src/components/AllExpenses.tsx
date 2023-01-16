import { GetExpenseResponse } from '@/types/GetExpenseResponse';
import axios from 'axios';
import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js';
import clsx from 'clsx';
import { useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import useSWR from 'swr';
import Dropdown from './Dropdown';

ChartJS.register(ArcElement, Tooltip, Legend);
const LABEL_COLORS = {
  'Shopping': '#FFCA28',
  'Workspace': '#EC6F48',
  'Platform': '#836CDA',
};

const AllExpenses = () => {
  const [type, setType] = useState('daily');
  const { data } = useSWR(`/api/expenses?type=${type}`, async (url) => {
    const rs = await axios.get(url);
    return rs.data as GetExpenseResponse;
  });
  const labels = data ? data.data.map((v) => v.label) : [];
  const dataSet = data ? data.data.map((v) => v.value) : [];

  return (
    <div className="AllExpenses">
      <div className={clsx('flex items-center justify-between mb-5')}>
        <h2 className="h2">All Expenses</h2>
        <Dropdown
          onChange={(value) => {
            setType(value);
          }}
          options={[
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
      <div className={clsx('rounded-[17px] p-5 bg-white')}>
        <div className={clsx('mb-[30px] flex justify-between')}>
          {data?.data.map((v) => {
            return (
              <div key={v.label}>
                <p
                  className={clsx(
                    'text-xs font-[600] mb-[2px] text-[rgba(0,0,0,0.4)]'
                  )}
                >
                  {v.label}
                </p>
                <p className={clsx('text-base')}>{`¥${v.value}.00`}</p>
              </div>
            );
          })}
        </div>

        <div className={clsx('relative mb-[30px]')}>
          <Doughnut
            data={{
              labels: labels,
              datasets: [
                {
                  label: '# of Votes',
                  data: dataSet,
                  backgroundColor: ['#836CDA', '#FFCA28', '#EC6F48'],
                },
              ],
            }}
            options={{
              cutout: '80%',
              plugins: {
                legend: {
                  display: false,
                },
              },
            }}
          />
          <div
            className={clsx(
              'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center'
            )}
          >
            <p className={clsx('text-sm font-[600] text-[rgba(0,0,0,0.6)]')}>
              Shopping
            </p>
            <p className={clsx('text-2xl')}>¥450.00</p>
          </div>
        </div>

        <div className={clsx('flex justify-between items-center')}>
          {Object.entries(LABEL_COLORS).map((v) => {
            return (
              <div
                key={v[0]}
                className={clsx(
                  'relative pl-[17px] text-xs font-[600]',
                  `before:content-[""] before:w-[11px] before:h-[11px] before:bg-[${v[1]}]`,
                  'before:rounded-full before:absolute before:left-0 before:top-[3px]'
                )}
              >
                {v[0]}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default AllExpenses;
