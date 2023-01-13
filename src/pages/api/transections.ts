import { getTransections } from '@/services/firebase';
import type { NextApiRequest, NextApiResponse } from 'next';
import { Transection } from '../../types/Transection';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Transection[]>
) {
  const rs = await getTransections();
  res.status(200).json(rs);
}
