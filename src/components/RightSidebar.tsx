import clsx from 'clsx';
import Account from './Account';

const RightSidebar = () => {
  return (
    <div className={clsx('RightSidebar p-[30px] flex-1')}>
      <Account />
    </div>
  );
};
export default RightSidebar;
