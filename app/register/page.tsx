// app/register/page.tsx
'use client'

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Input } from "@/src/components/ui/input"
import { Button } from "@/src/components/ui/button"
import { Card } from "@/src/components/ui/card"
import Link from "next/link"
import { Label } from "@radix-ui/react-label"
import toast from "react-hot-toast"

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
      body: JSON.stringify({ firstname, lastname, email, password, companyNumber }),
    })

    const data = await res.json()

    if (res.ok) {
      toast.success("You are registered !")
      router.push("/login")
    } else {
      toast.error(data.error || "Something went wrong.")
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-10 p-5 sm:px-0">
      <Card className="p-8 shadow-lg rounded-lg w-full sm:max-w-2/4 mx-auto bg-slate-900 text-white text-center">
        <h2 className="text-2xl font-bold text-center mb-6">Sign up to Bills Manager</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <Label className="flex flex-col items-start gap-2">
            <p>Last Name :<span className="text-red-500">*</span> </p>
            <Input
              type="text"
              value={lastname}
              required
              onChange={(e) => setLastname(e.target.value)}
              className="w-full p-3 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
            />
          </Label>
          <Label className="flex flex-col items-start gap-2">
            <p>First Name :<span className="text-red-500">*</span></p>
            <Input
              type="text"
              value={firstname}
              required
              onChange={(e) => setFirstname(e.target.value)}
              className="w-full p-3 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
            />
          </Label>
          <Label className="flex flex-col items-start gap-2">
            <p>Company number :<span className="text-red-500">*</span></p>
            <Input
              type="text"
              placeholder="SIRET/CRN/EIN/BCE..."
              value={companyNumber}
              required
              onChange={(e) => setCompanyNumber(e.target.value)}
              className="w-full p-3 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
            />
          </Label>
          <Label className="flex flex-col items-start gap-2">
            <p>Email :<span className="text-red-500">*</span></p>
            <Input
              type="email"
              placeholder="example@gmail.com"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
            />
          </Label>
          <Label className="flex flex-col items-start gap-2">
            <p>Password :<span className="text-red-500">*</span></p>
            <Input
              type="password"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
            />
          </Label>
          <Button
            type="submit"
            variant="default"
            className="flex items-center gap-4 px-8 shadowBlue border-2 border-blue-400 mx-auto duration-200 w-fit shadowBlue py-3 text-white rounded-lg"
          >
            Sign up
          </Button>
        </form>
        <Link href={"/login"} className="hover:underline w-fit mx-auto">Login</Link>
      </Card>
    </div>
  )
}
