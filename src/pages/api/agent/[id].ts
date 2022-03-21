import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import { getMockedAgent } from "@utils/helpers/getMockedAgent";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { agent } = getMockedAgent();

  try {
    res.status(200).json({ agent });
  } catch (err) {
    if (axios.isAxiosError(err)) {
      res.status(400).json(err?.message);
    }
  }
}
