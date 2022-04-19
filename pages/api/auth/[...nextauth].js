import NextAuth from "next-auth"
import Auth0Provider from "next-auth/providers/auth0"
import { MongoDBAdapter } from "@next-auth/mongodb-adapter"
import clientPromise from '../../../lib/clientPromise'

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    Auth0Provider({
      clientId: process.env.AUTH0_CLIENT_ID,
      clientSecret: process.env.AUTH0_CLIENT_SECRET,
      issuer: process.env.AUTH0_ISSUER
    }),  
    // ...add more providers here
  ],
  adapter: MongoDBAdapter(clientPromise),
  /*jwt: {
      signingKey: process.env.JWT_SIGNING_PRIVATE_KEY,
  }*/
})