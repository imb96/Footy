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
      match.competition.code === "PL" ||
      match.competition.code === "CL" ||
      match.competition.code === "PD" ||
      match.competition.code === "FL1" ||
      match.competition.code === "BL1"
  );

  return upComingMatch;
};

export default getUpcomingMatch;
