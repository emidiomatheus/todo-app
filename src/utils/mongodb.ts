import { Db, MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI || "";
const dbName = process.env.MONGODB_DB

let cachedClient: any
let cachedDb: Db

if (!uri) {
  throw new Error(
    'Please define de MONGODB_URI environment variabel inside .env.local'
  )
}

if (!dbName) {
  throw new Error(
    'Please define de MONGODB_DB environment variabel inside .env.local'
  )
}

export async function connectToDatabase() {
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb }
  }

  const client = await MongoClient.connect(uri)

  const db = client.db(dbName)

  cachedClient = client
  cachedDb = db

  return { client, db }
}