'use client';

import { useEffect, useState } from 'react';

import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';

interface HeaderItemProps {
  imageSrc?: string;
  title?: string;
  link?: string;
}

const HeaderItem = ({ imageSrc, title, link }: HeaderItemProps) => {
  const [isActive, setIsActive] = useState(false);
  const router = useRouter();
  const pathName = usePathname();

  useEffect(() => {
    setIsActive(pathName === link);
  }, [pathName, link]);

  const handleClickHeaderItem = () => {
    if (!link) return;
    router.push(link);
  };

  return (
    <div
      className={`cursor-pointer border-b-2 border-transparent hover:border-white ${isActive ? 'border-white' : ''}`}
      onClick={handleClickHeaderItem}
    >
      {imageSrc ? <Image src={imageSrc} alt={'image'} width={48} height={48} priority /> : <span>{title}</span>}
    </div>
  );
};

export default HeaderItem;
