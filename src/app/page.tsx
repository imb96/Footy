import UpComingMatches from '@/components/UpComingMatches'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col gap-5">
      <UpComingMatches competitions={'PL'} />
      <UpComingMatches competitions={'CL'} />
    </main>
  )
}
