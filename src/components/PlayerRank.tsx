'use client';

import Image from 'next/image';

import usePlayerRankQuery from '@/hooks/api/usePlayerRankQuery';
import type { Competition } from '@/types/match.types';
import type { Scorer } from '@/types/scorer.types';

import PlayerRankCard from './PlayerRankCard';

const PlayerRank = ({ competition }: { competition: Competition }) => {
  const { data, isLoading, isError } = usePlayerRankQuery({ competition });

  if (isLoading) {
    return (
      <div className="flex justify-center">
        <div className="loader"></div>
      </div>
    );
  }

  if (isError) {
    return <div>{'Error'}</div>;
  }

  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-1 justify-center items-center">
        <div className="flex justify-center gap-2 p-5 truncate items-center">
          <Image src={`/images/${competition}.png`} alt={'league emblem'} width={40} height={40} />
          <h1 className="text-2xl font-bold">{`Player Rank (${data?.season.slice(-2)}/${parseInt(data?.season.slice(-2)) + 1})`}</h1>
        </div>
      </div>
      <div className="flex gap-2 items-center text-center font-bold">
        <div className="text-sm w-4"></div>
        <div className="text-sm w-40">선수</div>
        <div className="text-sm w-10">경기</div>
        <div className="text-sm w-10">골</div>
        <div className="text-sm w-10">도움</div>
      </div>
      {data?.scorers ? (
        data.scorers.map((scorer: Scorer, idx: number) => (
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
