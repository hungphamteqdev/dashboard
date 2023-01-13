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
  return (
    <div
      className={clsx(
        'LeftSidebar w-[16.25%] p-[30px] border-r border-[rgba(0,0,0,0.1)] flex flex-col'
      )}
    >
      <Avatar src="/avatar-1.png" />
      <div className="mb-5" />
      <h1 className="h1">Hi, Przemek</h1>
      <div className="mb-10" />
      <SidebarList list={FIREBASE_LIST} />
      <Link
        className={clsx('flex items-center gap-[15px] mt-auto p-[13px]')}
        href="/"
      >
        <Image src={'/list-icon-7.png'} alt="" width={18} height={18} />
        Logout
      </Link>
    </div>
  );
};
export default LeftSidebar;
