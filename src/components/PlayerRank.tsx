"use client";

import getPlayerRank from "@/api/getPlayerRank";
import { useEffect, useState } from "react";
import PlayerRankCard from "./PlayerRankCard";
import { Scorer } from "@/types/Scorer";
import Image from "next/image";
const PlayerRank = () => {
  const [scorers, setScorers] = useState<Scorer[]>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const scorers = await getPlayerRank({ competition: "PL" });
        setScorers(scorers);
      } catch (error) {
        console.error("Error fetching player rank data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className="flex gap-1 items-end text-xl">
        <Image
          src={"https://crests.football-data.org/PL.png"}
          alt={"league emblem"}
          width={24}
          height={24}
        />
        {"Premier League Player Rank"}
      </div>
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