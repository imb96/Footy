import Image from 'next/image'
import mainImage from '../../public/images/son.png'

import UpComingMatches from '@/components/UpComingMatches'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col gap-5">
      <div className="flex justify-center">
        <Image
          src={mainImage}
          alt="son"
          width={200}
          height={200}
          className="select-none"
          loading="eager"
        />
      </div>
      <UpComingMatches competition={'PL'} />
      <UpComingMatches competition={'CL'} />
    </main>
  )
}
