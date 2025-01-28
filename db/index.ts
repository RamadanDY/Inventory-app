import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import { Invoices } from '@/db/schema';


const pool = new Pool({
     connectionString:  process.env.XATA_DATABASE_URL,
     max: 20 
    });

    // This part of the code is configuring the Drizzle ORM to understand the structure of your Invoices table (or model) by linking it to the schema that defines it. Here’s how it works:
    // Drizzle ORM and Schema:

    //Drizzle ORM uses schemas to map your database tables to JavaScript objects, allowing you to interact with the database using JavaScript (or TypeScript).
    //When you set the schema property in the drizzle configuration, you're telling Drizzle how your database tables are structured. This way, it knows how to map your database's structure to JavaScript objects and vice versa.
    //Invoices as a Schema Object:

    //Invoices is presumably a model or schema object that is imported from @/db/schema.
    //This Invoices schema defines the structure of the invoices table in your PostgreSQL database. It could include column names, types, constraints, and any relationships with other tables.
    //Drizzle ORM uses this schema to know what properties and types it can expect for each invoice record when interacting with the database.
 export const db = drizzle(pool, {
    schema: {
        Invoices
    }
});
