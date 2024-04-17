export interface Team {
  position: number
  playedGames: number
  won: number
  draw: number
  lost: number
  points: number
  goalsFor: number
  goalsAgainst: number
  goalDifference: number
  team: {
    name: string
    crest: string
  }
}
