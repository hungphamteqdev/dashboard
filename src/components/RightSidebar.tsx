import { useAccountSidebarSelector } from '@/store/slices/accountSidebarSlice';
import clsx from 'clsx';
import Account from './Account';
import AllExpenses from './AllExpenses';
import SendMoney from './SendMoney';

const RightSidebar = () => {
  const { show } = useAccountSidebarSelector();

  return (
    <div
      className={clsx(
        'RightSidebar p-[20px] w-[300px] h-screen overflow-y-auto fixed top-0 right-0 bg-[#FFECED] z-10',
        'transition-all translate-x-full',
        {
          'translate-x-0': show,
        },
        'md:static md:w-[30%] md:h-auto md:translate-x-0',
        'lg:w-[21.25%]',
        '3xl:p-[30px]'
      )}
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
