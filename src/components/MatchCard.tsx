import Image from 'next/image';

import formatDate from '@/utils/formatDate';

interface MatchCardProps {
  date: Date;
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
  if (status === 'TIMED') {
    return '-';
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
    <div className="flex items-center justify-start">
      <div className="p-1 w-[120px]">
        {status === 'FINISHED' ? (
          <span className="text-xs bg-red-600 rounded px-2 py-1 text-white">Finished</span>
        ) : (
          <span className="text-xs bg-blue-600 rounded px-2 py-1 truncate text-white">{formatDate(date)}</span>
        )}
      </div>
      <div className="flex gap-1 w-[80px] p-1 items-center md:w-[180px]">
        {homeTeamCrest ? <Image src={homeTeamCrest} alt={homeTeamName} width={24} height={24} /> : null}
        <span className="truncate text-xs hidden md:inline">{homeTeamName}</span>
        <span className="truncate hidden sm:inline md:hidden text-xs">{homeTeamShortName}</span>
        <span className="text-xs sm:hidden">{homeTeamTla}</span>
      </div>
      <div className="px-5 w-[60px]">
        <span
          className={`
            ${status === 'FINISHED' && homeTeamScore > awayTeamScore && 'text-red-500'}`}
        >
          {formatScore({ status, score: homeTeamScore })}
        </span>
        <span>:</span>
        <span
          className={`
            ${status === 'FINISHED' && awayTeamScore > homeTeamScore && 'text-red-500'}`}
        >
          {formatScore({
            status,
            score: awayTeamScore,
          })}
        </span>
      </div>
      <div className="flex gap-1 w-[80px] p-1 items-center md:w-[180px]">
        {awayTeamCrest ? <Image src={awayTeamCrest} alt={awayTeamName} width={24} height={24} /> : null}
        <span className="truncate text-xs hidden md:inline">{awayTeamName}</span>
        <span className="truncate hidden sm:inline md:hidden text-xs">{awayTeamShortName}</span>
        <span className="text-xs sm:hidden">{awayTeamTla}</span>
      </div>
    </div>
  );
};

export default MatchCard;
