import clsx from 'clsx';
import Image from 'next/image';

const Account = () => {
  return (
    <div className={clsx('Account')}>
      <h2 className="h2 mb-5">Account</h2>
      <div className={clsx('p-5 rounded-[17px] bg-[#3B3659] text-white')}>
        <div className={clsx('flex items-center justify-between mb-[3px]')}>
          <p className={clsx('font-[600]')}>Balance</p>
          <Image width={12} height={16} src={'/account-icon.png'} alt="" />
        </div>
        <div className={clsx('flex items-center justify-between')}>
          <p className={clsx('text-2xl font-[800]')}>¥ 109.00</p>
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
