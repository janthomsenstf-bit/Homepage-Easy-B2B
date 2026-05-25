import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-8">
        Willkommen, {session?.user?.name}! 👋
      </h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="text-sm font-medium text-gray-600">Aktive Anfragen</div>
          <div className="text-3xl font-bold text-blue-600 mt-2">0</div>
          <p className="text-xs text-gray-500 mt-2">Noch keine Daten</p>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="text-sm font-medium text-gray-600">Review nötig</div>
          <div className="text-3xl font-bold text-yellow-600 mt-2">0</div>
          <p className="text-xs text-gray-500 mt-2">Noch keine Daten</p>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="text-sm font-medium text-gray-600">Neue Interessenten</div>
          <div className="text-3xl font-bold text-green-600 mt-2">0</div>
          <p className="text-xs text-gray-500 mt-2">Noch keine Daten</p>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="text-sm font-medium text-gray-600">Stalled</div>
          <div className="text-3xl font-bold text-red-600 mt-2">0</div>
          <p className="text-xs text-gray-500 mt-2">Noch keine Daten</p>
        </div>
      </div>

      {/* Inbox Section */}
      <div className="bg-white rounded-lg shadow p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">📥 Inbox</h2>
        <p className="text-gray-600">
          Noch keine Aktivitäten. Sobald Anfragen erstellt oder Interessenten anmelden, erscheinen sie hier.
        </p>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">⚡ Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <a
            href="/dashboard/anfragen/neu"
            className="block p-4 border border-blue-300 rounded-lg hover:bg-blue-50 text-blue-600 font-medium text-center"
          >
            + Neue Anfrage
          </a>
          <button
            disabled
            className="block p-4 border border-gray-300 rounded-lg bg-gray-50 text-gray-400 font-medium text-center cursor-not-allowed"
          >
            🔍 Match prüfen
          </button>
          <button
            disabled
            className="block p-4 border border-gray-300 rounded-lg bg-gray-50 text-gray-400 font-medium text-center cursor-not-allowed"
          >
            📊 Analytics
          </button>
        </div>
      </div>
    </div>
  );
}
