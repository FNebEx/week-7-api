import prisma from "lib/PrismaClient";

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const expense = await prisma.expense.findMany();
    return res.status(200).json(expense);
  }

  if(req.method === 'POST') {
    const { trip, name, date, amount, currency } = req.body;

    if(!trip || !name || !amount || !currency) return res.status(400).json({ message: 'Missing Parameter'});

    await prisma.expense.create({ data: { trip, name, date, amount, currency }});
    return res.status(200).end();
  }

  return res.status(405).json({ message: 'Method not allowed' });
}