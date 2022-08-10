import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "../../../lib/mongodb";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    try {
      const { db } = await connectToDatabase()
      await db.collection('tasks').insertOne(req.body)

      const tasks = {
        ...JSON.parse(JSON.stringify(req.body)),
      }
      return res.status(201).json(tasks)
    } catch (error) {
      return res.send(error)
    }
  }
  return res.status(405).send('Method not allowed')
}