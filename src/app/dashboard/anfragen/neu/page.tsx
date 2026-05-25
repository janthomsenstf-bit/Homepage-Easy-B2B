import { prisma } from "@/lib/prisma";
import AnfrageForm from "@/components/dashboard/AnfrageForm";

export default async function NeueAnfragePage() {
  const branchen = await prisma.branche.findMany({
    orderBy: { name: "asc" },
  });

  return (
    <div className="max-w-4xl">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Neue Anfrage erstellen</h1>

      <div className="bg-white rounded-lg shadow p-8">
        <AnfrageForm branchen={branchen} />
      </div>
    </div>
  );
}
