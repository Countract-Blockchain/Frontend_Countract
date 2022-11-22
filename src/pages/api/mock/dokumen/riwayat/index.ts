import { NextApiRequest, NextApiResponse } from 'next';

import { historicalAccessData } from '@/data/historical-access.data';

export default async function riwayat(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    const token = req.headers.authorization?.split(' ')[1];
    if (token === 'dummy-token') {
      return res.status(200).json({
        code: 200,
        data: historicalAccessData,
      });
    } else {
      return res.status(401).json({
        code: 401,
        status: 'Error',
        message: "You're not authorized to access this resource",
      });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
