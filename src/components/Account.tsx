import { useAppDispatch } from '@/store/config';
import {
  toggleAccountSidebar,
  useAccountSidebarSelector,
} from '@/store/slices/accountSidebarSlice';
import clsx from 'clsx';
import Image from 'next/image';

const Account = () => {
  const dispatch = useAppDispatch();
  const { show } = useAccountSidebarSelector();
  return (
    <div className={clsx('Account')}>
      <h2
        className={clsx(
          'h2 mb-5 flex justify-between items-center',
          'md:block'
        )}
      >
        Account
        <button
          className={clsx('md:hidden')}
          onClick={() => {
            dispatch(toggleAccountSidebar(!show));
          }}
        >
          <Image src={'/close.png'} alt="" width={14} height={14} />
        </button>
      </h2>
      <div className={clsx('p-5 rounded-[17px] bg-[#3B3659] text-white')}>
        <div className={clsx('flex items-center justify-between mb-[3px]')}>
          <p className={clsx('font-[600]')}>Balance</p>
          <Image width={12} height={16} src={'/account-icon.png'} alt="" />
        </div>
        <div className={clsx('flex items-center justify-between')}>
          <p className={clsx('text-xl font-[800]', 'lg:text-2xl')}>¥ 109.00</p>
          <Image
            className={clsx('ml-auto mr-2')}
            width={16}
            height={16}
            src={'/account-icon-2.png'}
            alt=""
          />
          <span className={'text-xs font-[400]'}>4.5%</span>
        </div>
      </div>
    </div>
  );
};
export default Account;
