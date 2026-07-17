#!/bin/bash
# ╔═══════════════════════════════════════════════════════════════╗
# ║  MémoireCraft — Script d'installation rapide               ║
# ║  Copiez ce fichier dans un dossier et exécutez :          ║
# ║  bash install.sh                                           ║
# ╚═══════════════════════════════════════════════════════════════╝

set -e

echo "🚀 Installation de MémoireCraft..."

# Vérifier Node.js
if ! command -v node &> /dev/null; then
    echo "❌ Node.js n'est pas installé. Téléchargez-le sur https://nodejs.org"
    exit 1
fi

echo "✅ Node.js $(node -v) détecté"

# Créer le projet
mkdir -p memoirecraft-frontend
cd memoirecraft-frontend

# Copier les fichiers (à faire manuellement ou via git clone)
echo "📁 Placez les fichiers du projet dans ce dossier, puis :"
echo "   npm install"
echo "   npm run dev"
echo ""
echo "🌐 Puis déployez sur Vercel :"
echo "   1. git init"
echo "   2. git add ."
echo "   3. git commit -m 'Initial commit'"
echo "   4. git remote add origin https://github.com/VOTRE_USERNAME/memoirecraft-frontend.git"
echo "   5. git push -u origin main"
echo "   6. Allez sur vercel.com et importez le repo"
