import { prisma } from "@/lib/prisma";

export default async function AnalyticsPage() {
  // Statistiken aus der Datenbank abrufen
  const [
    anfragenGesamt,
    anfragenAktiv,
    anfragenEingehend,
    interessentenGesamt,
    interessentenNeu,
    interessentenFreigegeben,
  ] = await Promise.all([
    prisma.anfrage.count(),
    prisma.anfrage.count({ where: { status: "aktiv" } }),
    prisma.anfrage.count({ where: { status: "eingehend" } }),
    prisma.interessent.count(),
    prisma.interessent.count({ where: { status: "neu" } }),
    prisma.interessent.count({ where: { status: "freigegeben" } }),
  ]);

  // Anfragen pro Status - einfach zählen
  const anfragenProStatus = [
    { status: "eingehend" as const, count: anfragenEingehend },
    { status: "aktiv" as const, count: anfragenAktiv },
  ];

  // Interessenten pro Status - einfach zählen
  const interessentenProStatus = [
    { status: "neu" as const, count: interessentenNeu },
    { status: "freigegeben" as const, count: interessentenFreigegeben },
  ];

  // Top Branchen - alle Anfragen abrufen und nach Branche zählen
  const alleAnfragen = await prisma.anfrage.findMany({
    select: { brancheId: true },
  });

  const brancheCounts = new Map<string, number>();
  alleAnfragen.forEach((a) => {
    brancheCounts.set(a.brancheId, (brancheCounts.get(a.brancheId) || 0) + 1);
  });

  const topBranchen = Array.from(brancheCounts.entries())
    .map(([brancheId, count]) => ({ brancheId, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 5);

  // Branchen Namen abrufen
  const branchenMap = await prisma.branche.findMany({
    where: {
      id: { in: topBranchen.map((b) => b.brancheId) },
    },
  });

  const branchenById = new Map(branchenMap.map((b) => [b.id, b.name]));

  // Durchschnittlicher Match-Score
  const matchScores = await prisma.interessent.findMany({
    where: { matchScore: { not: null } },
    select: { matchScore: true },
  });

  const avgMatchScore =
    matchScores.length > 0
      ? Math.round(
          matchScores.reduce((sum, i) => sum + (i.matchScore || 0), 0) /
            matchScores.length
        )
      : 0;

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Analytics</h1>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="text-sm font-medium text-gray-600">Anfragen</div>
          <div className="text-3xl font-bold text-blue-600 mt-2">
            {anfragenGesamt}
          </div>
          <p className="text-xs text-gray-500 mt-2">
            {anfragenAktiv} aktiv • {anfragenEingehend} neu
          </p>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="text-sm font-medium text-gray-600">Interessenten</div>
          <div className="text-3xl font-bold text-green-600 mt-2">
            {interessentenGesamt}
          </div>
          <p className="text-xs text-gray-500 mt-2">
            {interessentenNeu} neu • {interessentenFreigegeben} freigegeben
          </p>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="text-sm font-medium text-gray-600">Ø Match-Score</div>
          <div className="text-3xl font-bold text-purple-600 mt-2">
            {avgMatchScore}%
          </div>
          <p className="text-xs text-gray-500 mt-2">
            von {matchScores.length} bewerteten
          </p>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="text-sm font-medium text-gray-600">Erfolgsquote</div>
          <div className="text-3xl font-bold text-orange-600 mt-2">
            {interessentenGesamt > 0
              ? Math.round(
                  (interessentenFreigegeben / interessentenGesamt) * 100
                )
              : 0}
            %
          </div>
          <p className="text-xs text-gray-500 mt-2">Freigegeben von Gesamt</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Anfragen pro Status */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">
            Anfragen nach Status
          </h2>
          <div className="space-y-4">
            {anfragenProStatus.map((status) => (
              <div key={status.status}>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-700 capitalize">
                    {status.status}
                  </span>
                  <span className="text-lg font-bold text-gray-900">
                    {status.count}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="h-2 rounded-full bg-blue-600"
                    style={{
                      width: `${(status.count / anfragenGesamt) * 100 || 0}%`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Interessenten pro Status */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">
            Interessenten nach Status
          </h2>
          <div className="space-y-4">
            {interessentenProStatus.map((status) => (
              <div key={status.status}>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-700 capitalize">
                    {status.status}
                  </span>
                  <span className="text-lg font-bold text-gray-900">
                    {status.count}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="h-2 rounded-full bg-green-600"
                    style={{
                      width: `${
                        (status.count / interessentenGesamt) * 100 || 0
                      }%`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Branchen */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">
            Top Branchen
          </h2>
          <div className="space-y-4">
            {topBranchen.map((item, index) => (
              <div
                key={item.brancheId}
                className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                  <span className="font-medium text-gray-900">
                    {branchenById.get(item.brancheId) || "Unknown"}
                  </span>
                </div>
                <span className="text-lg font-bold text-gray-900">
                  {item.count}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Match-Score Verteilung */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">
            Match-Score Verteilung
          </h2>
          <div className="space-y-4">
            {[
              {
                label: "Sehr gut (80-100%)",
                min: 80,
                color: "bg-green-600",
              },
              {
                label: "Gut (50-79%)",
                min: 50,
                color: "bg-yellow-600",
              },
              {
                label: "Schwach (<50%)",
                min: 0,
                color: "bg-red-600",
              },
            ].map((range) => {
              const count =
                range.min === 80
                  ? matchScores.filter((s) => (s.matchScore || 0) >= 80).length
                  : range.min === 50
                  ? matchScores.filter(
                      (s) =>
                        (s.matchScore || 0) >= 50 && (s.matchScore || 0) < 80
                    ).length
                  : matchScores.filter((s) => (s.matchScore || 0) < 50).length;

              return (
                <div key={range.label}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-700">
                      {range.label}
                    </span>
                    <span className="text-lg font-bold text-gray-900">
                      {count}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${range.color}`}
                      style={{
                        width: `${
                          matchScores.length > 0
                            ? (count / matchScores.length) * 100
                            : 0
                        }%`,
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
