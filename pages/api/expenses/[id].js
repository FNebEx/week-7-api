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
    const { trip, name, date, amount, currency } = req.body;

    await prisma.expense.update({
      data: { trip, name, date, amount, currency },
      where: { id: parseInt(req.query.id) }
    });

    return res.status(200).end();
  }
  
  if(req.method === 'DELETE') {
    await prisma.expense.delete({
      where: { id: parseInt(req.query.id) }
    });
    
    return res.status(200).end();
  }
  
}