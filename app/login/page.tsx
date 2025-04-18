// app/login/page.tsx
'use client'

import { Button } from "@/src/components/ui/button"
import { Card } from "@/src/components/ui/card"
import { Input } from "@/src/components/ui/input"
import { Label } from "@/src/components/ui/label"
import { signIn } from "next-auth/react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"
import toast from "react-hot-toast"

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
      toast.success("Successfully logged in!")
      router.push("/admin/dashboard") // ou autre route protégée
    } else {
      toast.error(res?.error || "Invalid credentials.")
    }
  }


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-10 p-5 sm:px-0">
      <Card className="p-8 shadow-lg rounded-lg w-full sm:max-w-1/3 mx-auto bg-slate-900 text-white text-center">
        <h2 className="text-2xl font-bold text-center mb-6">Log in to Bills Manager</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
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
            Log in
          </Button>
        </form>
        <Link href={"/register"} className="hover:underline w-fit mx-auto">Sign up</Link>
      </Card>
    </div>
  )
}
