import PlayerRank from '@/components/PlayerRank'
import TeamRank from '@/components/TeamRank'

export default function PlPage() {
  return (
    <main className="flex min-h-screen flex-col gap-5">
      <TeamRank competition="PL" />
      <PlayerRank />
    </main>
  )
}
