"use client"

import { Client, User } from "@/generated/prisma"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/src/components/ui/table"

type BillPreviewProps = {
  url: string
  icalData: any
  openStates: Record<number, boolean>
  toggleItem: (index: number) => void
  initialClient: Client
  initialUser: User
  lastName: string
  firstName: string
  email: string
  companyNumber: string
  clientName: string
  clientEmail: string
  clientAddress: string
  hourlyRate: number
  tvaRate: number
  totalAmount: number
}

export default function BillPreview({
  url,
  icalData,
  openStates,
  toggleItem,
  initialClient,
  initialUser,
  lastName,
  firstName,
  email,
  companyNumber,
  clientName,
  clientEmail,
  clientAddress,
  hourlyRate,
  tvaRate,
  totalAmount,

}: BillPreviewProps) {
  return (
    <div className="space-y-6 p-6">
      <p>{lastName}</p>
      {icalData && Array.isArray(icalData.events) && (
        <Table className="w-full">
          <TableCaption>Liste de vos événements iCal</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[200px]">Label</TableHead>
              <TableHead>Date Start</TableHead>
              <TableHead>Date End</TableHead>
              <TableHead>Hours</TableHead>
              <TableHead>Hourly Rate</TableHead>
              <TableHead>Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {icalData.events.map((event: any, index: number) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{event.summary}</TableCell>
                <TableCell>{new Date(event.start).toLocaleString()}</TableCell>
                <TableCell>{new Date(event.end).toLocaleString()}</TableCell>
                <TableCell>{event.totalHours}</TableCell>
                <TableCell>{hourlyRate}</TableCell>
                <TableCell>{event.totalHours * hourlyRate}</TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={6} className="text-right">Subtotal</TableCell>
              <TableCell colSpan={7}>{(totalAmount ?? 0).toFixed(2)}€</TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={6} className="text-right">VTA {tvaRate * 100}%</TableCell>
              <TableCell colSpan={7}>{((totalAmount ?? 0) * tvaRate).toFixed(2)}€</TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={6} className="text-right font-bold text-2xl">Total</TableCell>
              <TableCell colSpan={6} className="font-bold text-2xl">{((totalAmount ?? 0) * (1 + tvaRate)).toFixed(2)}€</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      )}
    </div>
  )
}


// <div key={index} className="border p-3 rounded flex justify-between items-center">
//                 <h2 className="font-semibold">{event.summary}</h2>
//                 <button
//                   className="text-sm text-blue-500"
//                   onClick={() => toggleItem(index)}
//                 >
//                   Afficher
//                 </button>
//               </div>