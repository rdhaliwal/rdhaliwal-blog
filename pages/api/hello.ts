// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  name: string;
};

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const data = await getData();
  res.status(200).json(data);
};

export const getData = (): Promise<{ name: string }> =>
  new Promise((res, rej) => res({ name: `John Doe ${Date.now()}` }));

export default handler;
