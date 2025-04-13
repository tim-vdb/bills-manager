import { buttonVariants } from '@/src/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/src/components/ui/card'
import { prisma } from '@/src/lib/prisma'
import Link from 'next/link'
import React from 'react'
import { DeleteCitationButton } from './citations/delete-citation-button'

export default async function Page() {
  const citations = await prisma.citation.findMany({
    orderBy: {
      createdAt: "desc"
    }
  })

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <p>Url : /admin2</p>
        </CardTitle>
      </CardHeader>
      <CardContent className='flex flex-col gap-4'>
        <Link href='/admin2/citations/new' className={buttonVariants({ size: "lg", variant: "outline" })}>
          <p>Create Citation</p>
        </Link>
        {citations.map(citation => (
          <Card key={citation.id} className='flex flex-row gap-2 p-4'>
            <div className='flex flex-col flex-1 p-4 gap-2'>
              <p>"{citation.text}"</p>
              <p>Author : {citation.author}</p>
            </div>
            <div className='flex flex-col gap-2'>
              <DeleteCitationButton id={citation.id} />
              <Link href={`/admin2/citations/${citation.id}`} className={buttonVariants({ size: "sm", variant: "outline" })}>
                ✏️
              </Link>
              <Link href={`/citations/${citation.id}`} className={buttonVariants({ size: "sm", variant: "outline" })}>
                📎
              </Link>
            </div>
          </Card>
        ))}
      </CardContent>
    </Card>
  )
}
