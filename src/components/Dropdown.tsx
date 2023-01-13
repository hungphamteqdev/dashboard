import clsx from 'clsx';

type OptionProps = {
  label: string;
  value: string;
};
type DropdownProps = {
  options: {
    label: string;
    value: string;
  }[];
  onChange: (value: string) => void;
};

const Dropdown = ({ options, onChange }: DropdownProps) => {
  return (
    <select
      onChange={(e) => onChange(e.target.value)}
      className={clsx(
        'p-[10px] border border-[#E6E6E6] rounded-[9px] font-[500] outline-none '
      )}
    >
      {options.map((opt) => (
        <option value={opt.value} key={opt.label}>
          {opt.label}
        </option>
      ))}
    </select>
  );
};
export default Dropdown;
