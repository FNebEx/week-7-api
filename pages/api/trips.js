import prisma from "lib/PrismaClient";

export default async function handler(req, res) {

  const trips = await prisma.trip.findMany();

  if (req.method !== 'GET') {
    res.status(405).json({
      message: 'Method not allowed!'
    });

    return;
  }

  res.status(200).json(trips);
}