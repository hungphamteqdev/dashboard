import Backdrop from '@/components/Backdrop';
import LeftSidebar from '@/components/LeftSidebar';
import Main from '@/components/Main';
import RightSidebar from '@/components/RightSidebar';
import clsx from 'clsx';

export default function Home() {
  return (
    <div className={clsx('flex')}>
      <LeftSidebar />
      <Main />
      <RightSidebar />
      <Backdrop />
    </div>
  );
}
