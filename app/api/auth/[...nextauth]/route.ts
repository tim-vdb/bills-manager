// app/api/auth/[...nextauth]/route.ts
import NextAuth, { AuthOptions, Session } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { PrismaClient } from "@/generated/prisma"
import { compare } from "bcryptjs"

const prisma = new PrismaClient()

export const authOptions: AuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) {
                    throw new Error("Missing credentials")
                }

                const user = await prisma.user.findUnique({
                    where: { email: credentials.email },
                })

                if (!user) throw new Error("No user found")

                const isValid = await compare(credentials.password, user.password)

                if (!isValid) throw new Error("Invalid password")

                return {
                    id: user.id,
                    name: user.first_name,
                    email: user.email,
                }
            },
        }),
    ],
    session: {
        strategy: "jwt",
    },
    pages: {
        signIn: "/login",
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id
                token.email = user.email
            }
            return token
        },
        async session({ session, token }) {
            if (session.user && token) {
                session.user = {
                    ...session.user,
                    id: token.id as string,
                    email: token.email as string,
                }
            }
            return session
        },
    },
    secret: process.env.NEXTAUTH_SECRET,

}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
