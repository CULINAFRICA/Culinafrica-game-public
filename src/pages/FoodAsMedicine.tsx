import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";

type Tag =
  | "Digestion"
  | "Énergie"
  | "Sommeil"
  | "Immunité"
  | "Peau"
  | "Bien-être féminin"
  | "Bien-être général";

type Status = "verified" | "to_review";

type Plant = {
  id: string;
  name: string;
  highlight: string;
  tags: Tag[];
  precautions: string;
  status: Status;
};

type Recipe = {
  id: string;
  name: string;
  goal: Tag;
  time: string;
  tags: Tag[];
  precautions: string;
  status: Status;
};

type Place = {
  id: string;
  name: string;
  type: "Coopérative" | "Marché" | "Transformateur" | "Artisan";
  city: string;
  products: string;
  status: "verified" | "to_review";
};

const TAGS: Tag[] = [
  "Digestion",
  "Énergie",
  "Sommeil",
  "Immunité",
  "Peau",
  "Bien-être féminin",
  "Bien-être général",
];

const statusLabel = (s: Status) => (s === "verified" ? "Vérifié" : "À vérifier");

const badgeClasses = (status: Status) =>
  status === "verified"
    ? "bg-green-100 text-green-700 border-green-200"
    : "bg-amber-100 text-amber-700 border-amber-200";

export default function FoodAsMedicine() {
  const [query, setQuery] = useState("");
  const [activeTag, setActiveTag] = useState<Tag | "Tout">("Tout");

  // Mock data (MVP). Replace later with DB (Supabase/Airtable).
  const plants: Plant[] = [
    {
      id: "gingembre",
      name: "Gingembre",
      highlight: "Traditionnellement utilisé pour le confort digestif et la vitalité.",
      tags: ["Digestion", "Énergie"],
      precautions: "Éviter en excès. Prudence en cas de traitement médical en cours.",
      status: "verified",
    },
    {
      id: "hibiscus",
      name: "Bissap (Hibiscus)",
      highlight: "Boisson traditionnelle appréciée pour l’hydratation et le bien-être général.",
      tags: ["Bien-être général"],
      precautions: "Attention au sucre ajouté. Prudence en cas de tension basse.",
      status: "to_review",
    },
    {
      id: "moringa",
      name: "Moringa",
      highlight: "Plante populaire dans plusieurs régions pour l’apport nutritionnel.",
      tags: ["Immunité", "Énergie"],
      precautions: "Demander conseil en cas de grossesse ou traitement chronique.",
      status: "to_review",
    },
  ];

  const recipes: Recipe[] = [
    {
      id: "bouillon-gingembre",
      name: "Infusion gingembre-citron (version douce)",
      goal: "Digestion",
      time: "10 min",
      tags: ["Digestion", "Bien-être général"],
      precautions: "Adapter selon tolérance. Ne remplace pas un avis médical.",
      status: "verified",
    },
    {
      id: "tisane-bissap",
      name: "Bissap léger (peu sucré)",
      goal: "Bien-être général",
      time: "20 min",
      tags: ["Bien-être général"],
      precautions: "Limiter le sucre. Prudence si tension basse.",
      status: "to_review",
    },
    {
      id: "porridge-moringa",
      name: "Bouillie enrichie (option moringa)",
      goal: "Énergie",
      time: "15 min",
      tags: ["Énergie"],
      precautions: "Vérifier allergies et tolérance.",
      status: "to_review",
    },
  ];

  const places: Place[] = [
    {
      id: "coop-abobo",
      name: "Coopérative (exemple) – Abobo",
      type: "Coopérative",
      city: "Abidjan",
      products: "Poudres, infusions, produits transformés locaux",
      status: "to_review",
    },
    {
      id: "marche-plateau",
      name: "Marché (exemple) – Plateau",
      type: "Marché",
      city: "Abidjan",
      products: "Plantes, épices, ingrédients locaux",
      status: "to_review",
    },
  ];

  const normalizedQuery = query.trim().toLowerCase();

  const filtered = useMemo(() => {
    const matchText = (text: string) =>
      !normalizedQuery || text.toLowerCase().includes(normalizedQuery);

    const matchTag = (tags: Tag[]) =>
      activeTag === "Tout" ? true : tags.includes(activeTag);

    const filteredPlants = plants.filter(
      (p) => matchTag(p.tags) && (matchText(p.name) || matchText(p.highlight))
    );

    const filteredRecipes = recipes.filter(
      (r) => matchTag(r.tags) && (matchText(r.name) || matchText(r.goal))
    );

    const filteredPlaces = places.filter(
      (pl) =>
        (activeTag === "Tout" ? true : false) && // keep places on "Tout" for MVP (or add tags later)
        (matchText(pl.name) || matchText(pl.city) || matchText(pl.products))
    );

    return { filteredPlants, filteredRecipes, filteredPlaces };
  }, [activeTag, normalizedQuery]);

  // Guided assistant output (simple & safe)
  const assistantSuggestions = useMemo(() => {
    if (activeTag === "Tout") return [];
    // Recommend top 1 plant + top 1 recipe for the selected tag if exists
    const p = plants.find((x) => x.tags.includes(activeTag as Tag));
    const r = recipes.find((x) => x.tags.includes(activeTag as Tag));
    const out = [];
    if (p) out.push({ type: "Plante", title: p.name, note: p.precautions });
    if (r) out.push({ type: "Recette", title: r.name, note: r.precautions });
    return out;
  }, [activeTag]);

  return (
    <div className="min-h-screen bg-[#fffaf5]">
      <div className="mx-auto max-w-5xl px-4 py-8">
        {/* Header */}
        <div className="mb-6 rounded-3xl bg-white p-6 shadow-sm">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="text-sm text-gray-500">
                <Link to="/" className="hover:underline">
                  ← Retour à l’accueil
                </Link>
              </div>
              <h1 className="mt-2 text-3xl font-semibold text-gray-900">
                Alimentation & Santé
              </h1>
              <p className="mt-2 text-gray-600">
                Explorer les savoirs alimentaires africains pour le bien-être.
              </p>
            </div>

            <div className="hidden md:block text-right">
              <div className="text-xs text-gray-500">Version MVP</div>
              <div className="text-sm font-medium text-gray-800">
                Supports pédagogiques • Réversible • Évalué
              </div>
            </div>
          </div>

          {/* Search */}
          <div className="mt-5 flex flex-col gap-3">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Rechercher une plante, une recette, un lieu ou un besoin"
              className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-gray-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-black/10"
            />

            {/* Chips */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setActiveTag("Tout")}
                className={`rounded-full border px-3 py-1 text-sm ${
                  activeTag === "Tout"
                    ? "border-gray-900 bg-gray-900 text-white"
                    : "border-gray-200 bg-white text-gray-700 hover:bg-gray-50"
                }`}
              >
                Tout
              </button>
              {TAGS.map((t) => (
                <button
                  key={t}
                  onClick={() => setActiveTag(t)}
                  className={`rounded-full border px-3 py-1 text-sm ${
                    activeTag === t
                      ? "border-gray-900 bg-gray-900 text-white"
                      : "border-gray-200 bg-white text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* 4 Cards */}
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-gray-900">
              Bibliothèque de plantes
            </h2>
            <p className="mt-2 text-gray-600">
              Fiches éducatives sur des plantes et ingrédients traditionnels.
            </p>
            <div className="mt-3 text-sm text-gray-500">
              {plants.length} fiches disponibles
            </div>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-gray-900">
              Recettes bien-être
            </h2>
            <p className="mt-2 text-gray-600">
              Idées de recettes axées sur le bien-être général, avec précautions.
            </p>
            <div className="mt-3 text-sm text-gray-500">
              {recipes.length} recettes disponibles
            </div>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-gray-900">
              Associations & traditions
            </h2>
            <p className="mt-2 text-gray-600">
              Combinaisons alimentaires et logiques culturelles (approche pédagogique).
            </p>
            <div className="mt-3 text-sm text-gray-500">Module MVP</div>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-gray-900">
              Assistant bien-être (guidé)
            </h2>
            <p className="mt-2 text-gray-600">
              Un parcours guidé (non médical) pour explorer des pistes éducatives.
            </p>
            <div className="mt-3 text-sm text-gray-500">
              Sélectionne un objectif ci-dessus
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="mt-6 grid gap-4 lg:grid-cols-3">
          {/* Plants */}
          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <div className="mb-3 flex items-center justify-between">
              <h3 className="text-base font-semibold text-gray-900">Plantes</h3>
              <span className="text-sm text-gray-500">
                {filtered.filteredPlants.length}
              </span>
            </div>
            <div className="space-y-3">
              {filtered.filteredPlants.map((p) => (
                <div
                  key={p.id}
                  className="rounded-2xl border border-gray-100 p-4"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="font-semibold text-gray-900">{p.name}</div>
                      <div className="mt-1 text-sm text-gray-600">
                        {p.highlight}
                      </div>
                      <div className="mt-2 flex flex-wrap gap-1">
                        {p.tags.map((t) => (
                          <span
                            key={t}
                            className="rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-700"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                    <span
                      className={`shrink-0 rounded-full border px-2 py-1 text-xs ${badgeClasses(
                        p.status
                      )}`}
                      title={p.status}
                    >
                      {statusLabel(p.status)}
                    </span>
                  </div>
                  <div className="mt-3 text-xs text-gray-500">
                    <span className="font-medium">Précautions :</span>{" "}
                    {p.precautions}
                  </div>
                </div>
              ))}
              {filtered.filteredPlants.length === 0 && (
                <div className="text-sm text-gray-500">
                  Aucun résultat plante pour ce filtre.
                </div>
              )}
            </div>
          </div>

          {/* Recipes */}
          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <div className="mb-3 flex items-center justify-between">
              <h3 className="text-base font-semibold text-gray-900">Recettes</h3>
              <span className="text-sm text-gray-500">
                {filtered.filteredRecipes.length}
              </span>
            </div>
            <div className="space-y-3">
              {filtered.filteredRecipes.map((r) => (
                <div
                  key={r.id}
                  className="rounded-2xl border border-gray-100 p-4"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="font-semibold text-gray-900">{r.name}</div>
                      <div className="mt-1 text-sm text-gray-600">
                        Objectif : {r.goal} • {r.time}
                      </div>
                      <div className="mt-2 flex flex-wrap gap-1">
                        {r.tags.map((t) => (
                          <span
                            key={t}
                            className="rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-700"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                    <span
                      className={`shrink-0 rounded-full border px-2 py-1 text-xs ${badgeClasses(
                        r.status
                      )}`}
                      title={r.status}
                    >
                      {statusLabel(r.status)}
                    </span>
                  </div>
                  <div className="mt-3 text-xs text-gray-500">
                    <span className="font-medium">Précautions :</span>{" "}
                    {r.precautions}
                  </div>
                </div>
              ))}
              {filtered.filteredRecipes.length === 0 && (
                <div className="text-sm text-gray-500">
                  Aucun résultat recette pour ce filtre.
                </div>
              )}
            </div>
          </div>

          {/* Assistant + Places */}
          <div className="space-y-4">
            <div className="rounded-3xl bg-white p-6 shadow-sm">
              <h3 className="text-base font-semibold text-gray-900">
                Assistant bien-être (guidé)
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                Sélectionne un objectif pour voir des pistes éducatives.
              </p>

              {activeTag === "Tout" ? (
                <div className="mt-3 text-sm text-gray-500">
                  Choisis un objectif (chips) pour activer l’assistant.
                </div>
              ) : (
                <div className="mt-4 space-y-3">
                  {assistantSuggestions.length === 0 ? (
                    <div className="text-sm text-gray-500">
                      Pas encore de suggestions pour cet objectif (MVP). Ajoute
                      des fiches dans le mock data.
                    </div>
                  ) : (
                    assistantSuggestions.map((s, idx) => (
                      <div
                        key={`${s.type}-${idx}`}
                        className="rounded-2xl border border-gray-100 p-4"
                      >
                        <div className="text-xs text-gray-500">{s.type}</div>
                        <div className="font-semibold text-gray-900">
                          {s.title}
                        </div>
                        <div className="mt-2 text-xs text-gray-500">
                          <span className="font-medium">Précautions :</span>{" "}
                          {s.note}
                        </div>
                      </div>
                    ))
                  )}
                </div>
              )}

              <div className="mt-4 rounded-2xl bg-gray-50 p-4 text-xs text-gray-600">
                <span className="font-semibold">Important :</span> Information
                culturelle et éducative. Ceci ne remplace pas un avis médical.
              </div>
            </div>

            <div className="rounded-3xl bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-semibold text-gray-900">
                  Explorer des lieux
                </h3>
                <span className="text-sm text-gray-500">{places.length}</span>
              </div>
              <p className="mt-1 text-sm text-gray-600">
                Coopératives, marchés, transformateurs — base évolutive.
              </p>

              <div className="mt-4 space-y-3">
                {filtered.filteredPlaces.map((pl) => (
                  <div
                    key={pl.id}
                    className="rounded-2xl border border-gray-100 p-4"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <div className="font-semibold text-gray-900">
                          {pl.name}
                        </div>
                        <div className="mt-1 text-sm text-gray-600">
                          {pl.type} • {pl.city}
                        </div>
                        <div className="mt-2 text-xs text-gray-500">
                          <span className="font-medium">Produits :</span>{" "}
                          {pl.products}
                        </div>
                      </div>
                      <span
                        className={`shrink-0 rounded-full border px-2 py-1 text-xs ${badgeClasses(
                          pl.status
                        )}`}
                      >
                        {pl.status === "verified" ? "Vérifié" : "À vérifier"}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <button
                onClick={() =>
                  alert(
                    "MVP : bouton de suggestion. Prochaine étape : formulaire + modération."
                  )
                }
                className="mt-4 w-full rounded-2xl bg-gray-900 px-4 py-3 text-sm font-semibold text-white hover:bg-gray-800"
              >
                Suggérer un lieu
              </button>

              <div className="mt-3 text-xs text-gray-500">
                Les suggestions passent par une modération avant publication.
              </div>
            </div>
          </div>
        </div>

        {/* Footer disclaimer */}
        <div className="mt-6 rounded-3xl bg-white p-6 text-sm text-gray-600 shadow-sm">
          <div className="font-semibold text-gray-900">Avertissement</div>
          <p className="mt-2">
            Les contenus de cette section sont fournis à titre culturel et
            éducatif. Ils ne constituent pas un diagnostic, une prescription ou
            un avis médical. En cas de doute, consulte un professionnel de santé.
          </p>
        </div>
      </div>
    </div>
  );
}

