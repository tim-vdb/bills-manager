import { buttonVariants } from '@/src/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/src/components/ui/card'
import { prisma } from '@/src/lib/prisma';
import React from 'react'
import { CitationForm } from '../citation-form';

export default async function Page(props: {
  params: Promise<{
    citationId: string;
  }>;

  searchParams: Promise<Record<string, string | string[]>>;
}) {

  const params = await props.params;
  const citationId = params.citationId

  const citation = await prisma.citation.findFirst({
    where: {
      id: citationId
    }
  })

  const searchParams = await props.searchParams;

  if (!citation) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>The citation {citationId} not exist</CardTitle>
        </CardHeader>
      </Card>
    )
  } else {
    return <CitationForm citation={citation}></CitationForm>
  }
}
