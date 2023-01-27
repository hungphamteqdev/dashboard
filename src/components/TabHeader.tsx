import clsx from 'clsx';
import { useState } from 'react';

type TabHeaderProps = {
  label: string;
  value: string;
};

const TabHeader = ({
  tabs,
  onClick,
}: {
  tabs: TabHeaderProps[];
  onClick: (value: string) => void;
}) => {
  const [active, setActive] = useState(0);
  return (
    <div
      className={clsx(
        'TabHeader flex font-semibold bg-[#F6F6F6] rounded-3xl w-max'
      )}
    >
      {tabs.map((tab, idx) => {
        return (
          <div
            key={tab.label}
            onClick={() => {
              onClick(tab.value);
              setActive(idx);
            }}
            className={clsx(
              'px-5 py-2.5 rounded-3xl text-xs capitalize',
              'hover:bg-black hover:text-white cursor-pointer transition-all',
              {
                'bg-black text-white': idx === active,
              },
              'md:text-sm'
            )}
          >
            {tab.value}
          </div>
        );
      })}
    </div>
  );
};
export default TabHeader;
