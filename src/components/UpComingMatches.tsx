import Image from 'next/image'

import useScheduleQuery from '@/hooks/api/useScheduleQuery'
import { Match } from '@/types/Match'

import MatchCard from './MatchCard'

const UpComingMatches = () => {
  const { data: clMatches } = useScheduleQuery({
    competitions: 'CL',
  })

  const { data: plMatches } = useScheduleQuery({
    competitions: 'PL',
  })

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
