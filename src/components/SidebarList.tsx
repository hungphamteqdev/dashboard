import clsx from 'clsx';
import Image from 'next/image';

type SidebarList = {
  id: string;
  iconSrc: string;
  href: string;
  title: string;
};

const SidebarList = ({ list }: { list: SidebarList[] }) => {
  console.log(list);

  return (
    <div className={clsx('SidebarList', 'flex flex-col')}>
      <ul className={clsx('space-y-7.5')}>
        {list.map((item, idx) => (
          <li key={item.id}>
            <a
              href={item.href}
              className={clsx(
                'flex items-center gap-3.75 text-sm',
                'font-semibold',
                'rounded-lg',
                'p-3.25',
                'hover:bg-[#F7F7F7]',
                {
                  'bg-[#F7F7F7]': idx === 0,
                },
                'md:text-base'
              )}
            >
              <Image
                className={clsx('h-auto')}
                src={item.iconSrc}
                width={18}
                height={18}
                alt={item.title}
              />
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default SidebarList;
