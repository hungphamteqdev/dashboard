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
      <div
        className={clsx('mb-5', 'xl:flex xl:items-center xl:justify-between')}
      >
        <h2 className="h2">All Expenses</h2>
        <div className={clsx('[&>div]:w-full mt-4', 'xl:[&>div]:w-auto')}>
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
      </div>
      <div className={clsx('rounded-2xl p-5 bg-white')}>
        <div
          className={clsx(
            'mb-7.5 gap-2 flex justify-around flex-wrap',
            'xl:flex-nowrap xl:justify-between'
          )}
        >
          {data?.data.map((v) => {
            return (
              <div key={v.label}>
                <p
                  className={clsx(
                    'text-xs font-semibold mb-0.5 text-colorGray',
                    'md:text-xs'
                  )}
                >
                  {v.label}
                </p>
                <p
                  className={clsx('text-sm', 'md:text-base')}
                >{`¥${v.value}.00`}</p>
              </div>
            );
          })}
        </div>

        <div className={clsx('relative mb-7.5')}>
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
            <p className={clsx('text-sm font-semibold text-colorGrayDarker')}>
              Shopping
            </p>
            <p className={clsx('text-lg', 'lg:text-2xl')}>¥450.00</p>
          </div>
        </div>

        <div className={clsx('2xl:flex justify-between items-center')}>
          {Object.entries(LABEL_COLORS).map((v, idx) => {
            return (
              <div
                key={v[0]}
                className={clsx(
                  'relative pl-[17px] text-xs font-semibold',
                  'before:content-[""] before:w-[11px] before:h-[11px] before:bg-[${v[1]}]',
                  'before:rounded-full before:absolute before:left-0 before:top-[3px]',
                  {
                    'before:bg-[#FFCA28]': idx === 0,
                    'before:bg-[#EC6F48]': idx === 1,
                    'before:bg-[#836CDA]': idx === 2,
                  }
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
