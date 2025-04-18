// app/login/page.tsx
'use client'

import { Button } from "@/src/components/ui/button"
import { Card } from "@/src/components/ui/card"
import { Input } from "@/src/components/ui/input"
import { signIn } from "next-auth/react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    })
    if (res?.ok) {
      router.push("/admin/dashboard")
    } else {
      alert("Échec de la connexion")
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-10">
      <Card className="p-8 shadow-lg rounded-lg w-full sm:max-w-md mx-auto bg-white text-center">
        <h2 className="text-2xl font-bold text-center mb-6">Se connecter</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <Input 
            type="email" 
            placeholder="Email" 
            value={email}
            required 
            onChange={(e) => setEmail(e.target.value)} 
            className="w-full p-3 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
          />
          <Input 
            type="password" 
            placeholder="Mot de passe" 
            value={password}
            required 
            onChange={(e) => setPassword(e.target.value)} 
            className="w-full p-3 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
          />
          <Button 
            type="submit" 
            variant="default" 
            className="w-full py-3 text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 rounded-lg"
          >
            Se connecter
          </Button>
        </form>
        <Link href={"/register"}>Sign up</Link>
      </Card>
    </div>
  )
}
