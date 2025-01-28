import { sql } from "drizzle-orm";
// we import sql from drizzle-orm to write raw sql queries
import { db } from "@/db";
// we import db from db/index.ts to interact with the database
//also note that the @db is an alias for the path to the db folder
// the @ means any folder with the name db in the root of the project
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
// step 2 is to make the function a default export and an async function so that wait for the results of the query to be returned before rendering the page
export default async function Home() {
  //step 3 our raw sql query
  const results = await db.execute(sql`SELECT current_database()`);
  // we log it to the terminal to see the results
  console.log("RESULTS", results);
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
            Description
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
