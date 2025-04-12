"use client";

import React, { useState } from 'react'
import { Label } from '@/src/components/ui/label';
import { Input } from '@/src/components/ui/input';
import { Button } from '@/src/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/src/components/ui/card';
import { useFormStatus } from 'react-dom';

export default function Page() {

    const createCitation = async (FormData: FormData) => {
        const result = await fetch("/api/citations", {
            body: JSON.stringify({
                citation: FormData.get("citation"),
                author: FormData.get("author"),
            }),
            method: "POST"
        });
        const json = await result.json();
        console.log(json)
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle>Create Citation</CardTitle>
            </CardHeader>
            <CardContent>
                <form action={async (formData) => {
                    await createCitation(formData)
                }} className='flex flex-col gap-2'>
                    <Label>
                        Citation
                        <Input name='citation' />
                    </Label>
                    <Label>
                        Author
                        <Input name='author' />
                    </Label>
                    <SubmitButton />
                </form>
            </CardContent>
        </Card>
        
    )
}

const SubmitButton = () => {
    const { pending } = useFormStatus();
    return (
        <Button disabled={pending} type='submit'>{pending ? "Loading..." : "Submit"}</Button>
    )
}
