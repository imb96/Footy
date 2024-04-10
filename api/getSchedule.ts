import { Match } from "@/types/Match";

const getSchedule = async ({ competitions }: { competitions: string }) => {
  const url = `api/competitions/${competitions}/matches`;

  const res = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "X-Auth-Token": process.env.NEXT_PUBLIC_API_KEY || "",
    },
  });

  if (!res.ok) {
    throw new Error("[getSchedule] api Failed to fetch data");
  }

  const data = await res.json();
  const currentDate = new Date();
  const today = new Date(currentDate);
  const yesterday = new Date(currentDate);
  const tomorrow = new Date(currentDate);
  yesterday.setDate(currentDate.getDate() - 1);
  tomorrow.setDate(currentDate.getDate() + 1);

  const isSameDate = (date1: Date, date2: Date) => {
    return (
      date1.getFullYear() === date2.getFullYear() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getDate() === date2.getDate()
    );
  };

  const filteredMatches = data.matches.filter((match: Match) => {
    const matchDate = new Date(match.utcDate);
    return (
      isSameDate(matchDate, yesterday) ||
      isSameDate(matchDate, today) ||
      isSameDate(matchDate, tomorrow)
    );
  });

  return filteredMatches;
};

export default getSchedule;
