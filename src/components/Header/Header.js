import { auth } from "../../../auth";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "../ui/button";
import Link from "next/link";

export default async function Header() {
  const session = await auth();
  console.log("session=>", session);
  return (
    <div className="bg-primary">
      <div className="container py-3 mx-auto flex justify-between items-center">
        <h1 className="font-mono text-2xl text-primary-foreground">LOGO</h1>
        {session ? (
          <Avatar>
            <AvatarImage src={session.user.image} alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        ) : (
          <Link href={"/signin"}>
            <Button variant={"outline"}>Login</Button>
          </Link>
        )}
      </div>
    </div>
  );
}
