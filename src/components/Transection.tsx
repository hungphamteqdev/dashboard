import { Transection } from '@/types/Transection';
import axios from 'axios';
import clsx from 'clsx';
import useSWR from 'swr';
import TransectionListItem from './TransectionListItem';

const Transection = () => {
  const { isLoading, error, data } = useSWR(
    '/api/transections',
    async (url) => {
      const rs = await axios.get(url);
      return rs.data as Transection[];
    }
  );
  let content: React.ReactNode = '';

  if (isLoading) {
    content = 'Loading';
  }

  if (error) {
    content = 'Loading';
  }

  if (data) {
    content = (
      <ul className={clsx('space-y-5')}>
        {data.length > 0 &&
          data.map((trans) => {
            return (
              <li
                className={clsx('flex items-center justify-between')}
                key={trans.id}
              >
                <TransectionListItem
                  date={trans.transectionDate}
                  imageSrc={trans.companyLogo}
                  title={trans.companyName}
                />
                <p>{trans.money}</p>
              </li>
            );
          })}
      </ul>
    );
  }

  return (
    <div className={clsx('Transection')}>
      <h3 className={clsx('h3 h-11 flex items-center justify-centers mb-7.5')}>
        Transection
      </h3>
      {content}
    </div>
  );
};
export default Transection;
