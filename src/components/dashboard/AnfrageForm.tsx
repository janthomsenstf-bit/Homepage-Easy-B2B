"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface Branche {
  id: string;
  name: string;
}

interface AnfrageFormProps {
  branchen: Branche[];
}

export default function AnfrageForm({ branchen }: AnfrageFormProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch("/api/anfragen", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firmenname: formData.get("firmenname"),
          brancheId: formData.get("brancheId"),
          richtung: formData.get("richtung"),
          art: formData.get("art"),
          standort: formData.get("standort"),
          beschreibung: formData.get("beschreibung"),
          ziel: formData.get("ziel"),
          persönlicherTouch: formData.get("persönlicherTouch"),
          mustHaves: formData.get("mustHaves"),
          niceToHaves: formData.get("niceToHaves"),
          reifegrad: formData.get("reifegrad"),
          gueltigBis: formData.get("gueltigBis"),
          sichtbarkeit: formData.get("sichtbarkeit"),
          ansprechpartner: formData.get("ansprechpartner"),
          email: formData.get("email"),
          telefon: formData.get("telefon"),
        }),
      });

      if (!response.ok) {
        throw new Error("Fehler beim Erstellen der Anfrage");
      }

      const data = await response.json();
      router.push(`/dashboard/anfragen/${data.id}`);
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Fehler");
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Firmenname */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Firmenname *
          </label>
          <input
            type="text"
            name="firmenname"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="z.B. Müller GmbH"
          />
        </div>

        {/* Branche */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Branche *
          </label>
          <select
            name="brancheId"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">-- Wähle Branche --</option>
            {branchen.map((b) => (
              <option key={b.id} value={b.id}>
                {b.name}
              </option>
            ))}
          </select>
        </div>

        {/* Richtung */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Richtung *
          </label>
          <select
            name="richtung"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">-- Wähle Richtung --</option>
            <option value="de_dk">Deutschland → Dänemark</option>
            <option value="dk_de">Dänemark → Deutschland</option>
          </select>
        </div>

        {/* Art */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Art *
          </label>
          <select
            name="art"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">-- Wähle Art --</option>
            <option value="lieferant">Lieferant</option>
            <option value="kunden">Kunden</option>
            <option value="kooperation">Kooperation</option>
            <option value="vertrieb">Vertrieb</option>
          </select>
        </div>

        {/* Standort */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Standort *
          </label>
          <input
            type="text"
            name="standort"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="z.B. Hamburg"
          />
        </div>

        {/* Reifegrad */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Reifegrad *
          </label>
          <select
            name="reifegrad"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">-- Wähle Reifegrad --</option>
            <option value="idee">Idee</option>
            <option value="konzept">Konzept</option>
            <option value="bereit">Bereit</option>
            <option value="sofort">Sofort</option>
          </select>
        </div>

        {/* Ansprechpartner */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Ansprechpartner *
          </label>
          <input
            type="text"
            name="ansprechpartner"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="z.B. Max Müller"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email *
          </label>
          <input
            type="email"
            name="email"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="max@example.com"
          />
        </div>

        {/* Telefon */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Telefon
          </label>
          <input
            type="tel"
            name="telefon"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="040 123456"
          />
        </div>

        {/* Gültig bis */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Gültig bis *
          </label>
          <input
            type="date"
            name="gueltigBis"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Sichtbarkeit */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Sichtbarkeit *
          </label>
          <select
            name="sichtbarkeit"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">-- Wähle Sichtbarkeit --</option>
            <option value="intern">Intern (privat)</option>
            <option value="anonym">Anonym (Homepage)</option>
            <option value="oeffentlich">Öffentlich (mit Name)</option>
          </select>
        </div>
      </div>

      {/* Beschreibung */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Beschreibung *
        </label>
        <textarea
          name="beschreibung"
          required
          rows={4}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Was wird gesucht?"
        />
      </div>

      {/* Ziel */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Ziel *
        </label>
        <textarea
          name="ziel"
          required
          rows={3}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Was soll entstehen?"
        />
      </div>

      {/* Persönlicher Touch */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Persönlicher Touch *
        </label>
        <textarea
          name="persönlicherTouch"
          required
          rows={3}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Was macht euer Unternehmen besonders?"
        />
      </div>

      {/* Must-Haves */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Must-Haves
        </label>
        <textarea
          name="mustHaves"
          rows={2}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="z.B. Mindestanzahl Mitarbeiter, Zertifizierungen..."
        />
      </div>

      {/* Nice-to-Haves */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Nice-to-Haves
        </label>
        <textarea
          name="niceToHaves"
          rows={2}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="z.B. Zusätzliche Services, Erfahrungen..."
        />
      </div>

      {/* Buttons */}
      <div className="flex gap-4 pt-6 border-t border-gray-200">
        <button
          type="submit"
          disabled={loading}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400 font-medium"
        >
          {loading ? "Wird erstellt..." : "Anfrage erstellen"}
        </button>
        <button
          type="button"
          onClick={() => window.history.back()}
          className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 font-medium"
        >
          Abbrechen
        </button>
      </div>
    </form>
  );
}
