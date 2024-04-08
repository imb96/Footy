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

  return data.matches;
};

export default getUpcomingMatch;
