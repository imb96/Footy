import { Competition } from '@/types/match.types';

const getTeamRank = async ({ competition }: { competition: Competition }) => {
  const url = `api/competitions/${competition}/standings`;

  const res = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'X-Auth-Token': process.env.NEXT_PUBLIC_API_KEY || '',
    },
  });

  if (!res.ok) {
    throw new Error('[getTeamRank] api Failed to fetch data');
  }

  const data = await res.json();

  return { table: data.standings[0].table, season: data.filters.season };
};

export default getTeamRank;
