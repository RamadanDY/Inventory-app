import { sql } from "drizzle-orm";
import { db } from "@/db";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default async function Home() {
  const results = await db.execute(sql`SELECT current_database()`);
  return (
    <main className="flex flex-col h-screen gap-6 max-w-5xl mx-auto my-12">
      <div className="flex justify-between">
        <h1 className="text-3xl font-semibold">Create Invoices</h1>
      </div>
      {JSON.stringify(results)}

      <form className="grid gap-4 max-w-xs ">
        <div className="label">
          <Label htmlFor="name" className="block font-semibold text-sm mb-2">
            Billing Name
          </Label>
          <Input type="text" name="name" id="name" />
        </div>{" "}
        <div className="label">
          <Label htmlFor="email" className="block font-semibold text-sm mb-2">
            Billing Email
          </Label>
          <Input type="text" name="email" id="email" />
        </div>{" "}
        <div className="label">
          <Label htmlFor="value" className="block font-semibold text-sm mb-2">
            Value
          </Label>
          <Input type="text" name="value" id="value" />
        </div>
        <div className="label">
          <Label
            htmlFor="description"
            className="block font-semibold text-sm mb-2"
          >
            description
          </Label>
          <Textarea name="description" id="description"></Textarea>
        </div>
        <div className="btn">
          <Button className="w-full font-semibold">Submit</Button>
        </div>
      </form>
    </main>
  );
}
