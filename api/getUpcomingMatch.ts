import { Match } from "@/types/Match";

const getUpcomingMatch = async () => {
  const url = `api/matches`;

  const res = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "X-Auth-Token": process.env.NEXT_PUBLIC_API_KEY || "",
    },
  });

  if (!res.ok) {
    throw new Error("[getUpcomingMatch] api Failed to fetch data");
  }

  const data = await res.json();

  const upComingMatch = data.matches.filter(
    (match: Match) =>
      match.competition.code === "PL" || // 프리미어 리그
      match.competition.code === "CL" || // 챔피언스 리그
      match.competition.code === "FL1" || // 프랑스 리그1
      match.competition.code === "BL1" // 분데스리가
  );

  return upComingMatch;
};

export default getUpcomingMatch;
