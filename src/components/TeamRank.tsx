'use client'

import { useState } from 'react'

import Image from 'next/image'

import useTeamRankQuery from '@/hooks/api/useTeamRankQuery'
import { Team } from '@/types/Team'

const TeamRank = ({ competition }: { competition: string }) => {
  const { data: teams, isLoading, isError } = useTeamRankQuery({ competition })
  const [visibleTeams, setVisibleTeams] = useState(10)

  if (isLoading) {
    return (
      <div className="flex justify-center">
        <div className="loader"></div>
      </div>
    )
  }

  if (isError) {
    return <div>{'Error'}</div>
  }

  const handleShowMoreTeams = () => {
    setVisibleTeams((prevVisibleTeams) => prevVisibleTeams + 10)
  }

  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-1 items-center justify-center">
        <div className="flex justify-center gap-2 items-center p-5 truncate">
          <Image
            src={'/images/PL.png'}
            alt={'league emblem'}
            width={40}
            height={40}
          />
          <h1 className="text-2xl font-bold">{'Team Rank'}</h1>
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
      {teams.slice(0, visibleTeams).map((team: Team) => (
        <div
          key={team.position}
          className="flex gap-2 items-center text-center"
        >
          <div className="text-sm w-4">{team.position}</div>
          <Image
            src={team.team.crest}
            alt={team.team.name}
            width={24}
            height={24}
          />
          <div className="truncate text-xs hidden md:inline w-36 text-start">
            {team.team.name}
          </div>
          <div className="truncate hidden sm:inline md:hidden text-xs w-32 text-start">
            {team.team.shortName}
          </div>
          <div className="text-xs sm:hidden w-10 text-start">
            {team.team.tla}
          </div>
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

      {visibleTeams < teams.length && (
        <button
          className="bg-rose-500 text-white py-2 px-4 rounded-md"
          onClick={handleShowMoreTeams}
        >
          {'더보기'}
        </button>
      )}
    </div>
  )
}

export default TeamRank
