import { Class } from '@/components/Timetable';
import { sql } from "@vercel/postgres";
import { NextResponse } from 'next/server';

// let classes: Class[] = [
//     { day: 'Monday', time: '9:00 - 10:00', subject: 'Bharatanatyam', type: 'Online', level: 'Beginner' },
//     { day: 'Wednesday', time: '9:00 - 10:00', subject: 'Bharatanatyam', type: 'In-person', level: 'Beginner' },
//     { day: 'Friday', time: '9:00 - 10:00', subject: 'Bharatanatyam', type: 'Online', level: 'Beginner' },
//     { day: 'Monday', time: '11:00 - 12:00', subject: 'Bharatanatyam', type: 'Online', level: 'Intermediate' },
//     { day: 'Wednesday', time: '11:00 - 12:00', subject: 'Bharatanatyam', type: 'In-person', level: 'Intermediate' },
//     { day: 'Friday', time: '11:00 - 12:00', subject: 'Bharatanatyam', type: 'Online', level: 'Intermediate' },
//     { day: 'Monday', time: '1:00 - 2:00', subject: 'Bharatanatyam', type: 'Online', level: 'Advanced' },
//     { day: 'Wednesday', time: '1:00 - 2:00', subject: 'Bharatanatyam', type: 'In-person', level: 'Advanced' },
//     { day: 'Friday', time: '1:00 - 2:00', subject: 'Bharatanatyam', type: 'Online', level: 'Advanced' },
// ];


export async function GET(request: Request) {
    let classes;
    try {
        const { rows } = await sql`SELECT * FROM "Classes"`;
        classes = rows as Class[];
        console.log(rows);
    } catch (error) {
        // console.error('error', error);
        return NextResponse.json({ error });
    }

    return NextResponse.json(classes);
} 