import Image from "next/image";
import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return ( <div>  
    <h1>Hello Ji Kese ho??</h1>

 <Button variant="defaultnpm i -D drizzle-kit">Subscribe</Button>
 <UserButton />
  </div> );
}
