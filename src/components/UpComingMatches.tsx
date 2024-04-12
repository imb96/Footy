'use client'

import { useEffect, useState } from 'react'

import Image from 'next/image'

import getSchedule from '@/api/getSchedule'
import { Match } from '@/types/Match'

import MatchCard from './MatchCard'

const UpComingMatches = () => {
  const [clMatches, setCLMatches] = useState<Match[]>([])
  const [plMatches, setPLMatches] = useState<Match[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const upComingCLMatches = await getSchedule({ competitions: 'CL' })
        const upComingPLMatches = await getSchedule({ competitions: 'PL' })
        setCLMatches(upComingCLMatches)
        setPLMatches(upComingPLMatches)
      } catch (error) {
        console.error('Error fetching upcoming match data:', error)
      }
    }
    fetchData()
  }, [])

  return (
    <div className="flex flex-col gap-10">
      {clMatches.length > 0 && (
        <div>
          <div className="flex gap-1 items-end text-xl">
            <Image
              src={clMatches[0].competition.emblem}
              alt={'league emblem'}
              width={28}
              height={28}
            />
            {'Champions League'}
          </div>
          {clMatches.map((match: Match) => (
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
      {plMatches.length > 0 && (
        <div>
          <div className="flex gap-1 items-end text-xl">
            <Image
              src={plMatches[0].competition.emblem}
              alt={'league emblem'}
              width={28}
              height={28}
            />
            {'Premier League'}
          </div>
          {plMatches.map((match: Match) => (
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
