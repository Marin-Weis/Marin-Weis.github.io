import fs from "node:fs";
import path from "node:path";

const distDir = path.resolve("dist");
const baseHtmlPath = path.join(distDir, "index.html");

if (!fs.existsSync(baseHtmlPath)) {
  console.error("dist/index.html not found. Run vite build first.");
  process.exit(1);
}

const baseHtml = fs.readFileSync(baseHtmlPath, "utf-8");

const routes = [
  {
    slug: "iot-anomaly-pipeline",
    title: "IoT Anomaly Pipeline — Python, Scikit-learn, DuckDB & FastAPI | Marin Weis",
    description:
      "Étude de cas IoT Anomaly Pipeline : détection d'anomalies sur séries temporelles IoT avec Pydantic v2, Pandas, Scikit-learn Isolation Forest, DuckDB SQL et FastAPI.",
    heading: "IoT Anomaly Pipeline — Scikit-learn, DuckDB & FastAPI",
    summary:
      "Pipeline Data & ML en Python développé par Marin Weis pour la détection d'anomalies sur séries temporelles IoT : validation stricte Pydantic v2, features glissantes Pandas, Scikit-learn Isolation Forest, stockage SQL DuckDB, FastAPI et rapports Matplotlib.",
  },
  {
    slug: "incident-tracker",
    title: "Incident Tracker API — Java / Spring Boot 3, JWT & PostgreSQL | Marin Weis",
    description:
      "Étude de cas Incident Tracker API : API REST Spring Boot 3 de gestion d'incidents techniques avec authentification JWT, RBAC, PostgreSQL, Flyway, OpenAPI et Docker.",
    heading: "Incident Tracker API — Spring Boot 3, JWT & PostgreSQL",
    summary:
      "API REST Java / Spring Boot 3 développée par Marin Weis pour la gestion d'incidents techniques : authentification JWT stateless, contrôle d'accès RBAC, filtrage dynamique JPA, migrations SQL Flyway, erreurs RFC 7807 ProblemDetail, Swagger UI et Docker.",
  },
  {
    slug: "devops-lab",
    title: "DevOps Monitoring Lab — Docker, Ansible, Prometheus & Grafana | Marin Weis",
    description:
      "Étude de cas DevOps Monitoring Lab : service Python déployé avec un playbook Ansible idempotent et supervisé par Prometheus et Grafana (alertes et dashboard as code), par Marin Weis.",
    heading: "DevOps Monitoring Lab — Ansible, Prometheus & Grafana as Code",
    summary:
      "Projet personnel de Marin Weis : un service Python conteneurisé (Flask, Docker) déployé de façon idempotente avec Ansible, supervisé par Prometheus (règles d'alerte) et Grafana (datasource et dashboard provisionnés as code), avec un pipeline GitHub Actions.",
  },
  {
    slug: "ask-combak",
    title: "Ask Combak — Assistant Shopping IA Conversationnel (Stage Full-Stack) | Marin Weis",
    description:
      "Étude de cas Ask Combak : conception d'un assistant conversationnel IA (Next.js, React, TypeScript, Claude) lors du stage de Marin Weis chez Combak.",
    heading: "Ask Combak — Assistant Shopping IA Conversationnel (Stage Full-Stack chez Combak)",
    summary:
      "Développé par Marin Weis durant son stage de Développeur Full-Stack chez Combak (Avril – Juin 2026). Assistant d'achat intelligent propulsé par l'IA (Next.js, React, TypeScript, API Claude) guidant les utilisateurs vers les meilleurs produits reconditionnés avec API conversationnelle, moteur de recherche produits et tableau de bord analytique.",
  },
  {
    slug: "mongolingo",
    title: "Mongolingo — Apprendre MongoDB & NoSQL en Temps Réel | Marin Weis",
    description:
      "Étude de cas Mongolingo : application web interactive style Duolingo avec 30 défis MongoDB exécutés en temps réel, développée par Marin Weis (IUT de Vannes).",
    heading: "Mongolingo — Plateforme Interactive d'Apprentissage MongoDB & NoSQL",
    summary:
      "Conçue en autonomie par Marin Weis pour le module R4.03 NoSQL du BUT Informatique à l'IUT de Vannes (UBS). 30 défis progressifs exécutés en temps réel sur MongoDB avec explications détaillées, exploration de collections, import/export JSON/BSON et sauvegardes.",
  },
  {
    slug: "dual",
    title: "Dual Application — Application Android (Kotlin) Biathlon EPS | Marin Weis",
    description:
      "Étude de cas Dual : application mobile Android hors-ligne développée en Kotlin avec l'IUT de Vannes pour gérer les évaluations de biathlon en EPS.",
    heading: "Dual Application — Application Mobile Android d'Évaluation Biathlon EPS",
    summary:
      "Application Android native (Kotlin) développée par Marin Weis en collaboration avec l'IUT de Vannes et le Collège Notre-Dame-La-Blanche. Fonctionne 100% hors-ligne pour gérer le chronométrage, les résultats de tir et les performances des élèves en temps réel.",
  },
  {
    slug: "first-aid",
    title: "First Aid Application — Gestion & Affectation de Secouristes en Java | Marin Weis",
    description:
      "Étude de cas First Aid : application Java/JavaFX de gestion des secouristes (certifications PSE1, PSE2, SSA) et d'affectation algorithmique aux missions.",
    heading: "First Aid Application — Gestion et Affectation Algorithmique de Secouristes",
    summary:
      "Application Java / JavaFX développée à l'IUT de Vannes (BUT Informatique UBS) permettant aux secouristes de gérer leurs certifications (PSE1, PSE2, SSA) et aux administrateurs d'affecter automatiquement les équipes aux dispositifs de secours.",
  },
];

for (const route of routes) {
  const routeUrl = `https://marin-weis.github.io/${route.slug}/`;
  let html = baseHtml
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${route.title}</title>`)
    .replace(
      /<meta\s+name="description"\s+content="[^"]*"\s*\/>/,
      `<meta name="description" content="${route.description}" />`
    )
    .replace(
      /<link\s+rel="canonical"\s+href="[^"]*"\s*\/>/,
      `<link rel="canonical" href="${routeUrl}" />`
    )
    .replace(
      /<meta\s+property="og:title"\s+content="[^"]*"\s*\/>/,
      `<meta property="og:title" content="${route.title}" />`
    )
    .replace(
      /<meta\s+property="og:description"\s+content="[^"]*"\s*\/>/,
      `<meta property="og:description" content="${route.description}" />`
    )
    .replace(
      /<meta\s+property="og:url"\s+content="[^"]*"\s*\/>/,
      `<meta property="og:url" content="${routeUrl}" />`
    )
    .replace(
      /<meta\s+name="twitter:title"\s+content="[^"]*"\s*\/>/,
      `<meta name="twitter:title" content="${route.title}" />`
    )
    .replace(
      /<meta\s+name="twitter:description"\s+content="[^"]*"\s*\/>/,
      `<meta name="twitter:description" content="${route.description}" />`
    )
    .replace(
      /<h1>[\s\S]*?<\/h1>/,
      `<h1>${route.heading}</h1><p>${route.summary}</p>`
    );

  const routeDir = path.join(distDir, route.slug);
  fs.mkdirSync(routeDir, { recursive: true });
  fs.writeFileSync(path.join(routeDir, "index.html"), html, "utf-8");
  console.log(`✓ Generated static SEO page: dist/${route.slug}/index.html`);
}
