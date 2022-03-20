// import { NextApiRequest, NextApiResponse } from "next";
// import { connectToDatabase } from "../../../utils/mongodb";

// export default async (req: NextApiRequest, res: NextApiResponse) => {
//   if (req.method === 'GET') {
//     try {
//       const { db } = await connectToDatabase()
//       const data = await db.collection('tasks').find({}).toArray()
//       const tasks = JSON.parse(JSON.stringify(data))
//       console.log(tasks)
//       return res.json(tasks)
//     } catch (error) {
//       return res.send(error)
//     }
//   }
//   return res.status(405).send('Method not allowed')
// }