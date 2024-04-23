import UpComingMatches from '@/components/UpComingMatches'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col gap-5">
      <UpComingMatches competition={'PL'} />
      <UpComingMatches competition={'CL'} />
    </main>
  )
}
