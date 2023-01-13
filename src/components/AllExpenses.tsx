import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js';
import clsx from 'clsx';
import { Doughnut } from 'react-chartjs-2';
import Dropdown from './Dropdown';

ChartJS.register(ArcElement, Tooltip, Legend);

const AllExpenses = () => {
  return (
    <div className="AllExpenses">
      <div className={clsx('flex items-center justify-between mb-5')}>
        <h2 className="h2">All Expenses</h2>
        <Dropdown
          onChange={() => {}}
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
          <div>
            <p
              className={clsx(
                'text-xs font-[600] mb-[2px] text-[rgba(0,0,0,0.4)]'
              )}
            >
              Daily
            </p>
            <p className={clsx('text-base')}>¥450.00</p>
          </div>
          <div>
            <p
              className={clsx(
                'text-xs font-[600] mb-[2px] text-[rgba(0,0,0,0.4)]'
              )}
            >
              Weekly
            </p>
            <p className={clsx('text-base')}>¥879.00</p>
          </div>
          <div>
            <p
              className={clsx(
                'text-xs font-[600] mb-[2px] text-[rgba(0,0,0,0.4)]'
              )}
            >
              Monthly
            </p>
            <p className={clsx('text-base')}>¥234.00</p>
          </div>
        </div>

        <div className={clsx('relative mb-[30px]')}>
          <Doughnut
            data={{
              labels: ['Red', 'Blue', 'Yellow'],
              datasets: [
                {
                  label: '# of Votes',
                  data: [12, 19, 3],
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
          <div
            className={clsx(
              'relative pl-[17px] text-xs font-[600]',
              'before:content-[""] before:w-[11px] before:h-[11px] before:bg-[#FFCA28] before:rounded-full before:absolute before:left-0 before:top-[3px]'
            )}
          >
            Shopping
          </div>
          <div
            className={clsx(
              'relative pl-[17px] text-xs font-[600]',
              'before:content-[""] before:w-[11px] before:h-[11px] before:bg-[#EC6F48] before:rounded-full before:absolute before:left-0 before:top-[3px]'
            )}
          >
            Workspace
          </div>
          <div
            className={clsx(
              'relative pl-[17px] text-xs font-[600]',
              'before:content-[""] before:w-[11px] before:h-[11px] before:bg-[#836CDA] before:rounded-full before:absolute before:left-0 before:top-[3px]'
            )}
          >
            Platform
          </div>
        </div>
      </div>
    </div>
  );
};
export default AllExpenses;
