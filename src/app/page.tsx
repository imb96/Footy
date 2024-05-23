import Image from 'next/image'

import UpComingMatches from '@/components/UpComingMatches'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col gap-5">
      <Image src="/images/son.png" alt="son" width={200} height={200} />
      <UpComingMatches competition={'PL'} />
      <UpComingMatches competition={'CL'} />
    </main>
  )
}
