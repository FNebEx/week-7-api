import prisma from "lib/PrismaClient";

export default async function handler(req, res) {
  if(req.method === 'GET') { 
    const trip = await prisma.trip.findUnique({
      where: {
        id: parseInt(req.query.id)
      }
    });

    if (!trip) {
      return res.status(400).json({ messages: 'Not found' });
    }

    res.status(200).json(trip);
  }

  if(req.method === 'PUT') { /* */ }

  if(req.method === 'DELETE') { /* */ }

}