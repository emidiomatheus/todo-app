import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import { connectToDatabase } from "../../../lib/mongodb";
import { TaskType } from "../../dashboard";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    const session = await getSession({ req })
    const { db } = await connectToDatabase()

    const response = await db.collection('tasks').find({userId: session?.user.id}).toArray()

    const parsedTasks: TaskType[] = JSON.parse(JSON.stringify(response))

    const tasks = parsedTasks.map(task => {
      return { 
        _id: task._id,
        title: task.title,
        type: task.type,
        isFinished: task.isFinished,
        userId: task.userId,
      }
    })

    return res.status(201).json(tasks)
  }

  return res.status(405).send('Method not allowed')
}