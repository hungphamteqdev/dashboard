import { GetExpenseResponse } from "@/types/GetExpenseResponse";
import { NextApiRequest, NextApiResponse } from "next";
import { getExpenses } from './../../services/firebase';




export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<GetExpenseResponse>
  ) {
    const { type } = req.query
    const rs = await getExpenses(type as string);
    
    res.status(200).json(rs);
  }
  