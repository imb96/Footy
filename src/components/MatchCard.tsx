import Image from "next/image";
import formatDate from "@/utils/formatDate";

interface MatchCardProps {
  date: string;
  status: string;
  homeTeamName: string;
  homeTeamCrest: string;
  homeTeamScore: string;
  homeTeamShortName: string;
  homeTeamTla: string;
  awayTeamName: string;
  awayTeamCrest: string;
  awayTeamScore: string;
  awayTeamShortName: string;
  awayTeamTla: string;
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
  homeTeamShortName,
  homeTeamTla,
  homeTeamCrest,
  homeTeamScore,
  awayTeamName,
  awayTeamShortName,
  awayTeamTla,
  awayTeamCrest,
  awayTeamScore,
}: MatchCardProps) => {
  return (
    <div className="flex items-center justify-center">
      <div className="p-1">
        <span className="text-xs truncate">{formatDate(date)}</span>
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
        <span className="truncate text-xs hidden md:inline">
          {homeTeamName}
        </span>
        <span className="truncate hidden sm:inline md:hidden text-xs">
          {homeTeamShortName}
        </span>
        <span className="text-xs sm:hidden">{homeTeamTla}</span>
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
        <span className="truncate text-xs hidden md:inline">
          {awayTeamName}
        </span>
        <span className="truncate hidden sm:inline md:hidden text-xs">
          {awayTeamShortName}
        </span>
        <span className="text-xs sm:hidden">{awayTeamTla}</span>
      </div>
      <div
        className={`text-xs text-center text-white p-1 rounded ${
          status === "FINISHED" ? "bg-red-500" : "bg-blue-500"
        }`}
      >
        {status}
      </div>
    </div>
  );
};

export default MatchCard;
