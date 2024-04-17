'use client'

import { useEffect, useState } from 'react'

import Image from 'next/image'

import getTeamRank from '@/api/getTeamRank'
import { Team } from '@/types/Team'

const TeamRank = ({ competition }: { competition: string }) => {
  const [teams, setTeams] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const teams = await getTeamRank({ competition })
        setTeams(teams)
      } catch (error) {
        console.error('Error fetching team rank data:', error)
      }
    }
    fetchData()
  }, [competition])

  return (
    <div className="flex flex-col gap-2">
      <div className="text-lg">{'Premier League Team Rank'}</div>
      {teams.map((team: Team) => (
        <div key={team.position} className="flex gap-2 items-center">
          <div>{team.position}</div>
          <Image
            src={team.team.crest}
            alt={team.team.name}
            width={24}
            height={24}
          />
          <div className="text-sm">{team.team.name}</div>
          <div className="text-sm">{team.playedGames}</div>
          <div className="text-sm">{team.won}</div>
          <div className="text-sm">{team.draw}</div>
          <div className="text-sm">{team.lost}</div>
          <div className="text-sm">{team.goalsFor}</div>
          <div className="text-sm">{team.goalsAgainst}</div>
          <div className="text-sm">{team.goalDifference}</div>
          <div className="text-sm font-bold">{team.points}</div>
        </div>
      ))}
    </div>
  )
}

export default TeamRank
