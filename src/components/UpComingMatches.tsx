'use client'

import { useEffect, useState } from 'react'

import { UseQueryResult } from '@tanstack/react-query'
import Image from 'next/image'

import getSchedule from '@/api/getSchedule'
import useScheduleQuery from '@/hooks/api/useScheduleQuery'
import { Match } from '@/types/Match'

import MatchCard from './MatchCard'

const UpComingMatches = ({ competitions }: { competitions: string }) => {
  const {
    data: matches,
    isLoading,
    isError,
  } = useScheduleQuery({ competitions })

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

  return (
    <div className="flex flex-col gap-10">
      {matches.length > 0 && (
        <div>
          <div className="flex justify-center gap-1 items-center p-5 truncate">
            <Image
              src={matches[0].competition.emblem}
              alt={'league emblem'}
              width={40}
              height={40}
            />
            <h1 className="text-2xl font-bold">
              {matches[0].competition.name}
            </h1>
          </div>
          {matches.map((match: Match) => (
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
  )
}

export default UpComingMatches
