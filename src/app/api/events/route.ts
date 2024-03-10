import { Events } from '@prisma/client';
import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

interface Event {
    day: string;
    time: string;
    eventName: string;
    venue: string;
}

// Define your event schedule  
const events1 = [
    { day: 'Monday', time: '9:00 - 10:00', eventName: 'Event 1', venue: 'Online', level: 'Beginner' },
    // More events...
];


export async function GET(request: Request) {
    let events;
    try {
        const { rows } = await sql`SELECT * FROM "Events";`;
        events = rows as Event[];
        console.log(rows);
    } catch (error) {
        //console.error('error', error);
        return NextResponse.json({ error });
    }

    return NextResponse.json(events);
} 