import { useAccountSidebarSelector } from '@/store/slices/accountSidebarSlice';
import clsx from 'clsx';
import Account from './Account';
import AllExpenses from './AllExpenses';
import SendMoney from './SendMoney';

const RightSidebar = () => {
  const { show } = useAccountSidebarSelector();

  return (
    <div
      className={clsx('right-sidebar', {
        'translate-x-0': show,
      })}
    >
      <Account />
      <div className="mt-10" />
      <AllExpenses />
      <div className="mt-10" />
      <SendMoney />
    </div>
  );
};
export default RightSidebar;
