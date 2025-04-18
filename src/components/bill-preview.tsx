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
  reference: string
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
  reference,

}: BillPreviewProps) {
  return (
    <div className="space-y-6 p-6">
      <div className="flex items-start">
        <div className="flex flex-col gap-5 w-full">
          <p className="whitespace-nowrap">Last Name : {lastName}</p>
          <p className="whitespace-nowrap">First Name : {firstName}</p>
          <p className="whitespace-nowrap">Email : {email}</p>
          <p className="whitespace-nowrap">Company Number : {companyNumber}</p>
        </div>
        <div className="flex flex-col gap-5 w-full text-right">
          <p>Name : {clientName}</p>
          <p>Email : {clientEmail}</p>
          <p>Address : {clientAddress}</p>
          <p>Hourly Rate : {hourlyRate}</p>
          <p>TVA Rate : {tvaRate}</p>
          <p>Invoice Reference : {reference}</p>
        </div>
      </div>
      <div className="space-y-6 p-6">
        {icalData && Array.isArray(icalData.events) && (
          <Table className="w-full">
            <TableCaption>List of ICAL Events</TableCaption>
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
              {icalData.events.map((event: any, index: number) =>
                !openStates[index] ? (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{event.summary}</TableCell>
                    <TableCell>{new Date(event.start).toLocaleString()}</TableCell>
                    <TableCell>{new Date(event.end).toLocaleString()}</TableCell>
                    <TableCell>{event.totalHours}</TableCell>
                    <TableCell>{hourlyRate}</TableCell>
                    <TableCell>{event.totalHours * hourlyRate}</TableCell>
                  </TableRow>
                ) : null
              )}
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
    </div>
  )
}


{/* // <div key={index} className="border p-3 rounded flex justify-between items-center">
//                 <h2 className="font-semibold">{event.summary}</h2>
//                 <button
//                   className="text-sm text-blue-500"
//                   onClick={() => toggleItem(index)}
//                 >
//                   Afficher
//                 </button>
//               </div> */}