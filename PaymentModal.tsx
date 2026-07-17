"use client";

import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import api from "@/lib/api";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || "");

function PaymentForm({ onClose }: { onClose: () => void }) {
  const stripe = useStripe();
  const elements = useElements();
  const [method, setMethod] = useState<"card" | "mobile">("mobile");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [operator, setOperator] = useState("Orange Money");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (method === "card" && stripe && elements) {
        const res = await api.post("/payments/create-intent", {
          amount: 3000,
          currency: "xof",
        });
        const { clientSecret } = res.data;

        const result = await stripe.confirmCardPayment(clientSecret, {
          payment_method: {
            card: elements.getElement(CardElement)!,
            billing_details: { email },
          },
        });

        if (result.error) {
          alert(result.error.message);
        } else {
          setSuccess(true);
        }
      } else {
        // Mobile Money simulation
        await new Promise((r) => setTimeout(r, 1500));
        setSuccess(true);
      }
    } catch (err) {
      alert("Erreur de paiement. Réessayez.");
    }
    setLoading(false);
  };

  if (success) {
    return (
      <div className="text-center py-8">
        <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center text-white text-3xl mx-auto mb-4 animate-bounce">
          ✓
        </div>
        <h3 className="text-2xl font-bold text-gray-900">Paiement confirmé !</h3>
        <p className="text-gray-500 mt-2">Votre abonnement Premium est maintenant actif.</p>
        <div className="bg-green-50 border border-green-200 rounded-lg p-4 mt-4">
          <p className="text-sm text-green-700">Prochaine échéance : {new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toLocaleDateString("fr-FR")}</p>
        </div>
        <button onClick={onClose} className="mt-6 bg-blue-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-700 transition">
          Accéder à mon espace
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex gap-2 mb-4">
        <button
          type="button"
          onClick={() => setMethod("mobile")}
          className={`flex-1 py-3 rounded-lg border-2 font-semibold transition ${
            method === "mobile" ? "border-blue-500 bg-blue-50 text-blue-700" : "border-gray-200 text-gray-600"
          }`}
        >
          📱 Mobile Money
        </button>
        <button
          type="button"
          onClick={() => setMethod("card")}
          className={`flex-1 py-3 rounded-lg border-2 font-semibold transition ${
            method === "card" ? "border-blue-500 bg-blue-50 text-blue-700" : "border-gray-200 text-gray-600"
          }`}
        >
          💳 Carte bancaire
        </button>
      </div>

      <div className="form-group">
        <label className="block text-sm font-semibold mb-1">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="votre@email.com"
          className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          required
        />
      </div>

      {method === "card" ? (
        <div className="border border-gray-300 rounded-lg p-4 bg-white">
          <label className="block text-sm font-semibold mb-2">Numéro de carte</label>
          <CardElement
            options={{
              style: {
                base: { fontSize: "16px", color: "#424770", "::placeholder": { color: "#aab7c4" } },
                invalid: { color: "#9e2146" },
              },
            }}
          />
        </div>
      ) : (
        <>
          <div className="form-group">
            <label className="block text-sm font-semibold mb-1">Numéro Mobile Money</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="07 XX XX XX XX"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              required
            />
          </div>
          <div className="form-group">
            <label className="block text-sm font-semibold mb-1">Opérateur</label>
            <select
              value={operator}
              onChange={(e) => setOperator(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            >
              <option>Orange Money</option>
              <option>MTN Mobile Money</option>
              <option>Wave</option>
              <option>Moov Money</option>
              <option>Free Money</option>
            </select>
          </div>
        </>
      )}

      <div className="bg-blue-50 rounded-xl p-4 text-center border border-blue-100">
        <div className="text-sm text-gray-500">Montant mensuel</div>
        <div className="text-3xl font-extrabold text-blue-600">3 000 FCFA</div>
        <div className="text-xs text-gray-400 mt-1">≈ 4,57 € / 4,95 $US</div>
      </div>

      <button
        type="submit"
        disabled={loading || (method === "card" && !stripe)}
        className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-blue-200 transition disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? "⏳ Traitement en cours..." : "🔒 Payer 3 000 FCFA — Démarrer"}
      </button>

      <p className="text-center text-xs text-gray-400 mt-2">
        🔒 Paiement sécurisé SSL 256-bit. Annulation à tout moment.
      </p>
    </form>
  );
}

export default function PaymentModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full relative shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-2xl font-bold transition"
        >
          ×
        </button>
        <h2 className="text-2xl font-bold mb-1">Abonnement Premium</h2>
        <p className="text-gray-500 text-sm mb-6">3 000 FCFA/mois — Sans engagement • Annulation à tout moment</p>
        <Elements stripe={stripePromise}>
          <PaymentForm onClose={onClose} />
        </Elements>
      </div>
    </div>
  );
}