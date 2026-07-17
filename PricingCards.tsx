"use client";

import { useState } from "react";
import { useAuthStore } from "@/store/authStore";

interface Plan {
  name: string;
  price: number;
  currency: string;
  description: string;
  features: string[];
  disabled: string[];
  popular: boolean;
}

const plans: Plan[] = [
  {
    name: "Découverte",
    price: 0,
    currency: "FCFA",
    description: "Pour tester la plateforme",
    features: ["3 sources maximum", "Analyse basique", "Export PDF simple"],
    disabled: ["Rédaction IA", "Collaboration", "Support prioritaire"],
    popular: false,
  },
  {
    name: "Premium",
    price: 3000,
    currency: "FCFA",
    description: "Pour les étudiants sérieux",
    features: [
      "Sources illimitées",
      "Analyse IA avancée",
      "Rédaction assistée",
      "Export multi-formats",
      "Support prioritaire",
    ],
    disabled: [],
    popular: true,
  },
  {
    name: "Équipe",
    price: 8000,
    currency: "FCFA",
    description: "Pour les groupes de recherche",
    features: [
      "Jusqu'à 5 utilisateurs",
      "Espace collaboratif",
      "Commentaires temps réel",
      "Partage bibliothèque",
      "Admin & rapports",
    ],
    disabled: [],
    popular: false,
  },
];

export default function PricingCards({ onSelectPlan }: { onSelectPlan: (plan: string) => void }) {
  const { isLoggedIn } = useAuthStore();

  return (
    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
      {plans.map((plan) => (
        <div
          key={plan.name}
          className={`rounded-2xl p-8 border-2 relative transition-all hover:-translate-y-2 hover:shadow-xl ${
            plan.popular
              ? "border-blue-500 shadow-lg shadow-blue-100 bg-white"
              : "border-gray-200 bg-white"
          }`}
        >
          {plan.popular && (
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-400 text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wide">
              Recommandé
            </span>
          )}
          <h3 className="text-2xl font-bold mt-2">{plan.name}</h3>
          <p className="text-gray-500 text-sm mt-1">{plan.description}</p>
          <div className="text-4xl font-extrabold text-blue-600 mt-6">
            {plan.price === 0 ? (
              "Gratuit"
            ) : (
              <>
                {plan.price.toLocaleString()}{" "}
                <span className="text-lg text-gray-500 font-normal">{plan.currency}/mois</span>
              </>
            )}
          </div>
          <ul className="mt-6 space-y-3">
            {plan.features.map((f) => (
              <li key={f} className="flex items-center gap-2 text-sm">
                <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {f}
              </li>
            ))}
            {plan.disabled.map((f) => (
              <li key={f} className="flex items-center gap-2 text-sm text-gray-400">
                <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                {f}
              </li>
            ))}
          </ul>
          <button
            onClick={() => onSelectPlan(plan.name)}
            className={`w-full mt-8 py-3 rounded-xl font-bold transition-all ${
              plan.popular
                ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:shadow-lg hover:shadow-blue-200"
                : "border-2 border-blue-600 text-blue-600 hover:bg-blue-50"
            }`}
          >
            {plan.price === 0
              ? "Commencer gratuitement"
              : `S'abonner — ${plan.price.toLocaleString()} FCFA`}
          </button>
        </div>
      ))}
    </div>
  );
}