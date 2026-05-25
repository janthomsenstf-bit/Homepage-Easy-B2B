import { prisma } from "@/lib/prisma";
import Link from "next/link";

export default async function AnfragenPage() {
  const anfragen = await prisma.anfrage.findMany({
    include: { branche: true },
    orderBy: { createdAt: "desc" },
  });

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Anfragen</h1>
        <Link
          href="/dashboard/anfragen/neu"
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium"
        >
          + Neue Anfrage
        </Link>
      </div>

      {anfragen.length === 0 ? (
        <div className="bg-white rounded-lg shadow p-8 text-center">
          <p className="text-gray-600 mb-4">Noch keine Anfragen vorhanden</p>
          <Link
            href="/dashboard/anfragen/neu"
            className="text-blue-600 hover:text-blue-700 font-medium"
          >
            Erste Anfrage erstellen →
          </Link>
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                  ID
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                  Firma
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                  Branche
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                  Erstellt
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                  Aktionen
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {anfragen.map((anfrage) => (
                <tr key={anfrage.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-mono text-blue-600">
                    {anfrage.anzeigenId}
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">
                    {anfrage.firmenname}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {anfrage.branche.name}
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        anfrage.status === "aktiv"
                          ? "bg-green-100 text-green-800"
                          : anfrage.status === "eingehend"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {anfrage.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {new Date(anfrage.createdAt).toLocaleDateString("de-DE")}
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <Link
                      href={`/dashboard/anfragen/${anfrage.id}`}
                      className="text-blue-600 hover:text-blue-700 font-medium"
                    >
                      Bearbeiten →
                    </Link>
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
