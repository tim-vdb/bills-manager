"use client";
import React, { useState } from 'react'
import Form from 'next/form'
import { Label } from '@radix-ui/react-label'
import { Card, CardContent, CardHeader, CardTitle } from '@/src/components/ui/card'
import { Input } from '@/src/components/ui/input'
import { Button } from '@/src/components/ui/button';

export default function Page() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = async (FormData: FormData) => {
    let error: null | string = null;

    // const result = await ({
    //   redirect: false,
    //   email: String(FormData.get("email")),
    //   password: String(FormData.get("password")), 
    // });

    

    return (
      <div className='flex justify-center items-center h-full'>
        <Card className='w-full p-4 md:w-2/3'>
          <CardHeader>
            <CardTitle>
              <h1 className='text-center text-3xl sm:text-4xl'>Log in to Bills Manager</h1>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Form action={async (FormData) => {
              await onSubmit(FormData);
            }} className='flex flex-col gap-4' >
              <Label className='flex flex-col items-start'>
                <p>Email :</p>
                <Input type='email' placeholder='example@gmail.com' name='email' required />
              </Label>
              <Label className='flex flex-col items-start'>
                <p>Password :</p>
                <Input type='password' name='password' required />
              </Label>
              <Button type='submit' className='cursor-pointer'>Submit</Button>
            </Form>
          </CardContent>
        </Card>
      </div>
    )
  }
}
