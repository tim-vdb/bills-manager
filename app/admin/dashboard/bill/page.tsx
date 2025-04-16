import { Button } from '@/src/components/ui/button'
import { Input } from '@/src/components/ui/input'
import { Label } from '@/src/components/ui/label'
import Form from 'next/form'
import React from 'react'

export default function Page() {
  return (
    <div>
      <h1>Bill Form</h1>
      <Form action={"/"}>
        <div>
          <Label htmlFor="billNumber">Bill Number:</Label>
          {true ? (
        <Input type="text" id="billNumber" name="billNumber" />
          ) : (
        <p>Bill Number is not editable</p>
          )}
        </div>
        <div>
          <Label htmlFor="billDate">Bill Date:</Label>
          {true ? (
        <Input type="date" id="billDate" name="billDate" />
          ) : (
        <p>Bill Date is not editable</p>
          )}
        </div>
        <div>
          <Label htmlFor="amount">Amount:</Label>
          {true ? (
        <Input type="number" id="amount" name="amount" />
          ) : (
        <p>Amount is not editable</p>
          )}
        </div>
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  )
}
