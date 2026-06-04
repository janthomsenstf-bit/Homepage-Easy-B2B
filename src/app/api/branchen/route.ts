import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const branchen = await prisma.branche.findMany({
      orderBy: { name: 'asc' },
      select: { id: true, name: true, slug: true },
    });
    return NextResponse.json(branchen);
  } catch (error) {
    console.error('Branchen API Fehler:', error);
    return NextResponse.json({ error: 'Fehler beim Laden der Branchen' }, { status: 500 });
  }
}
