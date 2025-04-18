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
          <Link href={"/register"} className="flex items-center gap-4 px-8 shadowBlue border-2 border-blue-400 mx-auto duration-200 w-fit shadowBlue py-3 rounded-lg">
            Discover the app !
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}