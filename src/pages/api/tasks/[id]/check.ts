import { ObjectId } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "../../../../utils/mongodb";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'PUT') {
    try {
      const { db } = await connectToDatabase()
      const { id } = req.query
      await db.collection('tasks').updateOne(
        { _id: new ObjectId(id) },
        {
          $set: { isFinished: true }
        }
      )
      return res.status(200).json({'checked': true})
    } catch (error) {
      return res.send(error)
    }
  }
}