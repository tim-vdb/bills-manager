// import { Prisma } from "@/generated/prisma";
// import { Button, buttonVariants } from "@/src/components/ui/button";
// import { Card } from "@/src/components/ui/card";
// import { Input } from "@/src/components/ui/input";
// // import { prisma } from "@/src/lib/prisma";
// import Image from "next/image";
// import Link from "next/link";

// export default async function Home() {
//   const users = await Prisma.user.findMany({
//     orderBy: {
//       date_inscription: "desc"
//     }
//   })

//   return (
//     <div>
//       <Card>
//         <Button>Bonjour !</Button>
//         {users.map(user => (
//           <Card key={user.id}>
//             <Link href={`/user/${user.id}`} >{user.name}</Link>
//             <Link href={`/user/${user.id}`} className={buttonVariants({ size: "sm", variant: "outline" })}>
//               ✏️
//             </Link>
//           </Card>
//         ))}
//         <Link href={"/signup"} >Sign up</Link>
//       </Card>
//     </div>
//   );
// }


import { Button } from "@/src/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center gap-4">
      <Link href='/admin/auth/register'>
        <Button>S'inscrire</Button>
      </Link>
      <Link href='/admin/auth/login'>
        <Button>Se connecter</Button>
      </Link>
    </main>
  );
}