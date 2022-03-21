import { getMockedRoles } from "@utils/helpers/getMockedRoles";
import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { roles } = getMockedRoles();

  try {
    res.status(200).json({ roles });
  } catch (err) {
    if (axios.isAxiosError(err)) {
      res.status(400).json(err?.message);
    }
  }
}
