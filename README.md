# 🇵🇸 Filastine — Site culturel sur la Palestine

Projet fil rouge de la formation **Développer pour l'Humain et la Planète** —
Accessibilité web & Éco-conception — par [Yosr Meddah](https://youtube.com/@YosrMeddah)

[![Accessibilité](https://img.shields.io/badge/Lighthouse%20A11y-96%2F100-2D6A4F?style=flat-square)](https://github.com/YosrMeddah/filastine)
[![EcoIndex](https://img.shields.io/badge/EcoIndex-B-52956F?style=flat-square)](https://ecoindex.fr)
[![WCAG](https://img.shields.io/badge/WCAG%202.2-AA%20Conforme-2D6A4F?style=flat-square)](https://www.w3.org/TR/WCAG22/)
[![Licence MIT](https://img.shields.io/badge/Licence-MIT-2D6A4F?style=flat-square)](LICENSE)

---

## La formation

**Développer pour l'Humain et la Planète** est une formation en français
sur l'accessibilité web et l'éco-conception, disponible sur YouTube.

📺 Playlist complète → [youtube.com/@YosrMeddah](https://youtube.com/@YosrMeddah)

---

## À propos du projet

Filastine est un site culturel sur la Palestine, construit en React et Next.js.
Il a été conçu intentionnellement inaccessible au départ, puis amélioré
module après module pendant 20 vidéos de formation.

Le site est disponible en **français** et en **arabe** (RTL complet).

---

## Comment utiliser ce repo

Chaque branche correspond au point de départ d'un module — l'état du code **avant** les corrections.

```bash
# Cloner le projet
git clone https://github.com/Yosr-MEDDAH/filastine.git
cd filastine

# Partir du même code que dans la vidéo du module 05 (exemple)
git checkout module-05-debut

# Voir le projet final complet
git checkout main
```

| Branche | Point de départ |
|---|---|
| `module-02-debut` | Code sale — version de départ |
| `module-03-debut` | Après HTML sémantique |
| `module-04-debut` | Après navigation clavier |
| `module-05-debut` | Après contraste & dark mode |
| `module-06-debut` | Après images accessibles |
| `module-07-debut` | Après formulaires |
| `module-08-debut` | Après focus management |
| `module-09-debut` | Après typographie |
| `module-10-debut` | Après performance React |
| `module-11-debut` | Après CSS responsive |
| `module-12-debut` | Après animations |
| `module-13-debut` | Après bibliothèques |
| `module-14-debut` | Après architecture Next.js |
| `module-15-debut` | Après API sobre |
| `module-16-debut` | Après cache serveur |
| `module-17-debut` | Après RTL & arabe |
| `module-18-debut` | Après audit complet |
| `module-19-debut` | Après CI/CD |
| `main` | Projet final complet |

---

## Ce que ce projet démontre

**Accessibilité**
- HTML sémantique — `header`, `nav`, `main`, `footer`, `section`
- Navigation clavier — skip link, focus management, pas de piège
- Contraste WCAG AA sur tous les états (hover, focus, désactivé, dark mode)
- Images accessibles — `alt` descriptif ou vide selon le contexte
- Formulaires — labels associés, erreurs annoncées avec `aria-live`
- Modales — `<dialog>` natif, focus trap, retour de focus à la fermeture
- Animations — `prefers-reduced-motion` respecté
- RTL complet — version arabe avec `dir="rtl"`, `lang="ar"`, Noto Sans Arabic
- Tests automatisés — Playwright + axe en CI, Lighthouse CI, ESLint jsx-a11y

**Éco-conception**
- SSG Next.js — HTML pré-rendu, zéro calcul serveur à chaque visite
- Images WebP + lazy loading — -85% sur le poids des images
- CSS logique — une seule feuille pour LTR et RTL
- Cache HTTP — `Cache-Control` avec `stale-while-revalidate`
- Cache serveur — pattern Cache-Aside, TTL par type de donnée
- Zéro dépendance inutile — `<dialog>` natif, pas de `react-modal`

---

## Stack technique

```
Framework      Next.js 14 (App Router)
UI             React 18 (Server + Client Components)
Style          CSS Modules + propriétés logiques
Tests          Playwright + @axe-core/playwright
CI             GitHub Actions + Lighthouse CI
Déploiement    Vercel
Police arabe   Noto Sans Arabic
```

---

## Lancer le projet

```bash
# Installer
npm install

# Développement
npm run dev

# Build
npm run build && npm run start

# Tests d'accessibilité
npm run test:a11y

# Rapport d'audit complet
npm run audit
```

---

## Structure du projet

```
filastine/
├── app/
│   ├── layout.jsx              Layout français
│   ├── page.jsx                Page d'accueil
│   ├── globals.css             Variables CSS + propriétés logiques
│   └── ar/
│       ├── layout.jsx          Layout arabe RTL
│       ├── page.jsx            Page arabe
│       └── arabic.css          Typographie arabe
├── components/
│   ├── GrilleVilles.jsx        Recherche + grille
│   ├── CarteVille.jsx          Carte interactive
│   ├── Modale.jsx              Dialog natif
│   └── FormulaireContribution.jsx
├── lib/
│   ├── villes.js               Données FR + cache
│   ├── villesAr.js             Données AR + cache
│   └── cache.js                Pattern Cache-Aside
├── tests/
│   └── a11y.spec.js            Tests Playwright + axe
├── audit/
│   └── grille-audit.js         Rapport WCAG terminal
├── .github/workflows/
│   └── accessibilite.yml       CI GitHub Actions
├── lighthouserc.js             Seuils Lighthouse CI
└── .eslintrc.js                ESLint + jsx-a11y
```

---

## Les 20 modules de la formation

| # | Module |
|---|---|
| 01 | Pourquoi l'accessibilité web change tout |
| 02 | Le projet Filastine — version sale |
| 03 | HTML sémantique — la base de tout |
| 04 | Navigation clavier & skip links |
| 05 | Couleurs, contraste, dark mode |
| 06 | Images accessibles & sobres |
| 07 | Formulaires accessibles |
| 08 | Focus management & modales React |
| 09 | Typographie & CSS propre |
| 10 | JavaScript & performance React |
| 11 | CSS Layout Responsive |
| 12 | Animations accessibles |
| 13 | Bibliothèques — choisir avec discernement |
| 14 | Architecture sobre — Next.js |
| 15 | Backend & API Node.js sobre |
| 16 | Cache & cycle de vie de la donnée |
| 17 | RTL & arabe sur Filastine |
| 18 | TP — Audit complet de Filastine |
| 19 | CI/CD & tests automatisés |
| 20 | Éthique, vente & conclusion |

---

## Contribuer

Tu as trouvé une erreur d'accessibilité ? Ouvre une issue.
Tu veux améliorer quelque chose ? Ouvre une PR.

Avant de soumettre :
```bash
npm run lint
npm run test:a11y
npm run audit
```

---

## Ressources

- [WCAG 2.2](https://www.w3.org/TR/WCAG22/)
- [RGAA](https://accessibilite.numerique.gouv.fr)
- [WebAIM Million 2024](https://webaim.org/projects/million/)
- [EcoIndex](https://www.ecoindex.fr)
- [axe DevTools](https://www.deque.com/axe/devtools/)

---

## Licence

MIT — Libre de réutiliser, modifier, et distribuer.
Si ce projet t'a été utile — partage la formation. 🌿
