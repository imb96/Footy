export interface Match {
  id: number
  utcDate: string
  status: string
  homeTeam: {
    name: string
    shortName: string
    tla: string
    crest: string
  }
  awayTeam: {
    name: string
    shortName: string
    tla: string
    crest: string
  }
  score: {
    fullTime: {
      home: string
      away: string
    }
  }
  competition: {
    code: Competition
    name: string
    emblem: string
  }
}

export type Competition = 'PL' | 'CL'
