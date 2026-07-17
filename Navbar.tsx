"use client";

import { useAuthStore } from "@/store/authStore";
import Link from "next/link";

export default function Navbar() {
  const { isLoggedIn, user, logout } = useAuthStore();

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl">📚</span>
            <span className="text-xl font-extrabold text-blue-600">MémoireCraft</span>
          </Link>
          <div className="flex items-center gap-6">
            <a href="#fonctionnalites" className="text-gray-600 hover:text-blue-600 font-medium transition">Fonctionnalités</a>
            <a href="#tarifs" className="text-gray-600 hover:text-blue-600 font-medium transition">Tarifs</a>
            <a href="#temoignages" className="text-gray-600 hover:text-blue-600 font-medium transition">Témoignages</a>
            {isLoggedIn ? (
              <div className="flex items-center gap-3">
                <span className="text-sm font-medium text-gray-700">{user?.name || user?.email}</span>
                <span className={`text-xs font-bold px-2 py-1 rounded-full ${
                  user?.plan === "PREMIUM" ? "bg-amber-100 text-amber-700" : "bg-gray-100 text-gray-600"
                }`}>
                  {user?.plan}
                </span>
                <button onClick={logout} className="text-sm text-red-500 hover:text-red-700 font-medium">
                  Déconnexion
                </button>
              </div>
            ) : (
              <div className="flex gap-2">
                <button className="text-blue-600 font-semibold hover:text-blue-800 transition">Connexion</button>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition">
                  S'inscrire
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}