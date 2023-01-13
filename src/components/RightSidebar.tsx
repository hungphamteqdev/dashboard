import clsx from 'clsx';
import Account from './Account';
import AllExpenses from './AllExpenses';
import SendMoney from './SendMoney';

const RightSidebar = () => {
  return (
    <div className={clsx('RightSidebar p-[30px] w-[21.25%] bg-[#FFECED]')}>
      <Account />
      <div className="mt-10" />
      <AllExpenses />
      <div className="mt-10" />
      <SendMoney />
    </div>
  );
};
export default RightSidebar;
