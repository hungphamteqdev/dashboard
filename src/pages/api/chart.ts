import { getChart } from '@/services/firebase';
import { GetChartResponse } from '@/types/GetChartResponse';
import type { NextApiRequest, NextApiResponse } from 'next';



export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<GetChartResponse>
) {
  const { type } = req.query
  const rs = await getChart(type as string);
  
  res.status(200).json(rs);
}
