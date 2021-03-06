import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import { getMockedAgents } from "@utils/helpers/getMockedAgents";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { agents } = getMockedAgents();

  try {
    res.status(200).json({ items: agents });
  } catch (err) {
    if (axios.isAxiosError(err)) {
      res.status(400).json(err?.message);
    }
  }
}
