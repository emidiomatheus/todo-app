import { ObjectId } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "../../../../utils/mongodb";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'PUT') {
    try {
      const { db } = await connectToDatabase()
      const { id } = req.query
      const data = {
        title: req.body.title,
        date: req.body.date,
        type: req.body.type,
        isFinished: false,
      }
      await db.collection('tasks').replaceOne(
        { _id: new ObjectId(id) },
        data
      )
      return res.status(200).json({_id: id, ...data})
    } catch (error) {
      return res.send(error)
    }
  }
}