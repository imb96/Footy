export interface Match {
  id: number;
  utcDate: string;
  status: string;
  homeTeam: {
    name: string;
    shortName: string;
    tla: string;
    crest: string;
  };
  awayTeam: {
    name: string;
    shortName: string;
    tla: string;
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
    name: string;
    emblem: string;
  };
}
