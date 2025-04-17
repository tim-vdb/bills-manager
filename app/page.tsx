import { Prisma } from "@/generated/prisma";
import { Button, buttonVariants } from "@/src/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/src/components/ui/card";
import { Input } from "@/src/components/ui/input";
// import { prisma } from "@/src/lib/prisma";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {

  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Bills Manager</CardTitle>
          <Link href='/admin/auth/register'>
            <Button>S'inscrire</Button>
          </Link>
          <Link href='/admin/auth/login'>
            <Button>Se connecter</Button>
          </Link>
        </CardHeader>
        <CardContent>
          Bills manager
        </CardContent>
      </Card>
    </div>
  );
}


// import { Button } from "@/src/components/ui/button";
// import Link from "next/link";

// export default function Home() {
//   return (
//     <main className="flex min-h-screen items-center justify-center gap-4">
//       <Link href='/admin/auth/register'>
//         <Button>S'inscrire</Button>
//       </Link>
//       <Link href='/admin/auth/login'>
//         <Button>Se connecter</Button>
//       </Link>
//     </main>
//   );
// }