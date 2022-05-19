import prisma from "lib/PrismaClient";

export default async function handler(req, res) {
  if(req.method === 'GET') {
    const expense = await prisma.expense.findUnique({
      where: {
        id: parseInt(req.query.id)
      }
    });

    if(!expense) return res.status().json({ message: 'Not Found' });

    return res.status(200).json({ ...expense });
  }

  if(req.method === 'PUT') {
  }

  if(req.method === 'DELETE') {
  }

}