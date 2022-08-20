import { ObjectId } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "../../../../lib/mongodb";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'DELETE') {
    try {
      const { db } = await connectToDatabase()
      const { id } = req.query
      await db.collection('tasks').deleteOne({_id: new ObjectId(String(id))})
      return res.status(200).json({'ok': true})
    } catch (error) {
      return res.send(error)
    }
  }
}