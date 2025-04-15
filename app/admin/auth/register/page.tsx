// app/register/page.tsx
'use client'

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Input } from "@/src/components/ui/input"
import { Button } from "@/src/components/ui/button"
import { Card } from "@/src/components/ui/card"

export default function RegisterPage() {
  const [firstname, setFirstname] = useState("")
  const [lastname, setLastname] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [companyNumber, setCompanyNumber] = useState("")
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const res = await fetch("/api/register", {
      method: "POST",
      body: JSON.stringify({firstname, lastname, email, password, companyNumber }),
    })

    if (res.ok) {
      router.push("/admin/auth/login")
    } else {
      alert("Inscription échouée")
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-10">
      <Card className="p-8 shadow-lg rounded-lg w-full sm:max-w-md mx-auto bg-white">
        <h2 className="text-2xl font-bold text-center mb-6">Créer un compte</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <Input 
            type="text" 
            placeholder="Nom" 
            value={lastname} 
            onChange={(e) => setLastname(e.target.value)} 
            className="w-full p-3 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
          />
          <Input 
            type="text" 
            placeholder="Prénom" 
            value={firstname} 
            onChange={(e) => setFirstname(e.target.value)} 
            className="w-full p-3 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
          />
          <Input 
            type="text" 
            placeholder="SIRET" 
            value={companyNumber} 
            onChange={(e) => setCompanyNumber(e.target.value)} 
            className="w-full p-3 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
          />
          <Input 
            type="email" 
            placeholder="Email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            className="w-full p-3 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
          />
          <Input 
            type="password" 
            placeholder="Mot de passe" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            className="w-full p-3 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
          />
          <Button 
            type="submit" 
            variant="default" 
            className="w-full py-3 text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:ring-green-300 rounded-lg"
          >
            S'inscrire
          </Button>
        </form>
      </Card>
    </div>
  )
}
