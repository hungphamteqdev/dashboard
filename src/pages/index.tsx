import LeftSidebar from '@/components/LeftSidebar';
import Main from '@/components/Main';
import clsx from 'clsx';

export default function Home() {
  return (
    <div className={clsx('flex')}>
      <LeftSidebar />
      <Main />
    </div>
  );
}
