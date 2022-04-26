import { MongoDBAdapter } from "@next-auth/mongodb-adapter"
import type { NextApiRequest, NextApiResponse } from "next"
import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import { connectToDatabase } from "../../../utils/mongodb"

export default async function auth(req: NextApiRequest, res: NextApiResponse) {
  const { client } = await connectToDatabase()
  
  return await NextAuth(req, res, {
    adapter: MongoDBAdapter(client),
    providers: [
      GoogleProvider({
        clientId: process.env.GOOGLE_ID || "",
        clientSecret: process.env.GOOGLE_SECRET || "",
      })
    ],
    session: {
      maxAge: 60 * 60 * 24 * 15, // 15 days
    },
    callbacks: {
      async session({ session, user }) {
        if (user) {
          session.user.id = user.id
        }

        return session
      },

      async signIn({ user }) {
        const { email } = user
        
        try {
          const { db } = await connectToDatabase()
          const userExists = db.collection('users').find({ email: { $search: user.email } })
  
          if (!userExists) {
            await db.collection('users').insertOne({email: email})
          }
  
          return true
        } catch (error) {
          return false
        }
      }
    }
  })
}