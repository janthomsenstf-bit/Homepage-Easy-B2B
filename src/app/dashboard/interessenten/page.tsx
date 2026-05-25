import { prisma } from "@/lib/prisma";
import Link from "next/link";

export default async function InteresstentenPage() {
  const interessenten = await prisma.interessent.findMany({
    include: {
      anfrage: true,
    },
    orderBy: { createdAt: "desc" },
  });

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Interessenten</h1>
        <p className="text-gray-600 mt-2">
          Alle Personen, die sich für eine Anfrage angemeldet haben
        </p>
      </div>

      {interessenten.length === 0 ? (
        <div className="bg-white rounded-lg shadow p-8 text-center">
          <p className="text-gray-600 mb-4">Noch keine Interessenten</p>
          <p className="text-sm text-gray-500">
            Interessenten erscheinen hier, wenn sie sich über die Homepage für
            eine Anfrage anmelden.
          </p>
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                  Firma
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                  Kontakt
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                  Anfrage
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                  Match
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                  Eingegangen
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {interessenten.map((interessent) => (
                <tr key={interessent.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">
                    {interessent.firmenname}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    <div>{interessent.ansprechpartner}</div>
                    <div className="text-xs text-gray-500">
                      {interessent.email}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    <Link
                      href={`/dashboard/anfragen/${interessent.anfrageId}`}
                      className="text-blue-600 hover:text-blue-700 font-medium"
                    >
                      {interessent.anfrage.anzeigenId}
                    </Link>
                  </td>
                  <td className="px-6 py-4 text-sm">
                    {interessent.matchScore !== null ? (
                      <div
                        className={`font-bold ${
                          interessent.matchScore >= 80
                            ? "text-green-600"
                            : interessent.matchScore >= 50
                            ? "text-yellow-600"
                            : "text-red-600"
                        }`}
                      >
                        {interessent.matchScore}%
                      </div>
                    ) : (
                      <span className="text-gray-500">—</span>
                    )}
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        interessent.status === "neu"
                          ? "bg-blue-100 text-blue-800"
                          : interessent.status === "freigegeben"
                          ? "bg-green-100 text-green-800"
                          : interessent.status === "kontakt_laeuft"
                          ? "bg-yellow-100 text-yellow-800"
                          : interessent.status === "erfolgreich"
                          ? "bg-green-100 text-green-800"
                          : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {interessent.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {new Date(interessent.createdAt).toLocaleDateString(
                      "de-DE"
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
