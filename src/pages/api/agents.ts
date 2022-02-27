import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const url = `${process.env.API_URL}/agents`;

  try {
    const response = await axios.get(url);
    res.status(200).json(response.data);
  } catch (err) {
    if (axios.isAxiosError(err)) {
      res.status(400).json(err?.message);
    }
  }
}
