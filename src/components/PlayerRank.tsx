"use client";

import getPlayerRank from "@/api/getPlayerRank";
import { useEffect, useState } from "react";
import PlayerRankCard from "./PlayerRankCard";
import { Scorer } from "@/types/Scorer";
const PlayerRank = () => {
  const [scorers, setScorers] = useState<Scorer[]>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const playerRank = await getPlayerRank({ competition: "PL" });
        setScorers(playerRank);
      } catch (error) {
        console.error("Error fetching player rank data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {"EPL Player Rank"}
      {scorers ? (
        scorers.map((scorer, idx) => (
          <PlayerRankCard
            key={scorer.player.id}
            playerId={scorer.player.id}
            ranking={idx + 1}
            teamCrest={scorer.team.crest}
            teamName={scorer.team.name}
            playerName={scorer.player.name}
            playedMatches={scorer.playedMatches}
            goals={scorer.goals}
            assists={scorer.assists}
          />
        ))
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default PlayerRank;
