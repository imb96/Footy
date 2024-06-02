export interface Scorer {
  player: {
    id: number;
    name: string;
  };
  team: {
    crest: string;
    name: string;
  };
  playedMatches: string;
  goals: string;
  assists: string;
}
