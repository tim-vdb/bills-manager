import { buttonVariants } from '@/src/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/src/components/ui/card'
import Link from 'next/link'
import React from 'react'

export default function Page() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <p>Url : /admin</p>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Link href='/admin/citations/new' className={buttonVariants({ size: "lg", variant: "outline" })}>
          <p>Create Citation</p>
        </Link>
      </CardContent>
    </Card>
  )
}
