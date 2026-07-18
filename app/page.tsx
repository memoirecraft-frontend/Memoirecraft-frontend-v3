"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import PricingCards from "@/components/pricing/PricingCards";
import PaymentModal from "@/components/payment/PaymentModal";

const features = [
  { icon: "📥", title: "Import universel" },
  { icon: "🤖", title: "IA d'analyse" },
  { icon: "📝", title: "Rédaction assistée" },
  { icon: "🔍", title: "Moteur de recherche" },
  { icon: "📊", title: "Tableau de bord" },
  { icon: "🌍", title: "Multi-langues" },
];

const testimonials = [
  { name: "Aminata K.", role: "Étudiante" },
  { name: "Jean-Marc T.", role: "Doctorant" },
  { name: "Fatima O.", role: "Étudiante" },
];

export default function Home() {
  const [showPayment, setShowPayment] = useState(false);

  return (
    <main className="min-h-screen">
      <Navbar />
      
      <section className="bg-gradient-to-b from-slate-900 to-slate-800 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Rédigez votre mémoire avec l'IA
          </h1>
          <p className="text-xl text-slate-300 mb-8">
            MemoireCraft vous accompagne de la recherche à la rédaction
          </p>
          <button 
            onClick={() => setShowPayment(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg text-lg"
          >
            Commencer gratuitement
          </button>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Fonctionnalités</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <div key={i} className="p-6 border rounded-lg shadow-sm hover:shadow-md transition">
                <div className="text-4xl mb-4">{f.icon}</div>
                <h3 className="font-semibold text-lg">{f.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PricingCards onSelect={() => setShowPayment(true)} />

      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Témoignages</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow">
                <p className="font-semibold">{t.name}</p>
                <p className="text-slate-500">{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {showPayment && <PaymentModal onClose={() => setShowPayment(false)} />}
    </main>
  );
}
