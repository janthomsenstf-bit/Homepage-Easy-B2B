import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import Link from "next/link";

interface AnfrageDetailProps {
  params: {
    id: string;
  };
}

export default async function AnfrageDetailPage({ params }: AnfrageDetailProps) {
  const anfrage = await prisma.anfrage.findUnique({
    where: { id: params.id },
    include: {
      branche: true,
      interessenten: {
        include: {
          antworten: {
            include: { frage: true },
          },
        },
      },
      frageFormular: {
        include: { fragen: true },
      },
    },
  });

  if (!anfrage) {
    notFound();
  }

  return (
    <div>
      <div className="mb-8">
        <Link
          href="/dashboard/anfragen"
          className="text-blue-600 hover:text-blue-700 mb-4 inline-block"
        >
          ← Zurück zur Liste
        </Link>

        <div className="flex justify-between items-start mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              {anfrage.firmenname}
            </h1>
            <p className="text-gray-600 text-sm mt-1">
              {anfrage.anzeigenId} • {anfrage.branche.name}
            </p>
          </div>
          <div className="text-right">
            <span
              className={`px-3 py-1 rounded-full text-xs font-semibold ${
                anfrage.status === "aktiv"
                  ? "bg-green-100 text-green-800"
                  : anfrage.status === "eingehend"
                  ? "bg-yellow-100 text-yellow-800"
                  : "bg-gray-100 text-gray-800"
              }`}
            >
              {anfrage.status}
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Grundinfos */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Grundinformationen
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-gray-600">
                  Richtung
                </label>
                <p className="text-gray-900 mt-1">
                  {anfrage.richtung === "de_dk"
                    ? "Deutschland → Dänemark"
                    : "Dänemark → Deutschland"}
                </p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-600">Art</label>
                <p className="text-gray-900 mt-1 capitalize">{anfrage.art}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-600">
                  Standort
                </label>
                <p className="text-gray-900 mt-1">{anfrage.standort}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-600">
                  Reifegrad
                </label>
                <p className="text-gray-900 mt-1 capitalize">{anfrage.reifegrad}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-600">
                  Gültig bis
                </label>
                <p className="text-gray-900 mt-1">
                  {new Date(anfrage.gueltigBis).toLocaleDateString("de-DE")}
                </p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-600">
                  Sichtbarkeit
                </label>
                <p className="text-gray-900 mt-1 capitalize">
                  {anfrage.sichtbarkeit}
                </p>
              </div>
            </div>
          </div>

          {/* Beschreibungen */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Details</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-medium text-gray-900 mb-2">
                  Was wird gesucht?
                </h3>
                <p className="text-gray-600 whitespace-pre-wrap">
                  {anfrage.beschreibung}
                </p>
              </div>
              <div>
                <h3 className="font-medium text-gray-900 mb-2">
                  Was soll entstehen?
                </h3>
                <p className="text-gray-600 whitespace-pre-wrap">
                  {anfrage.ziel}
                </p>
              </div>
              <div>
                <h3 className="font-medium text-gray-900 mb-2">
                  Persönlicher Touch
                </h3>
                <p className="text-gray-600 whitespace-pre-wrap">
                  {anfrage.persönlicherTouch}
                </p>
              </div>
              {anfrage.mustHaves && (
                <div>
                  <h3 className="font-medium text-gray-900 mb-2">Must-Haves</h3>
                  <p className="text-gray-600 whitespace-pre-wrap">
                    {anfrage.mustHaves}
                  </p>
                </div>
              )}
              {anfrage.niceToHaves && (
                <div>
                  <h3 className="font-medium text-gray-900 mb-2">
                    Nice-to-Haves
                  </h3>
                  <p className="text-gray-600 whitespace-pre-wrap">
                    {anfrage.niceToHaves}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Interessenten */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Interessenten ({anfrage.interessenten.length})
            </h2>
            {anfrage.interessenten.length === 0 ? (
              <p className="text-gray-600">
                Noch keine Interessenten für diese Anfrage.
              </p>
            ) : (
              <div className="space-y-4">
                {anfrage.interessenten.map((interessent) => (
                  <div
                    key={interessent.id}
                    className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-medium text-gray-900">
                          {interessent.firmenname}
                        </p>
                        <p className="text-sm text-gray-600">
                          {interessent.ansprechpartner} •{" "}
                          {interessent.email}
                        </p>
                      </div>
                      <div className="text-right">
                        {interessent.matchScore !== null && (
                          <div
                            className={`text-2xl font-bold ${
                              interessent.matchScore >= 80
                                ? "text-green-600"
                                : interessent.matchScore >= 50
                                ? "text-yellow-600"
                                : "text-red-600"
                            }`}
                          >
                            {interessent.matchScore}%
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Kontakt */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="font-bold text-gray-900 mb-4">Kontakt</h3>
            <div className="space-y-3 text-sm">
              <div>
                <label className="text-gray-600">Ansprechpartner</label>
                <p className="text-gray-900 font-medium">
                  {anfrage.ansprechpartner}
                </p>
              </div>
              <div>
                <label className="text-gray-600">Email</label>
                <p className="text-gray-900 font-medium">{anfrage.email}</p>
              </div>
              {anfrage.telefon && (
                <div>
                  <label className="text-gray-600">Telefon</label>
                  <p className="text-gray-900 font-medium">{anfrage.telefon}</p>
                </div>
              )}
            </div>
          </div>

          {/* Aktionen */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="font-bold text-gray-900 mb-4">Aktionen</h3>
            <div className="space-y-2">
              {anfrage.status === "eingehend" && (
                <button className="w-full px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 font-medium text-sm">
                  ✅ Aktivieren
                </button>
              )}
              <button className="w-full px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 font-medium text-sm">
                ✏️ Bearbeiten
              </button>
              <button className="w-full px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 font-medium text-sm">
                📋 Formular anzeigen
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="font-bold text-gray-900 mb-4">Statistiken</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Erstellt</span>
                <span className="text-gray-900 font-medium">
                  {new Date(anfrage.createdAt).toLocaleDateString("de-DE")}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Interessenten</span>
                <span className="text-gray-900 font-medium">
                  {anfrage.interessenten.length}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Formular</span>
                <span className="text-gray-900 font-medium">
                  {anfrage.frageFormular ? "✅ Aktiv" : "❌ Nicht erstellt"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
