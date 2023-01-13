import clsx from 'clsx';
import Image from 'next/image';

type AvatarProps = {
  src: string;
  width?: number;
  height?: number;
};

const Avatar = ({ src, width = 64, height = 64 }: AvatarProps) => {
  return (
    <div className={clsx('rounded-full', `w-[${width}px] h-[${height}px]`)}>
      <Image width={width} height={height} src={src} alt="" />
    </div>
  );
};
export default Avatar;
