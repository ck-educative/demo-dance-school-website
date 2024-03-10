import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";
import { v4 as uuidv4 } from 'uuid';

export async function GET(request: Request) {
    let events;
    try {
        const { rows } = await sql`SELECT "Registration.email" FROM "Registration";`;
        events = rows as Event[];
        console.log(rows);
    } catch (error) {
        // console.error('error', error);
        return NextResponse.json({ error });
    }

    return NextResponse.json(events);
}

export async function POST(request: Request) {
    let events;
    try {
        const body = await request.json();
        const { name, email, phone, timing, medium } = body;
        const uuid = uuidv4(); // Declare the 'uuid' variable before using it
        console.log('email', name);
        const { rows } = await sql`
            INSERT INTO "Registration" ("id","name", "email", "phone", "timing", "medium")
            VALUES (${uuid},${name}, ${email}, ${phone}, ${timing}, ${medium})
            RETURNING *;
        `;
        events = rows;
        console.log(rows);
    } catch (error) {
        console.log(error);
        return NextResponse.json('error');
    }

    return NextResponse.json('OK');
} 