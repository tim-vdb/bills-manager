"use client";

import { Button } from '@/src/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/src/components/ui/card'
import { Input } from '@/src/components/ui/input'
import { Label } from '@/src/components/ui/label'
import Form from 'next/form'
import React from 'react'
import { createUserAction } from '../user.action';

export default function Page() {
    const onSubmit = async (FormData: FormData) => {
        let error: null | string = null;
        const json = await createUserAction({
            name: String(FormData.get("name")),
            company_number: String(FormData.get("company_number")),
            email: String(FormData.get("email")),
            password: String(FormData.get("password")),
            confirm_password: String(FormData.get("confirm_password"))
        })
        error = json.error

        if(error) {
            alert(error)
        }
    }

    return (
        <div className='flex justify-center items-center h-full'>
            <Card className='w-full p-4 md:w-2/3'>
                <CardHeader >
                    <CardTitle>
                        <h1 className='text-center text-3xl sm:text-4xl'>One single registration makes bills easy</h1>
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <Form action={async (FormData) => {
                        await onSubmit(FormData)
                    }} className='flex flex-col gap-4'>
                        <Label className='flex flex-col items-start'>
                            <p>Name :</p>
                            <Input name='name' type='text' />
                        </Label>
                        <Label className='flex flex-col items-start'>
                            <p>Company number :</p>
                            <Input placeholder='SIRET/EIN/BCE/...' name='company_number' type='text' />
                        </Label>
                        <Label className='flex flex-col items-start'>
                            <p>Email :</p>
                            <Input placeholder='example@gmail.com' name='email' type='email' />
                        </Label>
                        <Label className='flex flex-col items-start'>
                            <p>Password :</p>
                            <Input name='password' type='password' />
                        </Label>
                        <Label className='flex flex-col items-start'>
                            <p>Confirm password :</p>
                            <Input name='confirm_password' type='password' />
                        </Label>
                        <Button className='cursor-pointer'>Submit</Button>
                    </Form>
                </CardContent>
            </Card>
        </div>
    )
}
