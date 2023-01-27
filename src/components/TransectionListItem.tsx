import clsx from 'clsx';
import Avatar from './Avatar';

type ListItemProps = {
  imageSrc: string;
  title: string;
  date: string;
};

const TransectionListItem = ({ imageSrc, date, title }: ListItemProps) => {
  return (
    <div className={clsx('ListItem flex items-center gap-2.5')}>
      <Avatar src={imageSrc} width={54} height={54} />
      <div className={clsx('flex flex-col')}>
        <p className={clsx('mb-0.5')}>{title}</p>
        <span className={clsx('font-semibold text-xs text-colorGray')}>
          {date}
        </span>
      </div>
    </div>
  );
};
export default TransectionListItem;
