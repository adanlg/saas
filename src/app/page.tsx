import { Button } from "@/components/ui/button";
import Image from "next/image";
import { UserButton } from "@clerk/nextjs";
export default async function Home() {
  return (
    <div className="w-screen min-h-screen bg-gradient-to-tl from-yellow-200 via-green-200 to-green-300">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"> Hola
    <div className="flex flex-col items-center text-center">
      <div className="flex items-center">
    <h1 className="mr-3 text-5x1 font-semibold ">Chat with any PDF</h1>
      <UserButton afterSwitchSessionUrl="/" />

    </div>
    </div>
    </div>
    </div>
  )
  
}