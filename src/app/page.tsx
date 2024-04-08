import UpComingMatches from "@/components/UpComingMatches";
import PlayerRank from "@/components/PlayerRank";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col gap-5 pt-5">
      <UpComingMatches />
      <PlayerRank />
    </main>
  );
}
