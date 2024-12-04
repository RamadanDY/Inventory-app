// import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center h-screen text-center gap-6 max-w-5xl mx-auto">
      <div>
        <h1 className="text-5xl font-bold">Invoicipedia</h1>
      </div>
      <div>
        <p>
          <Button asChild>
            <Link href="/dashboard">Sign In</Link>
          </Button>
        </p>
      </div>
    </main>
  );
}
