// types/next-auth.d.ts (ou dans le même fichier avec authOptions)

import NextAuth from "next-auth"

declare module "next-auth" {
    interface Session {
        user: {
            id: string
            name?: string | null
            email?: string | null
            image?: string | null
            sub?: string
        }
    }

    interface User {
        id: string
        email: string
        name?: string
    }
}
