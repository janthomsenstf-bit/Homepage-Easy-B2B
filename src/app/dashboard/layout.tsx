import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import Link from "next/link";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg">
        <div className="p-6">
          <h1 className="text-2xl font-bold text-blue-600">Easy-B2B</h1>
          <p className="text-sm text-gray-600 mt-1">Dashboard</p>
        </div>

        <nav className="mt-8 px-4">
          <div className="space-y-2">
            <Link
              href="/dashboard"
              className="block px-4 py-2 rounded-lg hover:bg-blue-50 text-gray-700 hover:text-blue-600 font-medium"
            >
              📊 Übersicht
            </Link>
            <Link
              href="/dashboard/anfragen"
              className="block px-4 py-2 rounded-lg hover:bg-blue-50 text-gray-700 hover:text-blue-600"
            >
              📋 Anfragen
            </Link>
            <Link
              href="/dashboard/interessenten"
              className="block px-4 py-2 rounded-lg hover:bg-blue-50 text-gray-700 hover:text-blue-600"
            >
              👥 Interessenten
            </Link>
            <Link
              href="/dashboard/fragebögen"
              className="block px-4 py-2 rounded-lg hover:bg-blue-50 text-gray-700 hover:text-blue-600"
            >
              📝 Fragebögen
            </Link>
            <Link
              href="/dashboard/branchen"
              className="block px-4 py-2 rounded-lg hover:bg-blue-50 text-gray-700 hover:text-blue-600"
            >
              🏭 Branchen
            </Link>
            <Link
              href="/dashboard/analytics"
              className="block px-4 py-2 rounded-lg hover:bg-blue-50 text-gray-700 hover:text-blue-600"
            >
              📈 Analytics
            </Link>
          </div>
        </nav>

        {/* Logout */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200">
          <form action="/api/auth/signout" method="POST">
            <button
              type="submit"
              className="w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg"
            >
              🚪 Abmelden
            </button>
          </form>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <div className="p-8">
          {children}
        </div>
      </main>
    </div>
  );
}
