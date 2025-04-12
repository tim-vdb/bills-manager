import { buttonVariants } from '@/src/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/src/components/ui/card'
import { Link } from 'lucide-react'
import React from 'react'

export default async function Page(props : {
  params: Promise<{citationId: string;}>;
  searchParams: Promise<Record<string, string | string[]>>;
}) {

  const params = await props.params;
  const searchParams = await props.searchParams;
  return (
    <Card>
      <CardHeader>
        <CardTitle>{JSON.stringify(params, null, 2)}</CardTitle>
        <CardTitle>{JSON.stringify(searchParams, null, 2)}</CardTitle>
      </CardHeader>
    </Card>
  )
}
