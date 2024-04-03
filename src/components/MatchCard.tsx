import Image from "next/image";
import formatDate from "@/utils/formatDate";
interface MatchCardProps {
  date: string;
  homeTeamName: string;
  homeTeamCrest: string;
  awayTeamName: string;
  awayTeamCrest: string;
}

const MatchCard = ({
  date,
  homeTeamName,
  homeTeamCrest,
  awayTeamName,
  awayTeamCrest,
}: MatchCardProps) => {
  return (
    <tr className="table-row">
      <td className="table-cell p-1">
        <span className="text-xs">{formatDate(date)}</span>
      </td>
      <td className="flex gap-1 w-[180px] p-1 items-center">
        {homeTeamCrest ? (
          <Image
            src={homeTeamCrest}
            alt={homeTeamName}
            width={24}
            height={24}
          />
        ) : null}
        <span className="truncate text-xs">{homeTeamName}</span>
      </td>
      <td className="px-5">vs</td>
      <td className="flex gap-1 w-[180px] p-1 items-center">
        {awayTeamCrest ? (
          <Image
            src={awayTeamCrest}
            alt={awayTeamName}
            width={24}
            height={24}
          />
        ) : null}
        <span className="truncate text-xs">{awayTeamName}</span>
      </td>
      <td className="p-1">-:-</td>
    </tr>
  );
};

export default MatchCard;
