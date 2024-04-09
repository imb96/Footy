"use client";

import { useEffect, useState } from "react";
import getSchedule from "@/api/getSchedule";
import MatchCard from "./MatchCard";

import { Match } from "@/types/Match";
import Image from "next/image";

const UpComingMatches = () => {
  const [plMatches, setPLMatches] = useState<Match[]>([]);
  const [clMatches, setCLMatches] = useState<Match[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const upComingCLMatches = await getSchedule({ competitions: "CL" });
        const upComingPLMatches = await getSchedule({ competitions: "PL" });
        setCLMatches(upComingCLMatches);
        setPLMatches(upComingPLMatches);
      } catch (error) {
        console.error("Error fetching upcoming match data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {plMatches.length > 0 && (
        <div>
          <div className="flex gap-1 items-end text-xl">
            <Image
              src={plMatches[0].competition.emblem}
              alt={"league emblem"}
              width={24}
              height={24}
            />
            {"Premier League"}
          </div>
          {plMatches.map((match) => (
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
      )}
      {clMatches.length > 0 && (
        <div>
          <div className="flex gap-1 items-end text-xl">
            <Image
              src={clMatches[0].competition.emblem}
              alt={"league emblem"}
              width={24}
              height={24}
            />
            {"Champions League"}
          </div>
          {clMatches.map((match) => (
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
      )}
    </div>
  );
};

export default UpComingMatches;
