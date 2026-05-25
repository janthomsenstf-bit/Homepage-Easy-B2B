import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const branchen = [
      { name: "Logistik", slug: "logistik" },
      { name: "Handel", slug: "handel" },
      { name: "Produktion", slug: "produktion" },
      { name: "IT / Software", slug: "it-software" },
      { name: "Bau", slug: "bau" },
      { name: "Lebensmittel", slug: "lebensmittel" },
      { name: "Maschinenbau", slug: "maschinenbau" },
      { name: "Pharma", slug: "pharma" },
    ];

    for (const branche of branchen) {
      await prisma.branche.upsert({
        where: { slug: branche.slug },
        update: {},
        create: {
          name: branche.name,
          slug: branche.slug,
        },
      });
    }

    return NextResponse.json({
      success: true,
      message: "✅ 8 Branchen erstellt!",
    });
  } catch (error) {
    console.error("Seed Error:", error);
    return NextResponse.json(
      { error: "Fehler beim Seeding" },
      { status: 500 }
    );
  }
}
