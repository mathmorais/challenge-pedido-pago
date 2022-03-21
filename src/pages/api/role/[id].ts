import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import { getMockedAgents } from "@utils/helpers/getMockedAgents";
import { getMockedRole } from "@utils/helpers/getMockedRole";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { role } = getMockedRole();

  try {
    res.status(200).json({ role });
  } catch (err) {
    if (axios.isAxiosError(err)) {
      res.status(400).json(err?.message);
    }
  }
}
