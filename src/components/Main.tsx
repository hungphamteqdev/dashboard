import Card from '@/components/Card';
import Header from '@/components/Header';
import clsx from 'clsx';
import Image from 'next/image';
import Activity from './Activity';
import Chart from './Chart';
import Transection from './Transection';

const Main = () => {
  return (
    <div
      className={clsx(
        'Main w-full p-3.75',
        'md:w-[70%] md:p-7.5',
        'lg:w-[62.5%]'
      )}
    >
      <Header />
      <div className="mt-7" />

      <div
        className={clsx(
          'flex flex-wrap items-center justify-between gap-7.5',
          '3xl:flex-nowrap'
        )}
      >
        <div className={clsx('basis-full', 'xl:flex-auto')}>
          <Card
            bgColor={'#A534DB'}
            money={'¥ 5600.89'}
            logo={'/visa.png'}
            number={'4310939645454410'}
            name={'CATHY BLAZE'}
            exp={'02/30'}
          />
        </div>
        <div className={clsx('basis-full', 'xl:flex-auto')}>
          <Card
            bgColor={'#344FDB'}
            money={'¥ 109.00'}
            logo={'/mastercard.png'}
            number={'5121600205763337'}
            name={'CHARLENE BECERRA'}
            exp={'11/35'}
          />
        </div>
        <div className={clsx('add-card-btn')}>
          <Image src={'/plus.png'} alt="" width={20} height={20} />
          <p className={clsx(' text-colorGrayLighter')}>Add Card</p>
        </div>
      </div>

      <div className="mt-8" />

      <div className={clsx('space-y-14', 'lg:flex lg:gap-7.5 lg:space-y-0')}>
        <div className={clsx('lg:flex-[1_1_50%]')}>
          <Transection />
        </div>
        <div className={clsx('lg:flex-[1_1_50%]')}>
          <Activity />
        </div>
      </div>

      <div className="mt-12" />

      <Chart />
    </div>
  );
};
export default Main;
