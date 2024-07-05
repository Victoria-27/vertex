import { NextRequest, NextResponse } from 'next/server';
import { writeFile, readFile } from 'fs/promises';
import { join } from 'path';
import { DB } from '@/app/types';

export const runtime = 'nodejs';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    console.log('Received data:', body);

    const dbPath = join(process.cwd(), 'db.json');

    let db: DB = { students: [] };
    try {
      const fileContent = await readFile(dbPath, 'utf-8');
      db = JSON.parse(fileContent) as DB;
    } catch (readError) {
      console.log('Error reading db.json, initializing with empty students array');
    }

    db.students.push(body);

    await writeFile(dbPath, JSON.stringify(db, null, 2), 'utf-8');

    return NextResponse.json({ message: 'Student data saved successfully', data: body }, { status: 201 });
  } catch (error) {
    console.error('Error in POST request:', error);
    return NextResponse.json({ error: 'Failed to process student data' }, { status: 500 });
  }
}