import Image from 'next/image'

interface PlayerRankCardProps {
  playerId: number
  ranking: number
  teamCrest: string
  teamName: string
  playerName: string
  playedMatches: string
  goals: string
  assists: string
}

const PlayerRankCard = ({
  playerId,
  ranking,
  teamCrest,
  teamName,
  playerName,
  playedMatches,
  goals,
  assists,
}: PlayerRankCardProps) => {
  return (
    <div key={playerId} className="flex items-center ">
      <div className="text-sm w-4">{ranking}</div>
      <div className="flex gap-1 p-1 items-center">
        <Image src={teamCrest} alt={teamName} width={24} height={24} />
        <div className="text-sm truncate w-[150px]">{playerName}</div>
        <div className="text-sm w-11 truncate">
          <div>{playedMatches}</div>
        </div>
        <div className="text-sm w-11 truncate">
          <div>{goals}</div>
        </div>
        <div className="text-sm w-11 truncate">
          <div>{assists}</div>
        </div>
      </div>
    </div>
  )
}

export default PlayerRankCard
