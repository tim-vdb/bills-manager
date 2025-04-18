import { Prisma } from "@/generated/prisma";
import { Button, buttonVariants } from "@/src/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/src/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {

  return (
    <div className="flex items-center w-full h-screen overflow-hidden">
      <Card className="mx-auto w-2/3">
        <CardHeader>
          <CardTitle>
            <h1 className="text-5xl text-center">Bills Manager</h1>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <h2 className="text-center">Don't Waste your time !</h2>
          <Link href={"/register"}>
            Discover the app !
          </Link>
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