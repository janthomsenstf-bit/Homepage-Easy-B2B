// Serverseitige Session-Helfer. Immer diese benutzen statt getServerSession
// direkt — so bleibt die Rollenprüfung an einer Stelle.

import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export type SessionUser = {
  id: string;
  email: string;
  firmenname: string;
  rolle: "unternehmen" | "operator";
};

/** Aktuell angemeldeter Benutzer oder null. */
export async function aktuellerBenutzer(): Promise<SessionUser | null> {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) return null;
  return {
    id: session.user.id,
    email: session.user.email ?? "",
    firmenname: session.user.firmenname ?? "",
    rolle: session.user.rolle ?? "unternehmen",
  };
}

/** Benutzer oder Fehler — für API-Routen. */
export async function benutzerOderNull() {
  return aktuellerBenutzer();
}

/** Prüft, ob der Benutzer Operator ist. */
export async function istOperator(): Promise<boolean> {
  const user = await aktuellerBenutzer();
  return user?.rolle === "operator";
}
