import Image from "next/image";

interface PlayerRankCardProps {
  playerId: number;
  ranking: number;
  teamCrest: string;
  teamName: string;
  playerName: string;
  playedMatches: string;
  goals: string;
  assists: string;
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
      <div className="text-xs truncate">{ranking}</div>
      <div className="flex gap-1 w-[360px] p-1 items-center">
        <Image src={teamCrest} alt={teamName} width={20} height={20} />
        <span className="text-xs truncate">{playerName}</span>
        <span className="text-xs truncate">
          <b>{playedMatches}</b>matches
        </span>
        <span className="text-xs truncate">
          <b>{goals}</b>goals
        </span>
        <span className="text-xs truncate">
          <b>{assists}</b>assists
        </span>
      </div>
    </div>
  );
};

export default PlayerRankCard;
