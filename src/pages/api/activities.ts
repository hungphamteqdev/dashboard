import { getActivities } from '@/services/firebase';
import { GetActivityResponse } from '@/types/GetActivityResponse';
import type { NextApiRequest, NextApiResponse } from 'next';



export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<GetActivityResponse>
) {
  const { year } = req.query
  const rs = await getActivities(year as string);
  
  res.status(200).json(rs);
}
