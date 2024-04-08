const getPlayerRank = async ({ competition }: { competition: string }) => {
  const url = `api/competitions/${competition}/scorers`;

  const res = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "X-Auth-Token": process.env.NEXT_PUBLIC_API_KEY || "",
    },
  });

  if (!res.ok) {
    throw new Error("[getPlayerRank] api Failed to fetch data");
  }

  const data = await res.json();

  return data;
};

export default getPlayerRank;
