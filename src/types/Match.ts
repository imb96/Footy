export interface Match {
  id: number;
  utcDate: string;
  homeTeam: {
    name: string;
    crest: string;
  };
  awayTeam: {
    name: string;
    crest: string;
  };
  score: {
    fullTime: {
      home: string;
      away: string;
    };
  };
  competition: {
    code: "PL" | "CL";
  };
}