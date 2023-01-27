import clsx from 'clsx';
import Image from 'next/image';

type CardProps = {
  bgColor?: string;
  money?: string;
  number: string;
  logo: string;
  name: string;
  exp: string;
};

const Card = ({ bgColor, money, logo, number, name, exp }: CardProps) => {
  const numberSplitted = number.split('');

  return (
    <div
      style={{
        backgroundColor: `${bgColor}`,
      }}
      className={clsx(
        'Card',
        'p-5 rounded-2xl text-white font-extrabold relative overflow-hidden',
        'shadow-[0px_55px_53px_-50px_rgba(0,0,0,0.36)]',
        'after:content-[""] after:absolute after:w-[92%] after:pt-[92%] after:rounded-full after:bg-[rgba(0,0,0,0.05)] after:top-0 after:left-[37.6%]'
      )}
    >
      <div className={clsx('flex items-center justify-between mb-8')}>
        <p className={clsx('text-xl', 'md:text-2xl', 'lg:text-3xl')}>{money}</p>
        <Image src={logo} alt="" width={46} height={15} />
      </div>
      <p
        className={clsx(
          'text-lg justify-between flex mb-[29px]',
          'md:gap-10 md:justify-start',
          'lg:text-[22px]'
        )}
      >
        {<span>{numberSplitted.slice(0, 4)}</span>}
        {<span>{numberSplitted.slice(4, 8)}</span>}
        {<span>{numberSplitted.slice(8, 12)}</span>}
        {<span>{numberSplitted.slice(12, 16)}</span>}
      </p>
      <div className={clsx('flex items-center justify-between')}>
        <div>
          <p className="text-[10px]">NAME</p>
          <p className="text-[14px]">{name}</p>
        </div>
        <div>
          <p className="text-[10px]">EXPIRE</p>
          <p className="text-[14px]">{exp}</p>
        </div>
      </div>
    </div>
  );
};
export default Card;
