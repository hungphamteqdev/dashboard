import { useAppDispatch } from '@/store/config';
import {
  toggleAccountSidebar,
  useAccountSidebarSelector,
} from '@/store/slices/accountSidebarSlice';
import {
  toggleMenuSidebar,
  useMenuSidebarSelector,
} from '@/store/slices/menuSidebarSlice';
import clsx from 'clsx';
import Image from 'next/image';

const Searchbar = () => {
  const { show } = useAccountSidebarSelector();
  return (
    <form className="Searchbar relative">
      <Image
        className={clsx('absolute left-[21.5px] top-[calc(50%_-_7.5px)]')}
        src={'/header-icon-3.png'}
        alt=""
        width={15}
        height={15}
      />
      <input
        className={clsx(
          'bg-[#FAFAFA] w-[383px] rounded-[9px]',
          'py-[14px] px-[47.5px]',
          'font-[500]',
          'focus-visible:outline-none',
          'placeholder:font-[500]'
        )}
        type="text"
        placeholder="Search"
      />
    </form>
  );
};

const Header = () => {
  const dispatch = useAppDispatch();
  const { show } = useMenuSidebarSelector();

  return (
    <div className={clsx('Header flex items-center flex-wrap')}>
      <h2
        className={clsx(
          'h2 basis-full mb-4 flex justify-between items-center',
          'lg:block',
          'lg:basis-auto lg:mb-0'
        )}
      >
        <button
          className={clsx('lg:hidden')}
          onClick={() => {
            dispatch(toggleMenuSidebar(!show));
          }}
        >
          <Image src={'/menu.png'} alt="" width={24} height={24} />
        </button>
        Your Dashboard
        <button
          className={clsx('md:hidden')}
          onClick={() => {
            dispatch(toggleAccountSidebar(!show));
          }}
        >
          <Image src={'/user.png'} alt="" width={18} height={20} />
        </button>
      </h2>
      <div className="ml-auto" />
      <div className={clsx('flex-1 [&>form>input]:w-full', 'lg:flex-initial')}>
        <Searchbar />
      </div>

      <div className={clsx('flex items-center space-x-[26px] ml-[43px]')}>
        <a href="">
          <Image src={'/header-icon-1.png'} alt="" width={18} height={18} />
        </a>
        <a
          href=""
          className={clsx(
            'relative',
            'after:content-[""] after:absolute after:right-0 after:top-[2px] after:w-2 after:h-2 after:bg-[#FF3636] after:rounded-full after:border after:border-white'
          )}
        >
          <Image src={'/header-icon-2.png'} alt="" width={18} height={18} />
        </a>
      </div>
    </div>
  );
};
export default Header;
