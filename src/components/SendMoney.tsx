import clsx from 'clsx';
import Image from 'next/image';
import CustomSelect from './CustomSelect';
import TransectionListItem from './TransectionListItem';

const FIREBASE_CREDIT_CARDS = [
  {
    label: (
      <div className={clsx('flex items-center')}>
        <Image src={'/send-money-img.png'} alt="" width={39} height={24} />
        <p className={clsx('ml-[10px] text-sm text-[rgba(0,0,0,0.6)]')}>
          Credit
        </p>
        <p className={clsx('ml-auto text-lg')}>
          ¥890.<span className={clsx('text-xs')}>00</span>
        </p>
      </div>
    ),
    value: '',
  },
  {
    label: (
      <div className={clsx('flex items-center')}>
        <Image src={'/send-money-img.png'} alt="" width={39} height={24} />
        <p className={clsx('ml-[10px] text-sm text-[rgba(0,0,0,0.6)]')}>
          Credit
        </p>
        <p className={clsx('ml-auto text-lg')}>
          ¥870.<span className={clsx('text-xs')}>00</span>
        </p>
      </div>
    ),
    value: '2',
  },
  {
    label: (
      <div className={clsx('flex items-center')}>
        <Image src={'/send-money-img.png'} alt="" width={39} height={24} />
        <p className={clsx('ml-[10px] text-sm text-[rgba(0,0,0,0.6)]')}>
          Credit
        </p>
        <p className={clsx('ml-auto text-lg')}>
          ¥860.<span className={clsx('text-xs')}>00</span>
        </p>
      </div>
    ),
    value: '1',
  },
];

const MoneyAmountForm = () => {
  return <form></form>;
};

const SendMoney = () => {
  return (
    <div className={clsx('SendMoney')}>
      <h2 className="h2 mb-5">Send Money</h2>
      <div className={clsx('bg-white rounded-[17px] p-5')}>
        <div
          className={clsx(
            '[&_img]:w-9 flex items-center justify-between mb-[25.5px]'
          )}
        >
          <TransectionListItem
            date={'12 Jan, 2022'}
            imageSrc={'/avatar-2.png'}
            title={'Belle Incentive'}
          />
          <a className={clsx('text-xs font-[700] text-[#1D70E1]')} href="">
            Change
          </a>
        </div>

        <div className={clsx('mb-5')}>
          <CustomSelect onChange={() => {}} options={FIREBASE_CREDIT_CARDS} />
        </div>
        <div
          className={clsx(
            'flex items-center justify-between  mb-5',
            'bg-[#FAFAFA] py-[18px] pl-[15px] pr-[10px] rounded-[9px]'
          )}
        >
          <div>
            <p className={clsx('text-[rgba(0,0,0,0.6)] text-xs')}>
              Enter Amount
            </p>
            <p className={clsx('text-[22px]')}>
              <span
                className={clsx('text-[rgba(0,0,0,0.4)] font-[500] mr-[6px]')}
              >
                ¥
              </span>
              890.<span className={clsx('text-sm')}>00</span>
            </p>
          </div>

          <div className={clsx('flex items-center justify-between')}>
            <select
              className={clsx('appearance-none mr-2 text-[rgba(0,0,0,0.4)]')}
            >
              <option value="yen">YEN</option>
              <option value="yen">YEN</option>
              <option value="yen">YEN</option>
              <option value="yen">YEN</option>
            </select>

            <Image
              className={clsx('')}
              src={'/caret-down.png'}
              width={18}
              height={18}
              alt=""
            />
          </div>
        </div>
        <button
          className={clsx(
            'bg-[#249A70] py-[15px] px-[18px] rounded-[9px] w-full text-white text-sm font-[700]'
          )}
        >
          Send Money
        </button>
      </div>
    </div>
  );
};
export default SendMoney;
