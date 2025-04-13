
import { deleteUserAction } from '@/app/user.action';
import { Button } from '@/src/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/src/components/ui/card';
import { prisma } from '@/src/lib/prisma';
import { useRouter } from 'next/navigation';
import React from 'react'

export default async function Page(props: {
    params: Promise<{
        userId: string;
    }>;
}) {
    const params = await props.params;
    const userId = params.userId;
    const router = useRouter();

    const user = await prisma.user.findFirst({
        where: {
            user_id: userId,
        }
    })

    const onDelete = async () => {
        await deleteUserAction(user?.user_id);

        // if (result.message) {
        //     router.refresh();
        // }
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle>
                    <p>Welcome {user?.name}</p>
                </CardTitle>
            </CardHeader>
            <CardContent>
                <Button onClick={() => { onDelete() }}>Delete my account</Button>
                {/* je dois créer un composant Button pour le hook useRouter afin d'avoir un serveur component */}
            </CardContent>
        </Card>
    )
}
