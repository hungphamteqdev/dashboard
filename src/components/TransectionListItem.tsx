import clsx from 'clsx';
import Avatar from './Avatar';

type ListItemProps = {
  imageSrc: string;
  title: string;
  date: string;
};

const TransectionListItem = ({ imageSrc, date, title }: ListItemProps) => {
  return (
    <div className={clsx('ListItem flex items-center gap-[10px]')}>
      <Avatar src={imageSrc} width={54} height={54} />
      <div className={clsx('flex flex-col')}>
        <p className={clsx('mb-[2px]')}>{title}</p>
        <span className={clsx('font-[600] text-xs text-[rgba(0,0,0,0.4)]')}>
          {date}
        </span>
      </div>
    </div>
  );
};
export default TransectionListItem;
