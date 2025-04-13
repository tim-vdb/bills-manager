import { Button, buttonVariants } from "@/src/components/ui/button";
import { Card } from "@/src/components/ui/card";
import { Input } from "@/src/components/ui/input";
import { prisma } from "@/src/lib/prisma";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const users = await prisma.user.findMany({
    orderBy: {
      date_inscription: "desc"
    }
  })

  return (
    <div>
      <Card>
        <Button>Bonjour !</Button>
        {users.map(user => (
          <Card key={user.user_id}>
            <Link href={`/user/${user.user_id}`} >{user.name}</Link>
            <Link href={`/user/${user.user_id}`} className={buttonVariants({ size: "sm", variant: "outline" })}>
              ✏️
            </Link>
          </Card>
        ))}
        <Link href={"/signup"} >Sign up</Link>
      </Card>
    </div>
  );
}
