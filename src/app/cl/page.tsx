import PlayerRank from '@/components/PlayerRank'

export default function ClPage() {
  return (
    <main className="flex min-h-screen flex-col gap-5">
      <PlayerRank competition="CL" />
    </main>
  )
}
