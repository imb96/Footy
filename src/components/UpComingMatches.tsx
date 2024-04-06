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
      {data.length > 0 ? (
        <div>
          <div>
            {data.map((match) => (
              <MatchCard
                key={match.id}
                date={match.utcDate}
                status={match.status}
                homeTeamName={match.homeTeam.name}
                homeTeamShortName={match.homeTeam.shortName}
                homeTeamTla={match.homeTeam.tla}
                homeTeamCrest={match.homeTeam.crest}
                homeTeamScore={match.score.fullTime.home}
                awayTeamName={match.awayTeam.name}
                awayTeamShortName={match.awayTeam.shortName}
                awayTeamTla={match.awayTeam.tla}
                awayTeamCrest={match.awayTeam.crest}
                awayTeamScore={match.score.fullTime.away}
              />
            ))}
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default UpComingMatches;
