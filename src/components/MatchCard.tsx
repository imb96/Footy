import Image from "next/image";
import formatDate from "@/utils/formatDate";
interface MatchCardProps {
  date: string;
  status: string;
  homeTeamName: string;
  homeTeamCrest: string;
  homeTeamScore: string;
  awayTeamName: string;
  awayTeamCrest: string;
  awayTeamScore: string;
}

const formatScore = ({ status, score }: { status: string; score: string }) => {
  if (status === "TIMED") {
    return "-";
  } else return score;
};

const MatchCard = ({
  date,
  status,
  homeTeamName,
  homeTeamCrest,
  homeTeamScore,
  awayTeamName,
  awayTeamCrest,
  awayTeamScore,
}: MatchCardProps) => {
  return (
    <div className="flex items-center justify-center">
      <div className="p-1">
        <span className="text-xs">{formatDate(date)}</span>
      </div>
      <div className="flex gap-1 w-[180px] p-1 items-center">
        {homeTeamCrest ? (
          <Image
            src={homeTeamCrest}
            alt={homeTeamName}
            width={24}
            height={24}
          />
        ) : null}
        <span className="truncate text-xs">{homeTeamName}</span>
      </div>
      <div className="px-5">
        {formatScore({ status, score: homeTeamScore })}:
        {formatScore({
          status,
          score: awayTeamScore,
        })}
      </div>
      <div className="flex gap-1 w-[180px] p-1 items-center">
        {awayTeamCrest ? (
          <Image
            src={awayTeamCrest}
            alt={awayTeamName}
            width={24}
            height={24}
          />
        ) : null}
        <span className="truncate text-xs">{awayTeamName}</span>
      </div>
      <div
        className={`text-xs text-center text-white bg-${
          status === "FINISHED" ? "red-500" : "blue-500"
        }`}
      >
        {status}
      </div>
    </div>
  );
};

export default MatchCard;
