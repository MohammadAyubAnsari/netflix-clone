import prismadb from "@/lib/prismadb";
import serverAuth from "@/lib/serverAuth";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method !== "GET") {
      return res.status(405).end();
    }

    await serverAuth(req);

    const { movieId } = req.query;

    if (typeof movieId !== "string") {
      throw new Error("Invalid Id");
    }

    if (!movieId) {
      throw new Error("Invalid Id");
    }

    const movie = await prismadb.movie.findUnique({
      where: {
        id: movieId,
      },
    });

    if (!movie) {
      throw new Error("Invalid ID");
    }
    return res.status(200).json(movie);
  } catch (err) {
    console.log(err);
    res.status(400).end();
  }
}
