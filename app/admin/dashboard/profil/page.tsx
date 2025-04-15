// app/profil/page.tsx
'use client'

import { Button } from "@/src/components/ui/button"
import { useSession, signOut } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { Card } from "@/src/components/ui/card"
import Link from "next/link"

export default function ProfilPage() {
  const { data: session, status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/admin/auth/login")
    }
  }, [status, router])

  if (status === "loading") return <p>Chargement de la session...</p>
  if (!session) {
    router.push("/login")
    return null
  }

  return (
    // <div className="p-6 max-w-xl mx-auto">

    //   <Card className="p-6 shadow-lg rounded-md bg-white space-y-4">
    //     <h1 className="text-3xl font-bold text-center mb-4">Bienvenue {session?.user?.name ?? "Utilisateur"}</h1>


    //     <div className="space-y-2">
    //       <div className="flex justify-between">
    //         <span className="font-semibold text-lg">Email :</span>
    //         <span>{session?.user?.email}</span>
    //       </div>
    //       <div className="flex justify-between">
    //         <span className="font-semibold text-lg">ID :</span>
    //         <span>{session?.user?.id}</span>
    //       </div>
    //     </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* User Information Section */}
      <Card className="p-4 shadow-md rounded-md bg-gray-50">
        <h2 className="text-xl font-semibold mb-4">Informations utilisateur</h2>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="font-medium">Nom :</span>
            <span>{session?.user?.name ?? "Utilisateur"}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Email :</span>
            <span>{session?.user?.email}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">ID :</span>
            <span>{session?.user?.id}</span>
          </div>
        </div>
      </Card>

      {/* Clients Section */}
      <Card className="p-4 shadow-md rounded-md bg-gray-50">
        <h2 className="text-xl font-semibold mb-4">Clients</h2>
        <div className="space-y-2">
          <Link href={"/admin/dashboard/company"} className="w-full">
            Ajouter un client
          </Link>
          <Button variant="destructive" className="w-full">
            Supprimer un client
          </Button>
        </div>
      </Card>
      {/* </div> */}

      <div className="mt-6 text-center">
        <Button
          variant="destructive"
          onClick={() => signOut({ callbackUrl: "/admin/auth/login" })}
          className="w-full"
        >
          Se déconnecter
        </Button>
      </div>
      {/* // </Card> */}
    </div >
  )
}
