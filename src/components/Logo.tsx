'use client';

import { useRouter } from 'next/navigation';

const Logo = () => {
  const router = useRouter();
  const handleClickLogo = () => {
    router.push('/');
  };
  return (
    <div className="text-2xl text-white font-black cursor-pointer" onClick={handleClickLogo}>
      Footy
    </div>
  );
};

export default Logo;
