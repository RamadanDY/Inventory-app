import { drizzle } from 'drizzle-orm/node-postgres';
// we use pool to create a connection to the database. It is used to manage database connections efficiently when interacting with a PostgreSQL database.
// Instead of opening and closing a new connection to the PostgreSQL database each time you execute a query, the pool keeps a set of connections open and ready to be used. 
// This reduces the overhead of constantly creating and destroying connections, which can be resource-intensive and slow.
import { Pool } from 'pg';
 


const pool = new Pool({
     connectionString:  process.env.XATA_DATABASE_URL,
     max: 20 
    });
export const db = drizzle(pool);
