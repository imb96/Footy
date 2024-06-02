'use client';

import { useRef, useState } from 'react';

import Image from 'next/image';

import Button from '@/components/Button';
import useTeamRankQuery from '@/hooks/api/useTeamRankQuery';
import type { Competition } from '@/types/match.types';
import type { Team } from '@/types/team.types';

const TeamRank = ({ competition }: { competition: Competition }) => {
  const { data, isLoading, isError } = useTeamRankQuery({ competition });
  const [visibleTeams, setVisibleTeams] = useState(10);
  const buttonRef = useRef<HTMLButtonElement>(null);

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

  const handleShowMoreTeams = () => {
    setVisibleTeams((prevVisibleTeams) => prevVisibleTeams + 10);
  };

  const handleShowLessTeams = () => {
    setVisibleTeams((prevVisibleTeams) => prevVisibleTeams - 10);
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-1 items-center justify-center">
        <div className="flex justify-center gap-2 items-center p-5 truncate">
          <Image src={'/images/PL.png'} alt={'league emblem'} width={40} height={40} />
          <h1 className="text-2xl font-bold">{`Team Rank (${data?.season.slice(-2)}/${parseInt(data?.season.slice(-2)) + 1})`}</h1>
        </div>
      </div>
      <div className="flex gap-2 items-center text-center font-bold">
        <div className="text-sm w-4"></div>
        <div className="text-sm md:w-44 sm:w-40 w-[72px]">클럽</div>
        <div className="text-sm w-5">경기</div>
        <div className="text-sm w-5">승</div>
        <div className="text-sm w-5">무</div>
        <div className="text-sm w-5">패</div>
        <div className="text-sm w-5">득점</div>
        <div className="text-sm w-5">실점</div>
        <div className="text-sm w-5">득실</div>
        <div className="text-sm w-5">승점</div>
      </div>
      {data?.table.slice(0, visibleTeams).map((team: Team) => (
        <div
          key={team.position}
          className={`flex p-1 gap-2 items-center text-center ${team.position > 0 && team.position < 5 && 'bg-blue-300'} ${team.position > 17 && 'bg-gray-300'} ${team.position === 5 && 'bg-green-300'}`}
        >
          <div className="text-sm w-4">{team.position}</div>
          <Image src={team.team.crest} alt={team.team.name} width={24} height={24} />
          <div className="truncate text-xs hidden md:inline w-36 text-start">{team.team.name}</div>
          <div className="truncate hidden sm:inline md:hidden text-xs w-32 text-start">{team.team.shortName}</div>
          <div className="text-xs sm:hidden w-10 text-start">{team.team.tla}</div>
          <div className="text-sm w-5">{team.playedGames}</div>
          <div className="text-sm w-5">{team.won}</div>
          <div className="text-sm w-5">{team.draw}</div>
          <div className="text-sm w-5">{team.lost}</div>
          <div className="text-sm w-5">{team.goalsFor}</div>
          <div className="text-sm w-5">{team.goalsAgainst}</div>
          <div className="text-sm w-5">{team.goalDifference}</div>
          <div className="text-sm font-bold">{team.points}</div>
        </div>
      ))}

      {visibleTeams < data?.table.length ? (
        <Button ref={buttonRef} className="bg-rose-500 text-white py-2 px-4 rounded-md" onClick={handleShowMoreTeams}>
          {'더보기'}
        </Button>
      ) : (
        <Button ref={buttonRef} className="bg-rose-500 text-white py-2 px-4 rounded-md" onClick={handleShowLessTeams}>
          {'간략히'}
        </Button>
      )}
    </div>
  );
};

export default TeamRank;
