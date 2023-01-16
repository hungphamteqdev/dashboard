import clsx from 'clsx';
import Image from 'next/image';
import { useState } from 'react';

type CustomSelectProps = {
  options: {
    label: React.ReactNode;
    value: string;
  }[];
  onChange: (value: string) => void;
};

const CustomSelect = ({ options, onChange }: CustomSelectProps) => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  const restOptions = options.filter((opt) => opt.value !== active);

  return (
    <div className={clsx('CustomSelect relative')}>
      {/* Header */}
      <div
        className={clsx(
          'cursor-pointer relative bg-[#FAFAFA] py-[18px] pl-[15px] pr-[38px] rounded-[9px]'
        )}
        onClick={() => {
          setToggle((prev) => !prev);
        }}
      >
        {options.find((opt) => opt.value === active)?.label}
        <Image
          className={clsx('absolute top-6 right-3')}
          src={'/caret-down.png'}
          width={18}
          height={18}
          alt=""
        />
      </div>

      {/* Content */}
      {toggle && (
        <div
          className={clsx(
            'absolute pt-2 space-y-2 top-full left-0 w-full bg-white rounded-[9px]'
          )}
        >
          {restOptions.map((opt, idx) => {
            return (
              <div
                className={clsx(
                  'cursor-pointer bg-[#FAFAFA] py-[18px] pl-[15px] pr-[38px] rounded-[9px]'
                )}
                key={idx}
                onClick={() => {
                  setActive(opt.value);
                  setToggle(false);
                }}
              >
                {opt.label}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
export default CustomSelect;
