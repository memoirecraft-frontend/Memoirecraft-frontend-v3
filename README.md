# MémoireCraft — Frontend

## 🚀 Déploiement rapide sur Vercel

### Étape 1 : Installer les dépendances
```bash
npm install
```

### Étape 2 : Configurer les variables d'environnement
Copiez `.env.local` et remplissez vos clés :
```
NEXT_PUBLIC_API_URL=https://votre-api.railway.app
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
```

### Étape 3 : Tester en local
```bash
npm run dev
```
Ouvrez http://localhost:3000

### Étape 4 : Déployer sur Vercel
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/VOTRE_USERNAME/memoirecraft-frontend.git
git push -u origin main
```
Puis allez sur [vercel.com](https://vercel.com) → Add New Project → Importez le repo.

## 📁 Structure

```
src/
├── app/
│   ├── page.tsx          # Landing page complète
│   ├── layout.tsx        # Root layout
│   └── globals.css       # Styles Tailwind
├── components/
│   ├── Navbar.tsx        # Navigation
│   ├── pricing/
│   │   └── PricingCards.tsx
│   └── payment/
│       └── PaymentModal.tsx
├── lib/
│   └── api.ts            # Client HTTP
└── store/
    └── authStore.ts      # État global auth
```

## 💰 Tarifs intégrés

- **Découverte** : Gratuit (3 sources)
- **Premium** : **3 000 FCFA/mois** (illimité + IA)
- **Équipe** : 8 000 FCFA/mois (5 utilisateurs)

## 🔧 Technologies

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Stripe (paiements)
- Zustand (state management)
- Axios (API client)
Déploiement en cours...
