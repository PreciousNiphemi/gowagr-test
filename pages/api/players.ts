import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const { marketType = "player_shots_on_target", size = "30" } = req.query;

    const response = await fetch(
      `https://api.squads.game/bet/public-props?marketType=${marketType}&size=${size}`
    );

    if (!response.ok) {
      throw new Error(`API responded with status: ${response.status}`);
    }

    const data = await response.json();

    // Set CORS headers
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");

    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching players:", error);
    res.status(500).json({
      message: "Error fetching player data",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
}
