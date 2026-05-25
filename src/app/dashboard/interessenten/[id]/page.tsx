import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import Link from "next/link";

interface InteressentDetailProps {
  params: {
    id: string;
  };
}

export default async function InteressentDetailPage({
  params,
}: InteressentDetailProps) {
  const interessent = await prisma.interessent.findUnique({
    where: { id: params.id },
    include: {
      anfrage: { include: { branche: true } },
      antworten: {
        include: { frage: true },
        orderBy: { createdAt: "asc" },
      },
    },
  });

  if (!interessent) {
    notFound();
  }

  return (
    <div>
      <div className="mb-8">
        <Link
          href="/dashboard/interessenten"
          className="text-blue-600 hover:text-blue-700 mb-4 inline-block"
        >
          ← Zurück zur Liste
        </Link>

        <div className="flex justify-between items-start mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              {interessent.firmenname}
            </h1>
            <p className="text-gray-600 text-sm mt-1">
              {interessent.ansprechpartner} • {interessent.email}
            </p>
          </div>
          <div className="text-right">
            <span
              className={`px-3 py-1 rounded-full text-xs font-semibold ${
                interessent.status === "neu"
                  ? "bg-blue-100 text-blue-800"
                  : interessent.status === "freigegeben"
                  ? "bg-green-100 text-green-800"
                  : "bg-gray-100 text-gray-800"
              }`}
            >
              {interessent.status}
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Formular-Antworten */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">
              Formular-Antworten
            </h2>

            {interessent.antworten.length === 0 ? (
              <p className="text-gray-600">Keine Antworten vorhanden</p>
            ) : (
              <div className="space-y-6">
                {interessent.antworten.map((antwort, index) => (
                  <div key={antwort.id} className="border-b border-gray-200 pb-6 last:border-b-0">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-medium text-gray-900">
                        {index + 1}. {antwort.frage.text}
                      </h3>
                      {antwort.koVerletzt && (
                        <span className="px-2 py-1 bg-red-100 text-red-800 text-xs font-semibold rounded">
                          K.O. VERLETZT
                        </span>
                      )}
                    </div>
                    <div className="bg-gray-50 p-3 rounded text-gray-900">
                      {antwort.wert}
                    </div>
                    <p className="text-xs text-gray-500 mt-2">
                      Typ: {antwort.frage.typ}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Match-Bewertung */}
          {interessent.matchScore !== null && (
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">
                KI-Match-Bewertung
              </h2>

              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-600">
                    Match Score
                  </span>
                  <span
                    className={`text-3xl font-bold ${
                      interessent.matchScore >= 80
                        ? "text-green-600"
                        : interessent.matchScore >= 50
                        ? "text-yellow-600"
                        : "text-red-600"
                    }`}
                  >
                    {interessent.matchScore}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full ${
                      interessent.matchScore >= 80
                        ? "bg-green-600"
                        : interessent.matchScore >= 50
                        ? "bg-yellow-600"
                        : "bg-red-600"
                    }`}
                    style={{ width: `${interessent.matchScore}%` }}
                  />
                </div>
              </div>

              {interessent.matchBewertung && typeof interessent.matchBewertung === 'object' && (
                <div className="space-y-4">
                  {interessent.matchBewertung && 'begründung' in interessent.matchBewertung && (
                    <div>
                      <h3 className="font-medium text-gray-900 mb-2">
                        Begründung
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {(interessent.matchBewertung as any).begründung}
                      </p>
                    </div>
                  )}

                  {interessent.matchBewertung && 'empfehlung' in interessent.matchBewertung && (
                    <div>
                      <h3 className="font-medium text-gray-900 mb-2">
                        Empfehlung
                      </h3>
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-semibold ${
                          (interessent.matchBewertung as any).empfehlung === "freigeben"
                            ? "bg-green-100 text-green-800"
                            : (interessent.matchBewertung as any).empfehlung === "ablehnen"
                            ? "bg-red-100 text-red-800"
                            : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {(interessent.matchBewertung as any).empfehlung}
                      </span>
                    </div>
                  )}
                </div>
              )}

              <p className="text-xs text-gray-500 mt-4">
                Bewertet am{" "}
                {interessent.kiBewertungDatum
                  ? new Date(interessent.kiBewertungDatum).toLocaleDateString(
                      "de-DE"
                    )
                  : "—"}
              </p>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Anfrage-Info */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="font-bold text-gray-900 mb-4">Anfrage</h3>
            <Link
              href={`/dashboard/anfragen/${interessent.anfrage.id}`}
              className="block text-blue-600 hover:text-blue-700 font-medium"
            >
              {interessent.anfrage.anzeigenId}
              <div className="text-sm text-gray-600 font-normal">
                {interessent.anfrage.firmenname}
              </div>
            </Link>
          </div>

          {/* Kontakt */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="font-bold text-gray-900 mb-4">Kontakt</h3>
            <div className="space-y-3 text-sm">
              <div>
                <label className="text-gray-600">Email</label>
                <p className="text-gray-900 font-medium">{interessent.email}</p>
              </div>
              {interessent.telefon && (
                <div>
                  <label className="text-gray-600">Telefon</label>
                  <p className="text-gray-900 font-medium">
                    {interessent.telefon}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Aktionen */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="font-bold text-gray-900 mb-4">Aktionen</h3>
            <div className="space-y-2">
              {interessent.status === "neu" && (
                <>
                  <button className="w-full px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 font-medium text-sm">
                    ✅ Freigeben
                  </button>
                  <button className="w-full px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 font-medium text-sm">
                    ❌ Ablehnen
                  </button>
                </>
              )}
              <button className="w-full px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 font-medium text-sm">
                📝 Notiz hinzufügen
              </button>
            </div>
          </div>

          {/* Statistiken */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="font-bold text-gray-900 mb-4">Informationen</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Eingegangen</span>
                <span className="text-gray-900 font-medium">
                  {new Date(interessent.createdAt).toLocaleDateString(
                    "de-DE"
                  )}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Status</span>
                <span className="text-gray-900 font-medium capitalize">
                  {interessent.status}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
