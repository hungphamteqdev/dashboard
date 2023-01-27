import { useAppDispatch } from '@/store/config';
import {
  toggleMenuSidebar,
  useMenuSidebarSelector,
} from '@/store/slices/menuSidebarSlice';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import Avatar from './Avatar';
import SidebarList from './SidebarList';

const FIREBASE_LIST = [
  { id: '1', title: 'Dashboard', iconSrc: '/list-icon-1.png', href: '/' },
  { id: '2', title: 'Transection', iconSrc: '/list-icon-2.png', href: '/' },
  { id: '3', title: 'Statistics', iconSrc: '/list-icon-3.png', href: '/' },
  { id: '4', title: 'Card', iconSrc: '/list-icon-4.png', href: '/' },
  { id: '5', title: 'Profile', iconSrc: '/list-icon-5.png', href: '/' },
  { id: '6', title: 'Settings', iconSrc: '/list-icon-6.png', href: '/' },
];

const LeftSidebar = () => {
  const { show } = useMenuSidebarSelector();
  const dispatch = useAppDispatch();
  return (
    <div
      className={clsx('left-sidebar', {
        '-translate-x-0': show,
      })}
    >
      <div className={clsx('flex justify-between items-start', 'md:block')}>
        <Avatar src="/avatar-1.png" />
        <button
          className={clsx('md:hidden')}
          onClick={() => {
            dispatch(toggleMenuSidebar(!show));
          }}
        >
          <Image src={'/close.png'} alt="" width={14} height={14} />
        </button>
      </div>
      <div className="mb-5" />
      <h1 className="h1">Hi, Przemek</h1>
      <div className="mb-10" />
      <SidebarList list={FIREBASE_LIST} />
      <div className="mt-14 md:hidden"></div>
      <Link
        className={clsx(
          'flex items-center gap-3.75 mt-auto p-3.25 text-base font-semibold'
        )}
        href="/"
      >
        <Image src={'/list-icon-7.png'} alt="" width={18} height={18} />
        Logout
      </Link>
    </div>
  );
};
export default LeftSidebar;
