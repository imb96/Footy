import { useEffect, useState } from "react";
import getUpcomingMatch from "@/api/getUpcomingMatch";
import MatchCard from "./MatchCard";

import { Match } from "@/types/Match";

const UpComingMatches = () => {
  const [data, setData] = useState<Match[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const upcomingMatchData = await getUpcomingMatch();
        setData(upcomingMatchData);
      } catch (error) {
        console.error("Error fetching upcoming match data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {data ? (
        <table>
          <thead className="table-header-group align-middle p-10"></thead>
          <tbody className="table-row-group align-middle">
            {data.map((match) => (
              <MatchCard
                key={match.id}
                date={match.utcDate}
                status={match.status}
                homeTeamName={match.homeTeam.name}
                homeTeamCrest={match.homeTeam.crest}
                homeTeamScore={match.score.fullTime.home}
                awayTeamName={match.awayTeam.name}
                awayTeamCrest={match.awayTeam.crest}
                awayTeamScore={match.score.fullTime.away}
              />
            ))}
          </tbody>
        </table>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default UpComingMatches;
