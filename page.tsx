"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import PricingCards from "@/components/pricing/PricingCards";
import PaymentModal from "@/components/payment/PaymentModal";

const features = [
  { icon: "📥", title: "Import universel", desc: "PDF, DOCX, URLs, DOI, Google Scholar, Zotero... Importez depuis n'importe quelle source en un clic." },
  { icon: "🤖", title: "IA d'analyse", desc: "Notre intelligence artificielle lit vos documents et en extrait les concepts clés, arguments et citations." },
  { icon: "📝", title: "Rédaction assistée", desc: "Générez des plans, des transitions et des paragraphes structurés à partir de vos sources analysées." },
  { icon: "🔍", title: "Moteur de recherche", desc: "Recherchez sémantiquement dans toute votre bibliothèque. Trouvez l'information exacte en secondes." },
  { icon: "📊", title: "Tableau de bord", desc: "Suivez votre progression, visualisez vos citations et gérez vos deadlines de rédaction." },
  { icon: "🌍", title: "Multi-langues", desc: "Interface et analyse disponibles en français, anglais, espagnol, portugais, arabe et 10+ langues." },
];

const testimonials = [
  { name: "Aminata K.", role: "Étudiante en Sociologie — Université Cheikh Anta Diop, Sénégal 🇸🇳", text: "J'ai rédigé mon mémoire de Master 2 en 3 semaines au lieu de 3 mois. L'analyse automatique des sources m'a fait gagner un temps fou.", initials: "AK" },
  { name: "Jean-Marc T.", role: "Doctorant en Économie — Université Paris 1, France 🇫🇷", text: "Le moteur de recherche sémantique est incroyable. Je retrouve une citation précise en 2 secondes dans ma bibliothèque de 200 sources.", initials: "JM" },
  { name: "Fatima O.", role: "Étudiante en Droit — Université Al Quaraouiyine, Maroc 🇲🇦", text: "Pour 3 000 FCFA par mois, c'est un investissement ridicule comparé au temps gagné. Mon directeur de mémoire a été bluffé par la qualité de ma synthèse.", initials: "FO" },
];

export default function Home() {
  const [showPayment, setShowPayment] = useState(false);

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* HERO */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)",
          backgroundSize: "30px 30px"
        }} />
        <div className="relative max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
            Rédigez votre mémoire<br />comme un pro
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-2xl mx-auto mb-8">
            La plateforme académique qui collecte, analyse et synthétise vos sources.
            Rejoignez 12 400+ étudiants sur les 5 continents.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setShowPayment(true)}
              className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition shadow-lg"
            >
              🚀 Commencer mon essai gratuit
            </button>
            <button className="bg-white/10 backdrop-blur text-white px-8 py-4 rounded-xl font-bold text-lg border border-white/30 hover:bg-white/20 transition">
              📖 Voir la démo
            </button>
          </div>
          <div className="mt-8 inline-flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full border border-white/20 text-sm">
            🌍 Disponible dans 40+ pays • Paiement sécurisé
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="bg-white border-b border-gray-200 py-8">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-extrabold text-blue-600">12,400+</div>
            <div className="text-sm text-gray-500 mt-1">Étudiants actifs</div>
          </div>
          <div>
            <div className="text-3xl font-extrabold text-blue-600">850K+</div>
            <div className="text-sm text-gray-500 mt-1">Sources analysées</div>
          </div>
          <div>
            <div className="text-3xl font-extrabold text-blue-600">94%</div>
            <div className="text-sm text-gray-500 mt-1">Taux de satisfaction</div>
          </div>
          <div>
            <div className="text-3xl font-extrabold text-blue-600">5★</div>
            <div className="text-sm text-gray-500 mt-1">Note moyenne</div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="fonctionnalites" className="py-20 max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-4">
          Tout ce dont vous avez besoin pour votre mémoire
        </h2>
        <p className="text-gray-500 text-center max-w-2xl mx-auto mb-12">
          Des outils puissants conçus par des chercheurs pour des chercheurs. Gagnez des heures de travail chaque semaine.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f) => (
            <div key={f.title} className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition text-center">
              <div className="text-5xl mb-4">{f.icon}</div>
              <h3 className="text-xl font-bold mb-2">{f.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PRICING */}
      <section id="tarifs" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-4">
            Choisissez votre formule
          </h2>
          <p className="text-gray-500 text-center max-w-2xl mx-auto mb-12">
            Un abonnement simple, sans engagement. Annulez quand vous voulez. 14 jours d'essai gratuit.
          </p>
          <PricingCards onSelectPlan={() => setShowPayment(true)} />
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="temoignages" className="py-20 max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-4">
          Ils utilisent MémoireCraft
        </h2>
        <p className="text-gray-500 text-center max-w-2xl mx-auto mb-12">
          Des étudiants de plus de 40 pays nous font confiance pour leurs mémoires, thèses et articles scientifiques.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
              <div className="text-amber-400 text-xl mb-4">★★★★★</div>
              <p className="text-gray-700 italic mb-6 leading-relaxed">« {t.text} »</p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-lg">
                  {t.initials}
                </div>
                <div>
                  <div className="font-bold text-sm">{t.name}</div>
                  <div className="text-xs text-gray-500">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Prêt à révolutionner votre mémoire ?
          </h2>
          <p className="text-lg opacity-90 max-w-xl mx-auto mb-8">
            Rejoignez 12 400+ étudiants qui utilisent MémoireCraft. 14 jours d'essai gratuit, sans carte bancaire.
          </p>
          <button
            onClick={() => setShowPayment(true)}
            className="bg-white text-blue-600 px-10 py-4 rounded-xl font-bold text-lg hover:scale-105 transition shadow-xl"
          >
            Commencer mon essai gratuit
          </button>
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {["💳 Visa", "💳 Mastercard", "📱 Orange Money", "📱 MTN Mobile Money", "📱 Wave", "🏦 Virement"].map((m) => (
              <span key={m} className="bg-white/10 backdrop-blur px-3 py-1 rounded-lg text-sm border border-white/20">
                {m}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST BADGES */}
      <section className="py-12 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 flex flex-wrap justify-center gap-12 opacity-60">
          <div className="text-center">
            <div className="text-3xl mb-2">🔒</div>
            <div className="text-xs font-bold uppercase tracking-wider">Paiement sécurisé<br/>SSL 256-bit</div>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-2">🛡️</div>
            <div className="text-xs font-bold uppercase tracking-wider">Données chiffrées<br/>RGPD compliant</div>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-2">🔄</div>
            <div className="text-xs font-bold uppercase tracking-wider">Annulation<br/>à tout moment</div>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-2">🎧</div>
            <div className="text-xs font-bold uppercase tracking-wider">Support 24/7<br/>Multi-langues</div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-400 py-12 text-center">
        <div className="text-2xl mb-2">📚 <span className="font-bold text-white">MémoireCraft</span></div>
        <p className="text-sm mb-4">© 2026 MémoireCraft — Tous droits réservés. Conçu pour les étudiants du monde entier.</p>
        <div className="flex justify-center gap-6 text-sm">
          <a href="#" className="hover:text-white transition">Conditions d'utilisation</a>
          <a href="#" className="hover:text-white transition">Politique de confidentialité</a>
          <a href="#" className="hover:text-white transition">Contact</a>
        </div>
      </footer>

      {/* PAYMENT MODAL */}
      {showPayment && <PaymentModal onClose={() => setShowPayment(false)} />}
    </main>
  );
}