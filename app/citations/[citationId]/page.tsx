import { Card, CardHeader, CardTitle } from "@/src/components/ui/card";
import { prisma } from "@/src/lib/prisma";

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
        return (
            <div className="flex items-center justify-center h-full">
                <Card key={citation.id} className='flex flex-row gap-2 p-4 w-1/2'>
                    <div className='flex flex-col flex-1 p-4 gap-2'>
                        <p className="text-center">"{citation.text}"</p>
                        <p>Author : {citation.author}</p>
                    </div>
                </Card>
            </div>
        )
    }
}
