import clsx from 'clsx';
import Image from 'next/image';

type OptionProps = {
  label: string;
  value: string;
};
type DropdownProps = {
  options: {
    label: React.ReactNode;
    value: string;
  }[];
  onChange: (value: string) => void;
};

const Dropdown = ({ options, onChange }: DropdownProps) => {
  return (
    <div className={clsx('Dropdown relative w-[90px]')}>
      <Image
        className={clsx(
          'absolute right-0 top-[calc(50%_-_12px)] pointer-events-none'
        )}
        src={'/caret-down.png'}
        width={24}
        height={24}
        alt=""
      />

      <select
        onChange={(e) => onChange(e.target.value)}
        className={clsx('dropdown-select')}
      >
        {options.map((opt) => (
          <option value={opt.value} key={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
};
export default Dropdown;
