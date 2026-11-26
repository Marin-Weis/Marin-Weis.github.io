export type Lang = "fr" | "en" | "de";

const en = {
  nav: {
      home: "Home",
      about: "About",
      education: "Education",
      projects: "Projects",
      experience: "Experiences",
      contact: "Contact",
      skills: "Skills",
      languageLabel: "Language",
    },
    skills: {
      title: "Skills",
      intro:
        "My BUT Informatique degree is built around 6 core competencies, developed over two years. Each card links to my detailed skills portfolio on Notion.",
      but1: "BUT 1",
      but2: "BUT 2",
      viewOnNotion: "View on Notion",
      fullPortfolio: "Full portfolio",
      items: {
        realiser: { name: "Build", desc: "Develop an application" },
        optimiser: { name: "Optimise", desc: "Optimise applications & algorithms" },
        administrer: {
          name: "Administer",
          desc: "Manage complex communicating systems & networks",
        },
        gerer: { name: "Manage data", desc: "Design & manage databases and information" },
        conduire: { name: "Lead", desc: "Lead and manage a project" },
        collaborer: { name: "Collaborate", desc: "Work within an IT team" },
      },
    },
    home: {
      eyebrow: "Portfolio {year} · Web & Mobile",
      greeting: "Hello,",
      iam: "I'm",
      role: "Computer science student & aspiring software engineer.",
      intro:
        "I design and build clean, thoughtful web and mobile experiences. From Java and Kotlin backends to modern frontends with React, I love turning ideas into usable products.",
      contactBtn: "Contact me",
      projectsBtn: "View projects",
      cvBtn: "View my CV",
      cvNewTab: "Open in new tab",
      currentlyBadge: "Currently",
      currentlyText: "Student at IUT of Vannes · Open to",
      internships: "internships & projects",
      chipTitle: "Web · Mobile · Backend",
      chipSub: "Java · Kotlin · React · SQL · PHP",
      affiliatedWith: "Affiliated with",
      rankLabel: "Current S4 rank",
    },
    about: {
      title: "About Me",
      sections: [
        {
          title: "Who am I?",
          content:
            "I'm Marin Weis, a computer science student with a passion for web development and design. I love creating beautiful and functional websites that provide great user experiences.",
        },
        {
          title: "My Skills",
          content:
            "I have experience with HTML, CSS, JavaScript and frameworks such as React and Vue.js. I'm also comfortable with backend technologies like Node.js and databases like MongoDB and SQL.",
        },
        {
          title: "My Hobbies",
          content:
            "In my free time, I enjoy swimming and playing the oboe. These activities help me relax and stay creative.",
        },
      ],
    },
    education: {
      title: "Education",
      skillsTitle: "Tech I work with",
      badges: { current: "Current", completed: "Completed" },
      items: [
        {
          title: "Diploma in Computer Science",
          institution: "IUT of Vannes",
          result: "current student",
          duration: "2024 - 2027",
          description:
            "Pursuing a BUT in Computer Science, focusing on software development, web technologies and database management.",
        },
        {
          title: "Bachelor's Degree in Science",
          institution: "Jacques Cartier High School, Saint-Malo",
          result: "Baccalauréat S, high honors",
          duration: "2021 - 2024",
          description:
            "Completed a rigorous curriculum focused on mathematics, physics and computer science, achieving high honors.",
        },
        {
          title: "Diploma of Musical Studies",
          institution: "Claude Debussy Conservatory, Saint-Malo",
          result: "oboe specialty",
          duration: "2010 - 2024",
          description:
            "Developed musical skills and discipline through years of dedicated study and practice of the oboe.",
        },
      ],
    },
    projects: {
      title: "Projects",
      intro:
        "A selection of my recent academic and personal projects. Filter by type to explore web or mobile work.",
      filters: { all: "All", web: "Web", mobile: "Mobile", devops: "DevOps" },
      badges: { web: "Web app", mobile: "Mobile app", devops: "DevOps" },
      buttons: { demo: "Demo", code: "Code", caseStudy: "Case study" },
      items: {
        firstAid: {
          title: "First Aid Application",
          description:
            "A mobile application for managing rescue workers and their assignments. Rescuers can register, declare their certifications (PSE1, PSE2, SSA, etc.) and consult their deployments, while administrators manage competencies and automatically assign missions based on skills and availability.",
        },
        dual: {
          title: "Dual Application",
          description:
            "An Android application designed to support PE teachers during biathlon evaluation sessions. Developed with the IUT de Vannes and Collège Notre-Dame-La-Blanche, the app works fully offline and manages student performance in real time.",
        },
        askCombak: {
          title: "Ask Combak",
          description:
            "An AI-powered conversational shopping assistant built during my internship at Combak (a refurbished-tech comparator). It guides users through a conversation to recommend the right product and the best deals, directly embedded into the website.",
        },
        splashTempo: {
          title: "SplashTempo",
          description:
            "Minimalist Android swim & lifesaving interval coach (Kotlin, Jetpack Compose, Room, Coroutines): send-off timer, audio/haptic cues, CSS pace zones, and offline workout history.",
        },
        iotAnomaly: {
          title: "IoT Anomaly Pipeline",
          description:
            "End-to-end IoT time-series anomaly detection pipeline in Python: Pydantic v2 validation, Pandas rolling features, Scikit-learn Isolation Forest, DuckDB SQL storage, FastAPI, and visual reports.",
        },
        incidentTracker: {
          title: "Incident Tracker API",
          description:
            "A Spring Boot 3 REST API for technical incident management with stateless JWT auth, RBAC, dynamic JPA filtering, PostgreSQL/Flyway migrations, RFC 7807 errors, Swagger UI, and CI.",
        },
        devopsLab: {
          title: "DevOps Monitoring Lab",
          description:
            "A hands-on DevOps lab: a Python service deployed with an idempotent Ansible playbook and monitored by Prometheus and Grafana (alert rules and dashboard provisioned as code), with a GitHub Actions pipeline.",
        },
        mongolingo: {
          title: "Mongolingo",
          description:
            "A Duolingo-style web app to learn MongoDB queries, built solo for the R4.03 NoSQL module. 30 progressive challenges run in real time on a local MongoDB, each with a detailed explanation — plus collection browsing, JSON/BSON import-export and backups.",
        },
      },
    },
    work: {
      title: "Professional Experiences",
      badges: { recent: "Most recent", past: "Past experience" },
      seeMore: "See more",
      seeLess: "See less",
      aside: {
        title: "What these experiences say about me",
        p1: "Through these jobs, I developed adaptability, teamwork and a strong sense of responsibility — whether in demanding physical work, customer-facing environments or safety-critical situations.",
        p2: "I bring this same reliability and attention to detail to my work in computer science and software development.",
      },
      items: [
        {
          role: "Oyster Farmer",
          company: "SCEO Les Huîtres de la Côte d'Émeraude",
          period: "July 2022 & July 2023",
          tasks: [
            "Sorting, grading, sieving and packaging oysters.",
            "Turning oyster bags to ensure uniform growth.",
          ],
        },
        {
          role: "Stock Clerk",
          company: "Leclerc",
          period: "July 2024",
          tasks: [
            "Shelf stocking while maintaining organization and shelf-facing standards.",
            "Inventory management: product control and shelf restocking.",
          ],
        },
        {
          role: "Lifeguard",
          company: "Aquamalo",
          period: "July & August 2025",
          tasks: [
            "Supervised and secured swimming areas, preventing water-related risks.",
            "Responded quickly to incidents, providing assistance and first aid.",
          ],
        },
        {
          role: "Full-stack Developer — Internship",
          company: "Combak",
          period: "April – June 2026",
          tasks: [
            "Built Ask Combak, an AI-powered conversational shopping assistant (Next.js, React, Claude).",
            "Worked across the stack: chat UI, conversation API, product search and analytics dashboards.",
          ],
        },
      ],
    },
    contact: {
      title: "Let's work together",
      intro:
        "You have a project, an internship offer, or just want to talk about web development and design? Feel free to reach out — I usually answer quickly.",
      availability: "Available for internships, projects and collaborations.",
      location: "Based in Vannes, France",
      formTitle: "Quick message",
      formHint: "Send me a message directly — it lands straight in my inbox.",
      nameLabel: "Name",
      namePlaceholder: "Your name",
      emailLabel: "Email",
      emailPlaceholder: "you@example.com",
      subjectLabel: "Subject",
      subjectPlaceholder: "Internship opportunity, project idea…",
      messageLabel: "Message",
      messagePlaceholder: "Tell me more about your project or idea.",
      send: "Send message",
      sending: "Sending…",
      successTitle: "Message sent!",
      successMsg: "Thanks for reaching out — I'll get back to you soon.",
      errorMsg: "Something went wrong. Please try again or email me directly.",
    },
    footer: {
      tagline: "Web & mobile developer · Computer science student",
      social: "Social",
      navTitle: "Navigation",
      builtWith: "Built with React, TypeScript & Tailwind",
    },
    backToPortfolio: "Back to portfolio",
    firstAid: {
      title: "First Aid Application",
      badge: "Mobile app · Academic project",
      heading: "Managing rescue workers, missions and skills in one mobile app.",
      intro:
        "First Aid Application is a mobile app designed to help organizations manage their rescue workers. It centralizes profiles, certifications and deployments, and assists administrators in assigning the right people to the right missions based on skills and availability.",
      meta: {
        roleLabel: "Role",
        role: "Full-stack student developer",
        stackLabel: "Tech stack",
        stack: "Java · SQL · Networking (DHCP / DNS)",
        focusLabel: "Focus",
        focus: "Scheduling · Skills management · UX",
      },
      features: [
        {
          title: "Rescuer experience",
          text: "Each rescuer has a dedicated profile with certifications and availability, and can easily keep track of their missions.",
          items: [
            "Personal dashboard with upcoming missions.",
            "Certifications like PSE1, PSE2, SSA, etc.",
            "Calendar view to visualize deployments.",
          ],
        },
        {
          title: "Admin & scheduling",
          text: "Administrators get a global overview of needs and resources, and assign people to missions in a structured way.",
          items: [
            "Dashboard with key indicators.",
            "Assignment based on skills and availability.",
            "Tools to maintain up-to-date skill records.",
          ],
        },
        {
          title: "Alerts & communication",
          text: "The app keeps everyone informed with alerts and notifications tailored to admins and rescuers.",
          items: [
            "Admin alerts for missing skills or low staff.",
            "Rescuer notifications for new or updated missions.",
            "Clear status for each deployment request.",
          ],
        },
      ],
      galleryTitle: "A closer look at key screens",
      screens: {
        admin: {
          title: "Admin dashboard",
          text: "Overview of missions, available rescuers and alerts to quickly identify issues.",
        },
        calendar: {
          title: "Rescuer calendar",
          text: "Monthly view of missions to help each rescuer plan their engagements.",
        },
        alerts: {
          title: "Alerts & notifications",
          text: "Centralized alerts and notifications so administrators never miss a critical change.",
        },
      },
      takeaway: {
        p1: "Designing this project taught me how important a clear information hierarchy is when dealing with time-sensitive data like deployments and alerts.",
        p2: "I focused on making the interface readable and structured even on smaller screens, while still exposing all the data administrators need to make decisions.",
      },
      team: {
        title: "Collaborators",
        role: "Developer",
        supervisionTitle: "Supervision",
        referentName: "Abdelbadie Belmouhcine",
        referentRole: "Supervising lecturer",
        referentOrg: "IUT de Vannes · LabISEN",
      },
    },
    dualStudy: {
      title: "Dual",
      badge: "Mobile app · Academic SAE project",
      heading: "A fully offline Android app to run and grade school biathlon sessions.",
      intro:
        "Dual helps PE teachers run school biathlon sessions (running + laser shooting) with 6th and 4th-grade classes. Built as a BUT Informatique SAE with Collège Notre-Dame-La-Blanche, it works entirely offline on the field: it centralises result entry, automates VMA-based calculations and shooting penalties, and gives students instant feedback.",
      meta: {
        roleLabel: "My role",
        role: "Full-stack developer & communication lead",
        stackLabel: "Tech stack",
        stack: "Kotlin · Jetpack Compose · Ktor · Room / SQLite",
        focusLabel: "Focus",
        focus: "Offline-first · Real-time · Field usability",
      },
      grades: {
        label: "Project grades",
        s3: "Semester 3 · prototype",
        s4: "Semester 4 · final",
      },
      challenge: {
        title: "The challenge",
        text: "During biathlon sessions teachers juggle timing laps, tracking hits and misses, applying penalties and adapting distances to each student's VMA — usually by hand, which is slow and error-prone.",
        points: [
          "Centralise every student's results in one place.",
          "Automate the calculations needed for grading.",
          "Give students immediate feedback on the field.",
          "Run with zero internet dependency, outdoors.",
        ],
      },
      architecture: {
        title: "Offline-first network architecture",
        text: "The app is designed to run outdoors without internet. The teacher's tablet acts as a Wi-Fi access point and local server; students connect directly to it — no external server involved.",
        points: [
          { label: "Local server", value: "Ktor embedded in the app" },
          { label: "Requests", value: "HTTP over an ad-hoc Wi-Fi network" },
          { label: "Real-time", value: "Server-Sent Events (SSE)" },
          { label: "Storage", value: "SQLite + Room, fully on-device" },
        ],
      },
      features: [
        {
          title: "Teacher side",
          text: "Everything needed to run a session from the field.",
          items: [
            "Sign up, log in and manage classes & students.",
            "Start a session by choosing its type (VMA test, training, final exam).",
            "Generate a QR code so students can join the session.",
            "Review past sessions and export results.",
            "Track each student's running & shooting progression.",
          ],
        },
        {
          title: "Student side",
          text: "A focused experience for the field.",
          items: [
            "Join a session by scanning the QR code.",
            "Enter results depending on the session type.",
            "Instantly see their computed scores.",
            "Look back at their previous sessions.",
          ],
        },
        {
          title: "Under the hood",
          text: "Robust by design for real conditions.",
          items: [
            "Fully offline operation, no external service.",
            "Local real-time communication via SSE.",
            "Native UI built with Jetpack Compose.",
            "Automated VMA, speed & shooting-efficiency scoring.",
          ],
        },
      ],
      galleryTitle: "A closer look at key screens",
      screens: {
        session: {
          title: "Starting a session",
          text: "The teacher picks a class and a session type — VMA test, training or final exam.",
        },
        qr: {
          title: "QR code join",
          text: "A QR code is generated so students connect to the local session in a single scan.",
        },
        results: {
          title: "Results & medals",
          text: "Each performance is scored automatically, with speed, shooting efficiency and medals.",
        },
        progress: {
          title: "Progression curves",
          text: "Running (% of VMA) and shooting progression are plotted for every student.",
        },
      },
      team: {
        title: "Team & context",
        membersTitle: "The team",
        supervisionTitle: "Supervision & client",
        client: {
          role: "Client · PE teacher",
          org: "Collège Notre-Dame-La-Blanche",
        },
        referent: {
          role: "Supervising lecturer",
          org: "IUT de Vannes · IRISA",
        },
        roles: {
          scrum: "Scrum Master & full-stack developer",
          comm: "Communication lead & full-stack developer",
          dev: "Full-stack developer",
        },
        text: "Developed at IUT de Vannes (BUT Informatique) for Collège Notre-Dame-La-Blanche, with PE teacher Thierry Le Goff as client and Jean-François Kamp as supervising lecturer. The dev team: Matthieu Gouelo, Marin Weis, Nolann Lescop, Glen Potay and Lucien Carré.",
        role: "On this project I was a full-stack developer and the team's communication lead.",
      },
      takeaway: {
        p1: "This project taught me to design software for real-world, constrained conditions — outdoors, offline and time-critical.",
        p2: "Building a local network with an embedded Ktor server and SSE showed me how to keep several devices in sync in real time, with no cloud infrastructure at all.",
      },
    },
    askCombak: {
      title: "Ask Combak",
      badge: "Web app · AI · Internship project",
      heading: "An AI shopping assistant that guides users to the right refurbished product.",
      intro:
        "Ask Combak is a conversational, AI-powered shopping assistant I built during my BUT 2 internship at Combak — a comparator for refurbished electronics and home appliances. Instead of digging through endless filters, users simply describe what they need; the assistant asks the right questions, then recommends suitable products and the best available deals, directly inside the website.",
      meta: {
        roleLabel: "My role",
        role: "Full-stack developer (internship)",
        stackLabel: "Tech stack",
        stack: "Next.js 15 · React · TypeScript · MongoDB · Typesense · Claude",
        focusLabel: "Focus",
        focus: "Conversational UX · AI · Product search",
      },
      context: {
        title: "Context",
        text: "I carried out my BUT 2 internship at Combak (13 April – 17 June 2026) as a full-stack developer, under the supervision of the CEO and co-founder. Ask Combak was one of the main projects: turning a refurbished-tech comparator into a guided, conversational buying experience.",
      },
      architecture: {
        title: "How it works",
        text: "Ask Combak ties together several building blocks: a Next.js front-end, a conversation API, the Claude LLM, the product database and a search engine — all deployed on Vercel.",
        points: [
          { label: "Front-end", value: "Next.js 15 · React · Ant Design" },
          { label: "Conversation API", value: "REST endpoints orchestrating the LLM" },
          { label: "AI model", value: "Claude (LLM)" },
          { label: "Data & search", value: "MongoDB + Typesense" },
        ],
      },
      features: [
        {
          title: "Conversational assistant",
          text: "A guided conversation that actually helps users decide.",
          items: [
            "Friendly entry point with suggested prompts.",
            "Clarifying questions (budget, brand, usage…).",
            "Natural-language understanding powered by Claude.",
            "Clear, integrated chat UI built with React & Ant Design.",
          ],
        },
        {
          title: "Product intelligence",
          text: "Answers grounded in real product data.",
          items: [
            "Connected to Combak's product database (MongoDB).",
            "Fast model & product search with Typesense.",
            "Recommendations rendered as rich product cards with offers.",
            "Best-deal and price comparison across merchants.",
          ],
        },
        {
          title: "Integration & analytics",
          text: "More than a chatbot — a real tool inside the site.",
          items: [
            "Embedded directly into the Combak website.",
            "Saved lists and price alerts for users.",
            "Personalised product suggestions.",
            "Usage tracking and dashboards to follow adoption.",
          ],
        },
      ],
      galleryTitle: "A closer look at key screens",
      screens: {
        site: {
          title: "Embedded in the site",
          text: "The assistant lives directly on the Combak website, next to the product catalog.",
        },
        chat: {
          title: "Guided conversation",
          text: "It asks the right questions — budget, brand, usage — to understand the need.",
        },
        reco: {
          title: "Smart recommendations",
          text: "It explains its reasoning and surfaces matching products with the best offers.",
        },
        suggestions: {
          title: "Personalised suggestions",
          text: "Tailored product ideas across smartphones, laptops and more.",
        },
        lists: {
          title: "Lists & price alerts",
          text: "Users can save products and keep track of prices over time.",
        },
        mobile: {
          title: "Mobile ready",
          text: "The full experience works on mobile, where most shopping happens.",
        },
      },
      takeaway: {
        p1: "This internship taught me to build a real, production-grade AI feature end to end — from front-end UX to API, data and prompt design.",
        p2: "The hardest and most rewarding part was grounding the LLM in real product data, so the assistant gives trustworthy, useful recommendations rather than generic answers.",
      },
    },
    splashTempo: {
      title: "SplashTempo",
      badge: "Mobile · Android (Kotlin / Jetpack Compose) · Personal project",
      heading: "A minimalist poolside Android interval coach for swimming & lifesaving sets, with Room persistence and CSS pace zones.",
      intro:
        "SplashTempo is a native Android app built with Kotlin, Jetpack Compose, Room, and Coroutines. Inspired by my competitive lifesaving background, it runs send-off interval sets with a crisp tabular stopwatch, poolside audio/haptic countdown cues, a Critical Swim Speed (CSS) zone calculator, and offline workout history.",
      coverAlt: "SplashTempo Android screens showing Interval Timer, CSS Pace Calculator, and Room History",
      repoButton: "View the repository",
      meta: {
        roleLabel: "My role",
        role: "Solo Android developer",
        stackLabel: "Tech stack",
        stack: "Kotlin · Jetpack Compose · Room · Coroutines · JUnit",
        focusLabel: "Focus",
        focus: "Interval state machine · Offline storage · Clean UI",
      },
      context: {
        title: "Context",
        text: "As a competitive lifesaver and lifeguard (BNSSA), I wanted a distraction-free poolside timer built specifically for send-off sets (like 8x50m on 0:55 or 4x100m manikin tow) without cluttered fitness-tracker menus.",
      },
      architecture: {
        title: "How it works",
        text: "A pure Kotlin state machine (IntervalTimerEngine) drives countdowns, rep transitions, and split logging independently from Android, while ViewModel Coroutines tick the UI and persist completed sets into Room.",
        points: [
          { label: "Timer Engine", value: "Deterministic Kotlin state machine (unit-tested)" },
          { label: "CSS & Zones", value: "Critical Swim Speed formula & 5 training paces" },
          { label: "Persistence", value: "Room (SQLite) + reactive Kotlin Flow history" },
          { label: "Poolside Cues", value: "ToneGenerator audio beeps + Vibrator haptics" },
        ],
      },
      features: [
        {
          title: "Send-Off Interval Timer",
          text: "Built for real pool training.",
          items: [
            "Pre-loaded swim & lifesaving presets plus custom set creation.",
            "Tabular-numeral stopwatch with clear SWIMMING / RESTING / GET READY badges.",
            "One-tap Wall Touch button logging swim vs. rest splits and /100m pace.",
          ],
        },
        {
          title: "CSS & Training Zones",
          text: "Turn 400m & 200m test times into target splits.",
          items: [
            "Computes Critical Swim Speed (m/s and /100m pace).",
            "Generates 5 zones from Recovery to Sprint / Rescue.",
            "Displays both /100m and 50m split targets.",
          ],
        },
        {
          title: "Offline Room History",
          text: "Every completed set saved automatically.",
          items: [
            "Stores total distance, average split, best split, and /100m pace.",
            "Reactive Flow updates total volume and personal bests.",
            "Works 100% offline on the pool deck.",
          ],
        },
        {
          title: "Clean Architecture & CI",
          text: "Tested domain logic and automated APK builds.",
          items: [
            "Domain layer isolated from Android framework for fast JUnit testing.",
            "Audio/haptic toggles for quiet or noisy pools.",
            "GitHub Actions CI running unit tests and assembleDebug.",
          ],
        },
      ],
      takeaway: {
        p1: "Building SplashTempo let me pair a personal sport passion with clean Android architecture (pure domain state machine, Room DAO/Flow, and Material 3 Jetpack Compose).",
        p2: "Keeping the UI intentionally simple and high-contrast makes it genuinely usable at a glance between pool intervals.",
      },
    },
    iotAnomaly: {
      title: "IoT Anomaly Pipeline",
      badge: "Data & ML · Python / Scikit-learn / DuckDB · Personal project",
      heading: "An end-to-end IoT time-series anomaly detection pipeline with strict validation, Isolation Forest ML scoring, DuckDB SQL storage, and FastAPI.",
      intro:
        "IoT Anomaly Pipeline is a personal Data & ML project built in Python. It ingests flow-counter and sensor time-series, validates payloads with Pydantic v2, engineers rolling and cyclic temporal features in Pandas, scores anomalies with a Scikit-learn Isolation Forest, persists predictions in DuckDB, and generates visual anomaly reports.",
      coverAlt: "IoT Anomaly Detection visual report showing sensor readings, rolling baseline, and flagged anomalies",
      repoButton: "View the repository",
      meta: {
        roleLabel: "My role",
        role: "Solo ML & Data engineer",
        stackLabel: "Tech stack",
        stack: "Python · FastAPI · Scikit-learn · Pandas · DuckDB · Docker",
        focusLabel: "Focus",
        focus: "Time-series ML · Data validation · Analytical SQL",
      },
      context: {
        title: "Context",
        text: "As part of my AI specialization, I wanted a concrete Data/ML engineering project beyond LLMs: handling noisy sensor streams, validating incoming batches strictly, detecting spikes and dropouts automatically, and exposing clean SQL summaries via an API.",
      },
      architecture: {
        title: "How it works",
        text: "Incoming sensor batches are validated with Pydantic v2, enriched with recent DuckDB history to compute rolling statistics, scored by a StandardScaler + IsolationForest pipeline, and stored back into DuckDB.",
        points: [
          { label: "Ingestion & API", value: "FastAPI + Pydantic v2 strict bounds & finite checks" },
          { label: "Feature Engineering", value: "Pandas rolling mean/std, z-score, delta, cyclic hour" },
          { label: "ML Scoring", value: "Scikit-learn StandardScaler + IsolationForest (joblib)" },
          { label: "SQL & Reporting", value: "Embedded DuckDB analytics + Matplotlib PNG reports" },
        ],
      },
      features: [
        {
          title: "Strict Payload Validation",
          text: "Bad telemetry never reaches the model.",
          items: [
            "Pydantic v2 enforces sensor ID patterns, battery/RSSI bounds, and finite values.",
            "Invalid or negative readings fail fast with HTTP 422.",
            "Batch ingestion endpoint supports up to 10,000 readings per request.",
          ],
        },
        {
          title: "Time-Series Feature Engineering",
          text: "Context-aware scoring across diurnal cycles.",
          items: [
            "6-step rolling mean, rolling standard deviation, local z-score, and delta.",
            "Cyclic hour-of-day encodings (hour_sin, hour_cos) to capture daily peaks.",
            "Fetches recent per-sensor history from DuckDB so rolling windows stay accurate.",
          ],
        },
        {
          title: "Isolation Forest & Severity",
          text: "Unsupervised detection without labelled anomalies.",
          items: [
            "Trained on clean 14-day diurnal baseline telemetry.",
            "Outputs continuous anomaly scores and classifies NORMAL, WARNING, or CRITICAL.",
            "Supports runtime retraining via POST /api/v1/train.",
          ],
        },
        {
          title: "DuckDB SQL & Visual Reports",
          text: "Query anomalies and inspect spikes visually.",
          items: [
            "Idempotent INSERT OR REPLACE storage in embedded DuckDB.",
            "SQL summary endpoint returning total readings, anomaly rate, avg, and max.",
            "Automated Matplotlib dark-theme report highlighting flagged spikes and decision boundary.",
          ],
        },
      ],
      takeaway: {
        p1: "This project let me connect data validation, time-series feature engineering, unsupervised ML, and analytical SQL in a lightweight, production-ready Python service.",
        p2: "Everything is tested with pytest, linted with ruff, containerised with Docker, and verified end to end in GitHub Actions CI.",
      },
    },
    incidentTracker: {
      title: "Incident Tracker API",
      badge: "Backend · Java / Spring Boot 3 · Personal project",
      heading: "A production-style REST API for technical incident management with JWT security, PostgreSQL, Flyway migrations, and OpenAPI.",
      intro:
        "Incident Tracker API is a personal backend project built with Java and Spring Boot 3. It implements stateless JWT authentication with role-based access control, dynamic filtering and pagination using JPA Specifications, versioned PostgreSQL migrations via Flyway, RFC 7807 ProblemDetail error responses, and interactive Swagger UI documentation.",
      coverAlt: "Swagger UI documentation of the Incident Tracker API",
      repoButton: "View the repository",
      meta: {
        roleLabel: "My role",
        role: "Solo backend developer",
        stackLabel: "Tech stack",
        stack: "Java 17/21 · Spring Boot 3 · Spring Security (JWT) · PostgreSQL · Flyway · Docker",
        focusLabel: "Focus",
        focus: "REST API design · Security & RBAC · Integration testing",
      },
      context: {
        title: "Context",
        text: "I wanted a clean, modern Spring Boot 3 codebase on GitHub demonstrating enterprise backend practices: stateless security, strict schema validation with Flyway, predictable error contracts, and automated end-to-end tests running in CI.",
      },
      architecture: {
        title: "How it works",
        text: "Incoming requests pass through a stateless JWT filter before reaching versioned REST controllers, a transactional service layer enforcing RBAC rules, and Spring Data JPA repositories backed by PostgreSQL 16.",
        points: [
          { label: "API Layer", value: "Spring Boot 3, Java records, OpenAPI 3 / Swagger UI" },
          { label: "Security", value: "Spring Security 6, BCrypt, stateless JWT & RBAC" },
          { label: "Persistence", value: "PostgreSQL 16, Spring Data JPA, Flyway migrations" },
          { label: "Quality", value: "JUnit 5 + MockMvc integration tests, GitHub Actions CI" },
        ],
      },
      features: [
        {
          title: "Stateless JWT & RBAC",
          text: "Role-based and ownership-based access control.",
          items: [
            "User registration and login issuing HMAC-SHA256 JWT tokens.",
            "Method-level @PreAuthorize('hasRole(ADMIN)') on destructive endpoints.",
            "Ownership validation: only admins, reporters, or assignees can update an incident.",
          ],
        },
        {
          title: "Dynamic Filtering & Pagination",
          text: "Type-safe queries built with JPA Specifications.",
          items: [
            "Combine status, priority, and keyword search (q) in a single endpoint.",
            "Clamped pagination and sorting on creation date.",
            "Aggregate /stats endpoint returning counts grouped by status and priority.",
          ],
        },
        {
          title: "Database Migrations & Error Contracts",
          text: "Predictable schema and API responses.",
          items: [
            "Versioned Flyway SQL migrations (V1__init_schema.sql) with Hibernate ddl-auto: validate.",
            "Global @RestControllerAdvice returning RFC 7807 ProblemDetail payloads.",
            "Structured field-level validation errors for 400 Bad Request responses.",
          ],
        },
        {
          title: "Containerised & CI-Verified",
          text: "Reproducible local stack and automated checks.",
          items: [
            "Multi-stage non-root Dockerfile + Docker Compose with PostgreSQL 16 healthchecks.",
            "Unit and MockMvc integration tests covering auth, CRUD, filtering, comments, and RBAC.",
            "GitHub Actions matrix testing on both Java 17 and Java 21.",
          ],
        },
      ],
      takeaway: {
        p1: "Building this API reinforced how Spring Security 6, Flyway, and RFC 7807 ProblemDetail fit together in a clean layered architecture.",
        p2: "The repository is fully tested, documented in English with Swagger UI, and ready to spin up in one Docker Compose command.",
      },
    },
    devopsLab: {
      title: "DevOps Monitoring Lab",
      badge: "DevOps · Observability as code · Personal project",
      heading: "A containerised service deployed with Ansible and monitored with Prometheus and Grafana — all provisioned as code.",
      intro:
        "DevOps Monitoring Lab is a personal learning project: a Python service exposing Prometheus metrics, deployed idempotently with an Ansible playbook, and monitored by Prometheus (scraping and alert rules) and Grafana (datasource and dashboard provisioned automatically, no manual UI setup). A single command deploys the whole stack, and a second run changes nothing.",
      coverAlt: "Grafana dashboard of the DevOps Monitoring Lab",
      repoButton: "View the repository",
      meta: {
        roleLabel: "My role",
        role: "Solo project (self-training)",
        stackLabel: "Tech stack",
        stack: "Docker · Ansible · Prometheus · Grafana · Python (Flask) · GitHub Actions",
        focusLabel: "Focus",
        focus: "Automation · Monitoring & alerting · Infrastructure as code",
      },
      context: {
        title: "Context",
        text: "I wanted to learn how a team automates deployments and keeps a service observable. I built the lab around the questions a DevOps engineer faces daily: how do I deploy the same way every time, how do I know the service is healthy, and how do I get warned before users notice a problem?",
      },
      architecture: {
        title: "How it works",
        text: "An Ansible playbook builds the application image and starts three containers on a shared Docker network. Prometheus scrapes the service every 5 seconds, evaluates the alert rules, and Grafana queries Prometheus to display the dashboard.",
        points: [
          { label: "Service", value: "Flask + gunicorn in Docker, /metrics endpoint" },
          { label: "Automation", value: "Ansible roles, templates, handlers" },
          { label: "Metrics & alerts", value: "Prometheus + 3 alert rules" },
          { label: "Dashboards", value: "Grafana provisioned as code" },
        ],
      },
      features: [
        {
          title: "Instrumented service",
          text: "RED metrics exposed with prometheus_client.",
          items: [
            "Request counter by method, endpoint and status code.",
            "Latency histogram for p50 / p95 / p99.",
            "In-flight requests gauge and a business counter.",
            "A chaos endpoint to raise the error rate on demand.",
          ],
        },
        {
          title: "Idempotent Ansible deployment",
          text: "Inventory, variables, two roles and handlers.",
          items: [
            "Re-running the playbook reports changed=0.",
            "Prometheus and Grafana restart only when their config changes.",
            "The Prometheus config is validated with promtool before deployment.",
            "Ports, image versions and alert thresholds live in group_vars.",
          ],
        },
        {
          title: "Prometheus alert rules",
          text: "Rendered from Jinja2 templates.",
          items: [
            "AppDown when the service stops answering the scrape.",
            "HighErrorRate when more than 10 % of responses are 5xx.",
            "HighLatencyP95 when the p95 latency exceeds 0.5 s.",
          ],
        },
        {
          title: "Grafana as code",
          text: "No manual configuration in the interface.",
          items: [
            "Prometheus datasource provisioned from a template.",
            "Dashboard JSON generated by a script and versioned.",
            "Panels for throughput, errors, latency, jobs, uptime and active alerts.",
          ],
        },
      ],
      alerting: {
        title: "Alerting in action",
        text: "Forcing 60 % of errors on the service and generating traffic moves the HighErrorRate rule from pending to firing, as shown below in Prometheus.",
        alt: "Prometheus alerts page with HighErrorRate firing",
      },
      takeaway: {
        p1: "This project taught me to treat deployment and monitoring as code: reproducible, reviewable and testable. The repository is documented step by step and has a GitHub Actions pipeline running tests, linters and a Prometheus configuration check.",
        p2: "The most instructive part was making the playbook truly idempotent and validating the configuration before it reaches the running services — and seeing an alert go from pending to firing on a metric I had instrumented myself.",
      },
    },
    mongolingo: {
      title: "Mongolingo",
      badge: "Web app · Education · School project (R4.03)",
      heading: "A Duolingo-style web app to learn MongoDB queries — hands-on and progressive.",
      intro:
        "Mongolingo is an interactive web app, inspired by Duolingo, dedicated to learning MongoDB queries. Built solo for the R4.03 NoSQL module, it offers 30 progressive challenges from beginner to advanced. Each query is executed in real time against a local MongoDB database, compared to the expected result, and followed by a detailed explanation — making NoSQL learning more accessible and interactive.",
      meta: {
        roleLabel: "My role",
        role: "Solo developer (school project)",
        stackLabel: "Tech stack",
        stack: "React · Vite · Node · Express · MongoDB",
        focusLabel: "Focus",
        focus: "NoSQL learning · Live query execution · Data tooling",
      },
      context: {
        title: "Context",
        text: "Mongolingo was the solo project for R4.03 — “Quality beyond the relational model” — at the IUT of Vannes. The brief: build a React application, Duolingo-style but for MongoDB queries, with at least 30 challenges of increasing difficulty, each explained and run against the database, plus a way to browse the collections and import / back up data in JSON and BSON.",
      },
      architecture: {
        title: "How it works",
        text: "A React front-end talks to an embedded Express API, which runs the user's queries against a local MongoDB instance and returns the results in real time.",
        points: [
          { label: "Front-end", value: "React + Vite" },
          { label: "Back-end", value: "Node + Express API" },
          { label: "Database", value: "MongoDB (local)" },
          { label: "Data formats", value: "JSON + BSON" },
        ],
      },
      features: [
        {
          title: "Interactive quiz",
          text: "Learn by doing, with instant feedback.",
          items: [
            "30 MongoDB challenges from beginner to advanced.",
            "Queries executed live against the database.",
            "Comparison with the expected result.",
            "A detailed explanation for every solution.",
          ],
        },
        {
          title: "Collections & schemas",
          text: "Understand the data you query.",
          items: [
            "Browse the users, orders and lessons collections.",
            "Demo data loaded automatically on first run.",
            "JSON Schema definitions for each collection.",
          ],
        },
        {
          title: "Import / Export",
          text: "Manipulate data straight from the UI.",
          items: [
            "Import data in JSON or BSON.",
            "Export collections.",
            "Reset to the original demo data.",
          ],
        },
        {
          title: "Backups",
          text: "Save and restore your work.",
          items: [
            "Create named backups.",
            "Stored as JSON and base64 BSON.",
            "One-click restore from the interface.",
          ],
        },
      ],
      galleryTitle: "A look at the app",
      takeaway: {
        p1: "This project let me build a complete web application end to end while deepening my understanding of NoSQL and MongoDB query design.",
        p2: "The most interesting challenge was crafting 30 questions with a genuinely progressive difficulty curve and executing each query safely against the live database.",
      },
    },
};

export type Dict = typeof en;

const fr: Dict = {
  nav: {
      home: "Accueil",
      about: "À propos",
      education: "Formation",
      projects: "Projets",
      experience: "Expériences",
      contact: "Contact",
      skills: "Compétences",
      languageLabel: "Langue",
    },
    skills: {
      title: "Compétences",
      intro:
        "Mon BUT Informatique s'articule autour de 6 compétences clés, développées sur deux années. Chaque carte renvoie vers mon portfolio de compétences détaillé sur Notion.",
      but1: "BUT 1",
      but2: "BUT 2",
      viewOnNotion: "Voir sur Notion",
      fullPortfolio: "Portfolio complet",
      items: {
        realiser: { name: "Réaliser", desc: "Réaliser un développement d'application" },
        optimiser: { name: "Optimiser", desc: "Optimiser des applications" },
        administrer: {
          name: "Administrer",
          desc: "Administrer des systèmes communicants complexes & réseaux",
        },
        gerer: { name: "Gérer", desc: "Gérer des données de l'information" },
        conduire: { name: "Conduire", desc: "Conduire un projet" },
        collaborer: { name: "Collaborer", desc: "Collaborer au sein d'une équipe" },
      },
    },
    home: {
      eyebrow: "Portfolio {year} · Web & Mobile",
      greeting: "Bonjour,",
      iam: "je suis",
      role: "Étudiant en informatique & futur ingénieur logiciel.",
      intro:
        "Je conçois et développe des expériences web et mobiles soignées et réfléchies. Des backends en Java et Kotlin aux frontends modernes en React, j'aime transformer des idées en produits utilisables.",
      contactBtn: "Me contacter",
      projectsBtn: "Voir les projets",
      cvBtn: "Voir mon CV",
      cvNewTab: "Ouvrir dans un onglet",
      currentlyBadge: "Actuellement",
      currentlyText: "Étudiant à l'IUT de Vannes · Ouvert aux",
      internships: "stages & projets",
      chipTitle: "Web · Mobile · Backend",
      chipSub: "Java · Kotlin · React · SQL · PHP",
      affiliatedWith: "Affilié à",
      rankLabel: "Classement actuel S4",
    },
    about: {
      title: "À propos de moi",
      sections: [
        {
          title: "Qui suis-je ?",
          content:
            "Je suis Marin Weis, étudiant en informatique passionné par le développement web et le design. J'aime créer des sites beaux et fonctionnels offrant une excellente expérience utilisateur.",
        },
        {
          title: "Mes compétences",
          content:
            "J'ai de l'expérience en HTML, CSS, JavaScript et avec des frameworks comme React et Vue.js. Je suis aussi à l'aise avec des technologies backend comme Node.js et des bases de données comme MongoDB et SQL.",
        },
        {
          title: "Mes loisirs",
          content:
            "Pendant mon temps libre, j'aime la natation et jouer du hautbois. Ces activités m'aident à me détendre et à rester créatif.",
        },
      ],
    },
    education: {
      title: "Formation",
      skillsTitle: "Technologies que j'utilise",
      badges: { current: "En cours", completed: "Terminé" },
      items: [
        {
          title: "Diplôme en informatique",
          institution: "IUT de Vannes",
          result: "étudiant actuel",
          duration: "2024 - 2027",
          description:
            "BUT Informatique, axé sur le développement logiciel, les technologies web et la gestion de bases de données.",
        },
        {
          title: "Baccalauréat scientifique",
          institution: "Lycée Jacques Cartier, Saint-Malo",
          result: "Baccalauréat S, mention très bien",
          duration: "2021 - 2024",
          description:
            "Cursus rigoureux axé sur les mathématiques, la physique et l'informatique, obtenu avec mention très bien.",
        },
        {
          title: "Diplôme d'études musicales",
          institution: "Conservatoire Claude Debussy, Saint-Malo",
          result: "spécialité hautbois",
          duration: "2010 - 2024",
          description:
            "Développement de compétences musicales et de la discipline à travers des années d'étude et de pratique du hautbois.",
        },
      ],
    },
    projects: {
      title: "Projets",
      intro:
        "Une sélection de mes projets académiques et personnels récents. Filtrez par type pour explorer mes travaux web ou mobiles.",
      filters: { all: "Tous", web: "Web", mobile: "Mobile", devops: "DevOps" },
      badges: { web: "Application web", mobile: "Application mobile", devops: "DevOps" },
      buttons: { demo: "Démo", code: "Code", caseStudy: "Étude de cas" },
      items: {
        firstAid: {
          title: "First Aid Application",
          description:
            "Une application mobile pour gérer des secouristes et leurs affectations. Les secouristes peuvent s'inscrire, déclarer leurs certifications (PSE1, PSE2, SSA, etc.) et consulter leurs déploiements, tandis que les administrateurs gèrent les compétences et attribuent automatiquement les missions selon les compétences et les disponibilités.",
        },
        dual: {
          title: "Dual Application",
          description:
            "Une application Android conçue pour assister les professeurs d'EPS lors des séances d'évaluation de biathlon. Développée avec l'IUT de Vannes et le Collège Notre-Dame-La-Blanche, elle fonctionne entièrement hors ligne et gère les performances des élèves en temps réel.",
        },
        askCombak: {
          title: "Ask Combak",
          description:
            "Un assistant d'achat conversationnel propulsé par l'IA, réalisé pendant mon stage chez Combak (comparateur de high-tech reconditionné). Il guide l'utilisateur via une conversation pour recommander le bon produit et les meilleures offres, directement intégré au site.",
        },
        splashTempo: {
          title: "SplashTempo",
          description:
            "Coach mobile Android pour le fractionné natation & sauvetage (Kotlin, Jetpack Compose, Room, Coroutines) : chrono à départ fixe, bips/vibrations, zones CSS et historique hors-ligne.",
        },
        iotAnomaly: {
          title: "IoT Anomaly Pipeline",
          description:
            "Pipeline complet de détection d'anomalies IoT en Python : validation Pydantic v2, features temporelles Pandas, Scikit-learn Isolation Forest, SQL DuckDB, FastAPI et rapports visuels.",
        },
        incidentTracker: {
          title: "Incident Tracker API",
          description:
            "Une API REST Spring Boot 3 de gestion d'incidents techniques avec authentification JWT, RBAC, filtrage dynamique JPA, migrations PostgreSQL/Flyway, erreurs RFC 7807, Swagger UI et CI.",
        },
        devopsLab: {
          title: "DevOps Monitoring Lab",
          description:
            "Un lab DevOps concret : un service Python déployé par un playbook Ansible idempotent et supervisé par Prometheus et Grafana (règles d'alerte et dashboard provisionnés as code), avec un pipeline GitHub Actions.",
        },
        mongolingo: {
          title: "Mongolingo",
          description:
            "Une application web type Duolingo pour apprendre les requêtes MongoDB, réalisée en solo pour la ressource R4.03 NoSQL. 30 défis progressifs exécutés en temps réel sur une base MongoDB locale, chacun avec une explication détaillée — plus exploration des collections, import/export JSON/BSON et sauvegardes.",
        },
      },
    },
    work: {
      title: "Expériences professionnelles",
      badges: { recent: "La plus récente", past: "Expérience passée" },
      seeMore: "Voir plus",
      seeLess: "Voir moins",
      aside: {
        title: "Ce que ces expériences disent de moi",
        p1: "À travers ces emplois, j'ai développé mon adaptabilité, mon esprit d'équipe et un grand sens des responsabilités — que ce soit dans un travail physique exigeant, au contact de la clientèle ou dans des situations critiques de sécurité.",
        p2: "J'apporte cette même fiabilité et ce souci du détail à mon travail en informatique et en développement logiciel.",
      },
      items: [
        {
          role: "Ostréiculteur",
          company: "SCEO Les Huîtres de la Côte d'Émeraude",
          period: "Juillet 2022 & Juillet 2023",
          tasks: [
            "Tri, calibrage, criblage et conditionnement des huîtres.",
            "Retournement des poches d'huîtres pour une croissance uniforme.",
          ],
        },
        {
          role: "Employé de rayon",
          company: "Leclerc",
          period: "Juillet 2024",
          tasks: [
            "Mise en rayon en respectant l'organisation et le facing.",
            "Gestion des stocks : contrôle des produits et réassort des rayons.",
          ],
        },
        {
          role: "Maître-nageur sauveteur",
          company: "Aquamalo",
          period: "Juillet & Août 2025",
          tasks: [
            "Surveillance et sécurisation des bassins, prévention des risques aquatiques.",
            "Réaction rapide aux incidents, assistance et premiers secours.",
          ],
        },
        {
          role: "Développeur full-stack — Stage",
          company: "Combak",
          period: "Avril – Juin 2026",
          tasks: [
            "Réalisation d'Ask Combak, un assistant d'achat conversationnel propulsé par l'IA (Next.js, React, Claude).",
            "Travail full-stack : interface de chat, API de conversation, recherche produit et dashboards analytics.",
          ],
        },
      ],
    },
    contact: {
      title: "Travaillons ensemble",
      intro:
        "Vous avez un projet, une offre de stage, ou simplement envie d'échanger autour du développement web et du design ? N'hésitez pas à me contacter — je réponds généralement vite.",
      availability: "Disponible pour des stages, des projets et des collaborations.",
      location: "Basé à Vannes, France",
      formTitle: "Message rapide",
      formHint: "Écrivez-moi directement — votre message arrive dans ma boîte mail.",
      nameLabel: "Nom",
      namePlaceholder: "Votre nom",
      emailLabel: "E-mail",
      emailPlaceholder: "vous@exemple.com",
      subjectLabel: "Objet",
      subjectPlaceholder: "Offre de stage, idée de projet…",
      messageLabel: "Message",
      messagePlaceholder: "Parlez-moi de votre projet ou de votre idée.",
      send: "Envoyer le message",
      sending: "Envoi…",
      successTitle: "Message envoyé !",
      successMsg: "Merci de m'avoir contacté — je vous réponds très vite.",
      errorMsg: "Une erreur est survenue. Réessayez ou écrivez-moi directement.",
    },
    footer: {
      tagline: "Développeur web & mobile · Étudiant en informatique",
      social: "Réseaux",
      navTitle: "Navigation",
      builtWith: "Réalisé avec React, TypeScript & Tailwind",
    },
    backToPortfolio: "Retour au portfolio",
    firstAid: {
      title: "First Aid Application",
      badge: "Application mobile · Projet académique",
      heading: "Gérer secouristes, missions et compétences dans une seule app mobile.",
      intro:
        "First Aid Application est une application mobile conçue pour aider les organisations à gérer leurs secouristes. Elle centralise les profils, les certifications et les déploiements, et aide les administrateurs à affecter les bonnes personnes aux bonnes missions selon les compétences et les disponibilités.",
      meta: {
        roleLabel: "Rôle",
        role: "Développeur étudiant full-stack",
        stackLabel: "Stack technique",
        stack: "Java · SQL · Réseau (DHCP / DNS)",
        focusLabel: "Axes",
        focus: "Planification · Gestion des compétences · UX",
      },
      features: [
        {
          title: "Expérience secouriste",
          text: "Chaque secouriste dispose d'un profil dédié avec ses certifications et disponibilités, et suit facilement ses missions.",
          items: [
            "Tableau de bord personnel avec les missions à venir.",
            "Certifications comme PSE1, PSE2, SSA, etc.",
            "Vue calendrier pour visualiser les déploiements.",
          ],
        },
        {
          title: "Admin & planification",
          text: "Les administrateurs ont une vue d'ensemble des besoins et des ressources, et affectent les personnes aux missions de façon structurée.",
          items: [
            "Tableau de bord avec indicateurs clés.",
            "Affectation selon les compétences et les disponibilités.",
            "Outils pour tenir à jour les fiches de compétences.",
          ],
        },
        {
          title: "Alertes & communication",
          text: "L'application tient tout le monde informé grâce à des alertes et notifications adaptées aux admins et aux secouristes.",
          items: [
            "Alertes admin en cas de compétences manquantes ou d'effectif réduit.",
            "Notifications secouristes pour les missions nouvelles ou modifiées.",
            "Statut clair pour chaque demande de déploiement.",
          ],
        },
      ],
      galleryTitle: "Zoom sur les écrans clés",
      screens: {
        admin: {
          title: "Tableau de bord admin",
          text: "Vue d'ensemble des missions, des secouristes disponibles et des alertes pour repérer rapidement les problèmes.",
        },
        calendar: {
          title: "Calendrier secouriste",
          text: "Vue mensuelle des missions pour aider chaque secouriste à planifier ses engagements.",
        },
        alerts: {
          title: "Alertes & notifications",
          text: "Alertes et notifications centralisées pour que les administrateurs ne ratent aucun changement critique.",
        },
      },
      takeaway: {
        p1: "Concevoir ce projet m'a appris à quel point une hiérarchie de l'information claire est importante face à des données sensibles au temps comme les déploiements et les alertes.",
        p2: "Je me suis concentré sur une interface lisible et structurée même sur petits écrans, tout en exposant toutes les données dont les administrateurs ont besoin pour décider.",
      },
      team: {
        title: "Collaborateurs",
        role: "Développeur",
        supervisionTitle: "Encadrement",
        referentName: "Abdelbadie Belmouhcine",
        referentRole: "Enseignant référent",
        referentOrg: "IUT de Vannes · LabISEN",
      },
    },
    dualStudy: {
      title: "Dual",
      badge: "Application mobile · Projet SAE",
      heading: "Une application Android 100 % hors ligne pour gérer et évaluer les séances de biathlon scolaire.",
      intro:
        "Dual accompagne les enseignants d'EPS lors des séances de biathlon scolaire (course à pied + tir laser) avec des classes de 6e et de 4e. Réalisée dans le cadre d'une SAE du BUT Informatique avec le Collège Notre-Dame-La-Blanche, elle fonctionne entièrement hors ligne sur le terrain : elle centralise la saisie des résultats, automatise les calculs liés à la VMA et les pénalités de tir, et offre un retour immédiat aux élèves.",
      meta: {
        roleLabel: "Mon rôle",
        role: "Développeur full-stack & responsable communication",
        stackLabel: "Stack technique",
        stack: "Kotlin · Jetpack Compose · Ktor · Room / SQLite",
        focusLabel: "Axes",
        focus: "Hors ligne · Temps réel · Utilisabilité terrain",
      },
      grades: {
        label: "Notes du projet",
        s3: "Semestre 3 · prototype",
        s4: "Semestre 4 · version finale",
      },
      challenge: {
        title: "La problématique",
        text: "Pendant les séances de biathlon, les enseignants doivent gérer le chronométrage des tours, le suivi des tirs réussis ou manqués, l'application des pénalités et l'adaptation des distances selon la VMA — généralement à la main, ce qui est lent et source d'erreurs.",
        points: [
          "Centraliser les résultats de chaque élève au même endroit.",
          "Automatiser les calculs nécessaires à l'évaluation.",
          "Offrir un retour immédiat aux élèves sur le terrain.",
          "Fonctionner sans aucune dépendance à Internet, en extérieur.",
        ],
      },
      architecture: {
        title: "Architecture réseau hors ligne",
        text: "L'application est conçue pour fonctionner en extérieur sans Internet. La tablette de l'enseignant fait office de point d'accès Wi-Fi et de serveur local ; les élèves s'y connectent directement — aucun serveur externe requis.",
        points: [
          { label: "Serveur local", value: "Ktor embarqué dans l'application" },
          { label: "Requêtes", value: "HTTP sur un réseau Wi-Fi ad-hoc" },
          { label: "Temps réel", value: "Server-Sent Events (SSE)" },
          { label: "Stockage", value: "SQLite + Room, 100 % sur l'appareil" },
        ],
      },
      features: [
        {
          title: "Côté enseignant",
          text: "Tout le nécessaire pour mener une séance depuis le terrain.",
          items: [
            "Inscription, connexion et gestion des classes & élèves.",
            "Lancement d'une séance en choisissant son type (Test VMA, Entraînement, Épreuve finale).",
            "Génération d'un QR code pour l'accès des élèves à la séance.",
            "Consultation des anciennes séances et export des résultats.",
            "Suivi des courbes de progression en course et en tir de chaque élève.",
          ],
        },
        {
          title: "Côté élève",
          text: "Une expérience épurée, pensée pour le terrain.",
          items: [
            "Accès à la séance via le scan du QR code.",
            "Saisie des résultats selon le type de séance.",
            "Consultation immédiate des résultats calculés.",
            "Consultation des anciennes séances réalisées.",
          ],
        },
        {
          title: "Sous le capot",
          text: "Robuste par conception, pour des conditions réelles.",
          items: [
            "Fonctionnement entièrement hors ligne, sans service externe.",
            "Communication locale en temps réel via SSE.",
            "Interface native réalisée avec Jetpack Compose.",
            "Calcul automatisé de la VMA, de la vitesse et de l'efficacité de tir.",
          ],
        },
      ],
      galleryTitle: "Zoom sur les écrans clés",
      screens: {
        session: {
          title: "Lancement d'une séance",
          text: "L'enseignant choisit une classe puis un type de séance — Test VMA, Entraînement ou Épreuve finale.",
        },
        qr: {
          title: "Accès par QR code",
          text: "Un QR code est généré pour que les élèves rejoignent la séance locale en un seul scan.",
        },
        results: {
          title: "Résultats & médailles",
          text: "Chaque performance est notée automatiquement, avec vitesse, efficacité de tir et médailles.",
        },
        progress: {
          title: "Courbes de progression",
          text: "La progression en course (% de la VMA) et en tir est tracée pour chaque élève.",
        },
      },
      team: {
        title: "Équipe & contexte",
        membersTitle: "L'équipe",
        supervisionTitle: "Encadrement & client",
        client: {
          role: "Client · enseignant d'EPS",
          org: "Collège Notre-Dame-La-Blanche",
        },
        referent: {
          role: "Enseignant référent",
          org: "IUT de Vannes · IRISA",
        },
        roles: {
          scrum: "Scrum Master & développeur full-stack",
          comm: "Responsable communication & développeur full-stack",
          dev: "Développeur full-stack",
        },
        text: "Développé à l'IUT de Vannes (BUT Informatique) pour le Collège Notre-Dame-La-Blanche, avec l'enseignant d'EPS Thierry Le Goff comme client et Jean-François Kamp comme enseignant référent. L'équipe de dev : Matthieu Gouelo, Marin Weis, Nolann Lescop, Glen Potay et Lucien Carré.",
        role: "Sur ce projet, j'étais développeur full-stack et responsable communication de l'équipe.",
      },
      takeaway: {
        p1: "Ce projet m'a appris à concevoir un logiciel pour des conditions réelles et contraintes — en extérieur, hors ligne et avec une forte pression temporelle.",
        p2: "Mettre en place un réseau local avec un serveur Ktor embarqué et du SSE m'a montré comment synchroniser plusieurs appareils en temps réel, sans aucune infrastructure cloud.",
      },
    },
    askCombak: {
      title: "Ask Combak",
      badge: "Application web · IA · Projet de stage",
      heading: "Un assistant d'achat IA qui guide l'utilisateur vers le bon produit reconditionné.",
      intro:
        "Ask Combak est un assistant d'achat conversationnel propulsé par l'IA, que j'ai développé pendant mon stage de BUT 2 chez Combak — un comparateur de produits électroniques et électroménagers reconditionnés. Plutôt que de fouiller dans d'innombrables filtres, l'utilisateur décrit son besoin ; l'assistant pose les bonnes questions, puis recommande des produits adaptés et les meilleures offres, directement au sein du site.",
      meta: {
        roleLabel: "Mon rôle",
        role: "Développeur full-stack (stage)",
        stackLabel: "Stack technique",
        stack: "Next.js 15 · React · TypeScript · MongoDB · Typesense · Claude",
        focusLabel: "Axes",
        focus: "UX conversationnelle · IA · Recherche produit",
      },
      context: {
        title: "Contexte",
        text: "J'ai réalisé mon stage de BUT 2 chez Combak (13 avril – 17 juin 2026) en tant que développeur full-stack, sous la supervision du CEO et cofondateur. Ask Combak était l'un des projets principaux : transformer un comparateur de high-tech reconditionné en une expérience d'achat guidée et conversationnelle.",
      },
      architecture: {
        title: "Comment ça marche",
        text: "Ask Combak relie plusieurs briques : un front-end Next.js, une API de conversation, le LLM Claude, la base de données produits et un moteur de recherche — le tout déployé sur Vercel.",
        points: [
          { label: "Front-end", value: "Next.js 15 · React · Ant Design" },
          { label: "API de conversation", value: "Endpoints REST orchestrant le LLM" },
          { label: "Modèle IA", value: "Claude (LLM)" },
          { label: "Données & recherche", value: "MongoDB + Typesense" },
        ],
      },
      features: [
        {
          title: "Assistant conversationnel",
          text: "Une conversation guidée qui aide vraiment à décider.",
          items: [
            "Point d'entrée accueillant avec des suggestions de questions.",
            "Questions de clarification (budget, marque, usage…).",
            "Compréhension du langage naturel grâce à Claude.",
            "Interface de chat claire et intégrée, en React & Ant Design.",
          ],
        },
        {
          title: "Intelligence produit",
          text: "Des réponses ancrées dans de vraies données produits.",
          items: [
            "Connecté à la base de données produits de Combak (MongoDB).",
            "Recherche rapide de modèles & produits avec Typesense.",
            "Recommandations affichées en cartes produits riches avec offres.",
            "Comparaison des meilleurs deals entre marchands.",
          ],
        },
        {
          title: "Intégration & analytics",
          text: "Plus qu'un chatbot — un vrai outil au sein du site.",
          items: [
            "Intégré directement au site Combak.",
            "Listes enregistrées et alertes prix pour les utilisateurs.",
            "Suggestions de produits personnalisées.",
            "Tracking d'usage et dashboards pour suivre l'adoption.",
          ],
        },
      ],
      galleryTitle: "Zoom sur les écrans clés",
      screens: {
        site: {
          title: "Intégré au site",
          text: "L'assistant vit directement sur le site Combak, à côté du catalogue produits.",
        },
        chat: {
          title: "Conversation guidée",
          text: "Il pose les bonnes questions — budget, marque, usage — pour cerner le besoin.",
        },
        reco: {
          title: "Recommandations intelligentes",
          text: "Il explique son raisonnement et propose des produits pertinents avec les meilleures offres.",
        },
        suggestions: {
          title: "Suggestions personnalisées",
          text: "Des idées de produits sur mesure : smartphones, ordinateurs et plus encore.",
        },
        lists: {
          title: "Listes & alertes prix",
          text: "L'utilisateur peut enregistrer des produits et suivre l'évolution des prix.",
        },
        mobile: {
          title: "Pensé pour le mobile",
          text: "L'expérience complète fonctionne sur mobile, là où l'on achète le plus.",
        },
      },
      takeaway: {
        p1: "Ce stage m'a appris à construire une vraie fonctionnalité IA de bout en bout, prête pour la production — de l'UX front-end à l'API, aux données et au prompt engineering.",
        p2: "La partie la plus difficile et la plus gratifiante a été d'ancrer le LLM dans de vraies données produits, pour que l'assistant donne des recommandations fiables et utiles, et non des réponses génériques.",
      },
    },
    splashTempo: {
      title: "SplashTempo",
      badge: "Mobile · Android (Kotlin / Jetpack Compose) · Projet personnel",
      heading: "Un coach Android épuré pour le fractionné natation & sauvetage sportif, avec historique Room et calcul de zones CSS.",
      intro:
        "SplashTempo est une application Android native développée en Kotlin avec Jetpack Compose, Room et Coroutines. Inspirée de ma pratique du sauvetage sportif, elle gère les séries à départ cadencé avec un chrono haute lisibilité, des bips/vibrations de départ, un calculateur de vitesse critique (CSS) et un historique hors-ligne.",
      coverAlt: "Écrans Android SplashTempo : Chrono fractionné, Calculateur CSS et Historique Room",
      repoButton: "Voir le dépôt",
      meta: {
        roleLabel: "Mon rôle",
        role: "Développeur Android (projet solo)",
        stackLabel: "Stack technique",
        stack: "Kotlin · Jetpack Compose · Room · Coroutines · JUnit",
        focusLabel: "Focus",
        focus: "Machine à états chrono · Stockage hors-ligne · UI épurée",
      },
      context: {
        title: "Contexte",
        text: "Pratiquant le sauvetage sportif (BNSSA / PSE1), je voulais une application de bord de bassin ultra lisible dédiée aux séries à départ fixe (ex. 8x50m départ 0:55 ou 4x100m mannequin), sans menus superflus.",
      },
      architecture: {
        title: "Comment ça marche",
        text: "Une machine à états Kotlin pure (IntervalTimerEngine) pilote comptes à rebours, changements de répétition et splits indépendamment d'Android, tandis que le ViewModel anime l'UI en Coroutines et sauvegarde les séances terminées dans Room.",
        points: [
          { label: "Moteur Chrono", value: "Machine à états Kotlin déterministe (testée JUnit)" },
          { label: "CSS & Zones", value: "Formule Critical Swim Speed & 5 zones d'allure" },
          { label: "Persistance", value: "Base Room (SQLite) + Flow réactif" },
          { label: "Signaux Bassin", value: "Bips ToneGenerator + vibrations haptiques" },
        ],
      },
      features: [
        {
          title: "Chrono à départ cadencé",
          text: "Pensé pour l'entraînement réel en bassin.",
          items: [
            "Séances natation & sauvetage préconfigurées + création sur mesure.",
            "Gros chrono en chiffres tabulaires et badges clairs (SWIMMING / RESTING).",
            "Bouton Wall Touch enregistrant temps nagé, repos et allure au 100m.",
          ],
        },
        {
          title: "Calculateur CSS & Zones",
          text: "Transformer 400m et 200m en allures cibles.",
          items: [
            "Calcule la Critical Swim Speed (m/s et allure au 100m).",
            "Génère 5 zones d'entraînement de Recovery à Sprint / Rescue.",
            "Affiche les temps cibles au 100m et au 50m.",
          ],
        },
        {
          title: "Historique Room hors-ligne",
          text: "Chaque séance terminée est sauvegardée.",
          items: [
            "Enregistre volume total, split moyen, meilleur split et allure /100m.",
            "Mise à jour réactive du volume cumulé et du record.",
            "Fonctionne 100 % hors-ligne au bord du bassin.",
          ],
        },
        {
          title: "Architecture propre & CI",
          text: "Domaine testé et build APK automatisé.",
          items: [
            "Logique métier isolée du framework Android pour des tests JUnit rapides.",
            "Activation/désactivation rapide du son et des vibrations.",
            "CI GitHub Actions exécutant tests unitaires et assembleDebug.",
          ],
        },
      ],
      takeaway: {
        p1: "SplashTempo m'a permis d'allier ma pratique sportive à une architecture Android moderne (machine à états pure, Room + Flow, Jetpack Compose).",
        p2: "Le choix d'un design volontairement simple et contrasté rend l'écran lisible d'un coup d'œil entre deux longueurs.",
      },
    },
    iotAnomaly: {
      title: "IoT Anomaly Pipeline",
      badge: "Data & ML · Python / Scikit-learn / DuckDB · Projet personnel",
      heading: "Un pipeline complet de détection d'anomalies sur séries temporelles IoT : validation stricte, Isolation Forest, SQL DuckDB et FastAPI.",
      intro:
        "IoT Anomaly Pipeline est un projet personnel Data & ML développé en Python. Il ingère des séries temporelles de compteurs de flux et capteurs, valide strictement les données avec Pydantic v2, calcule des features glissantes et cycliques avec Pandas, détecte les anomalies via Scikit-learn (Isolation Forest), stocke les résultats dans DuckDB et génère un rapport visuel Matplotlib.",
      coverAlt: "Rapport visuel IoT Anomaly Detection montrant les mesures capteur, la moyenne glissante et les anomalies détectées",
      repoButton: "Voir le dépôt",
      meta: {
        roleLabel: "Mon rôle",
        role: "Ingénieur Data & ML (projet solo)",
        stackLabel: "Stack technique",
        stack: "Python · FastAPI · Scikit-learn · Pandas · DuckDB · Docker",
        focusLabel: "Focus",
        focus: "ML séries temporelles · Validation de données · SQL analytique",
      },
      context: {
        title: "Contexte",
        text: "En complément de mes projets LLM, je voulais un projet concret d'ingénierie Data et Machine Learning classique : traiter des flux capteurs bruités, valider strictement les lots entrants, repérer automatiquement pics et coupures, et exposer des agrégats SQL via une API.",
      },
      architecture: {
        title: "Comment ça marche",
        text: "Les lots entrants sont validés par Pydantic v2, enrichis avec l'historique récent stocké dans DuckDB pour calculer les fenêtres glissantes, scorés par un pipeline StandardScaler + IsolationForest, puis persistés en SQL.",
        points: [
          { label: "Ingestion & API", value: "FastAPI + Pydantic v2 (bornes strictes et valeurs finies)" },
          { label: "Feature Engineering", value: "Moyenne/écart-type glissants, z-score, delta, heure cyclique" },
          { label: "Scoring ML", value: "Scikit-learn StandardScaler + IsolationForest (joblib)" },
          { label: "SQL & Rapport", value: "Base analytique DuckDB + graphiques Matplotlib" },
        ],
      },
      features: [
        {
          title: "Validation stricte des données",
          text: "Aucune donnée aberrante n'atteint le modèle.",
          items: [
            "Pydantic v2 vérifie le format d'ID capteur, batterie/RSSI et valeurs finies.",
            "Les mesures négatives ou invalides sont rejetées immédiatement en HTTP 422.",
            "L'endpoint d'ingestion accepte jusqu'à 10 000 mesures par lot.",
          ],
        },
        {
          title: "Features sur séries temporelles",
          text: "Tenir compte des cycles journaliers.",
          items: [
            "Moyenne et écart-type glissants sur 6 pas, z-score local et delta.",
            "Encodage cyclique de l'heure (hour_sin, hour_cos) pour les pics matin/soir.",
            "Récupération de l'historique récent dans DuckDB pour préserver le contexte glissant.",
          ],
        },
        {
          title: "Isolation Forest & Sévérité",
          text: "Détection non supervisée sans jeu labellisé.",
          items: [
            "Entraîné sur 14 jours de télémétrie diurne propre.",
            "Calcule un score d'anomalie continu et classe en NORMAL, WARNING ou CRITICAL.",
            "Ré-entraînement à la demande via POST /api/v1/train.",
          ],
        },
        {
          title: "SQL DuckDB & Rapport visuel",
          text: "Requêter les anomalies et visualiser les pics.",
          items: [
            "Stockage idempotent INSERT OR REPLACE dans DuckDB.",
            "Endpoint de synthèse SQL (total, taux d'anomalies, moyenne, maximum).",
            "Génération automatique d'un graphique Matplotlib avec seuil de décision.",
          ],
        },
      ],
      takeaway: {
        p1: "Ce projet m'a permis de relier validation de données, feature engineering temporel, Machine Learning non supervisé et SQL analytique dans un service Python léger.",
        p2: "L'ensemble est couvert par des tests pytest, vérifié avec ruff, conteneurisé avec Docker et testé de bout en bout dans la CI GitHub Actions.",
      },
    },
    incidentTracker: {
      title: "Incident Tracker API",
      badge: "Backend · Java / Spring Boot 3 · Projet personnel",
      heading: "Une API REST de gestion d'incidents techniques avec Spring Boot 3, sécurité JWT, PostgreSQL, Flyway et OpenAPI.",
      intro:
        "Incident Tracker API est un projet personnel backend développé en Java avec Spring Boot 3. Il met en place une authentification JWT stateless avec contrôle d'accès par rôles (RBAC), un filtrage dynamique et une pagination via JPA Specifications, des migrations SQL versionnées avec Flyway, des réponses d'erreur standardisées RFC 7807 (ProblemDetail) et une documentation interactive Swagger UI.",
      coverAlt: "Documentation Swagger UI de l'API Incident Tracker",
      repoButton: "Voir le dépôt",
      meta: {
        roleLabel: "Mon rôle",
        role: "Développeur backend (projet solo)",
        stackLabel: "Stack technique",
        stack: "Java 17/21 · Spring Boot 3 · Spring Security (JWT) · PostgreSQL · Flyway · Docker",
        focusLabel: "Focus",
        focus: "Conception API REST · Sécurité & RBAC · Tests d'intégration",
      },
      context: {
        title: "Contexte",
        text: "Je voulais disposer sur GitHub d'une base Spring Boot 3 moderne illustrant les standards backend en entreprise : sécurité stateless, validation stricte du schéma avec Flyway, contrats d'erreurs normalisés et tests d'intégration automatisés en CI.",
      },
      architecture: {
        title: "Comment ça marche",
        text: "Chaque requête traverse un filtre JWT stateless avant d'atteindre les contrôleurs REST versionnés, une couche service transactionnelle qui vérifie les droits RBAC, puis les dépôts Spring Data JPA connectés à PostgreSQL 16.",
        points: [
          { label: "Couche API", value: "Spring Boot 3, Java records, OpenAPI 3 / Swagger UI" },
          { label: "Sécurité", value: "Spring Security 6, BCrypt, JWT stateless & RBAC" },
          { label: "Persistance", value: "PostgreSQL 16, Spring Data JPA, migrations Flyway" },
          { label: "Qualité", value: "Tests JUnit 5 + MockMvc, CI GitHub Actions" },
        ],
      },
      features: [
        {
          title: "JWT stateless & RBAC",
          text: "Contrôle d'accès par rôle et par propriété.",
          items: [
            "Inscription et connexion délivrant des tokens JWT HMAC-SHA256.",
            "Protection @PreAuthorize('hasRole(ADMIN)') sur la suppression d'incidents.",
            "Vérification métier : seuls l'admin, le rapporteur ou l'assigné peuvent modifier un ticket.",
          ],
        },
        {
          title: "Filtrage dynamique & Pagination",
          text: "Requêtes typées via Spring Data JPA Specifications.",
          items: [
            "Combinaison des filtres statut, priorité et recherche par mot-clé (q).",
            "Pagination bornée et tri par date de création.",
            "Endpoint /stats retournant les compteurs agrégés par statut et priorité.",
          ],
        },
        {
          title: "Migrations SQL & Erreurs RFC 7807",
          text: "Schéma et contrats d'API prévisibles.",
          items: [
            "Migrations SQL Flyway (V1__init_schema.sql) avec Hibernate en ddl-auto: validate.",
            "@RestControllerAdvice global renvoyant des réponses ProblemDetail (RFC 7807).",
            "Erreurs de validation détaillées champ par champ sur les réponses 400.",
          ],
        },
        {
          title: "Conteneurisation & CI",
          text: "Stack locale reproductible et vérifications automatiques.",
          items: [
            "Dockerfile multi-stage non-root et Docker Compose avec PostgreSQL 16.",
            "Tests unitaires et d'intégration MockMvc couvrant auth, CRUD, filtres, commentaires et RBAC.",
            "Pipeline GitHub Actions testant sur Java 17 et Java 21 + build Docker.",
          ],
        },
      ],
      takeaway: {
        p1: "Ce projet m'a permis de mettre en pratique l'architecture en couches de Spring Boot 3 avec Spring Security 6, Flyway et ProblemDetail.",
        p2: "Le dépôt est entièrement testé, documenté en anglais avec Swagger UI et déployable localement en une commande Docker Compose.",
      },
    },
    devopsLab: {
      title: "DevOps Monitoring Lab",
      badge: "DevOps · Observabilité as code · Projet personnel",
      heading: "Un service conteneurisé déployé avec Ansible et supervisé par Prometheus et Grafana — le tout provisionné as code.",
      intro:
        "DevOps Monitoring Lab est un projet personnel d'apprentissage : un service Python qui expose des métriques Prometheus, déployé de façon idempotente par un playbook Ansible, et supervisé par Prometheus (collecte et règles d'alerte) et Grafana (datasource et dashboard provisionnés automatiquement, sans configuration manuelle dans l'interface). Une seule commande déploie toute la stack, et un second passage ne modifie rien.",
      coverAlt: "Dashboard Grafana du DevOps Monitoring Lab",
      repoButton: "Voir le dépôt",
      meta: {
        roleLabel: "Mon rôle",
        role: "Projet en solo (auto-formation)",
        stackLabel: "Stack technique",
        stack: "Docker · Ansible · Prometheus · Grafana · Python (Flask) · GitHub Actions",
        focusLabel: "Focus",
        focus: "Automatisation · Monitoring & alerting · Infrastructure as code",
      },
      context: {
        title: "Contexte",
        text: "Je voulais comprendre comment une équipe automatise ses déploiements et garde un service observable. J'ai construit le lab autour des questions qu'un ingénieur DevOps se pose au quotidien : comment déployer de la même façon à chaque fois, comment savoir que le service est en bonne santé, et comment être prévenu avant que les utilisateurs ne s'en aperçoivent ?",
      },
      architecture: {
        title: "Comment ça marche",
        text: "Un playbook Ansible construit l'image de l'application et démarre trois conteneurs sur un réseau Docker commun. Prometheus collecte le service toutes les 5 secondes et évalue les règles d'alerte, puis Grafana interroge Prometheus pour afficher le dashboard.",
        points: [
          { label: "Service", value: "Flask + gunicorn dans Docker, endpoint /metrics" },
          { label: "Automatisation", value: "Rôles Ansible, templates, handlers" },
          { label: "Métriques & alertes", value: "Prometheus + 3 règles d'alerte" },
          { label: "Dashboards", value: "Grafana provisionné as code" },
        ],
      },
      features: [
        {
          title: "Service instrumenté",
          text: "Métriques RED exposées avec prometheus_client.",
          items: [
            "Compteur de requêtes par méthode, endpoint et code HTTP.",
            "Histogramme de latence pour les p50 / p95 / p99.",
            "Jauge de requêtes en cours et compteur métier.",
            "Un endpoint de chaos pour faire monter le taux d'erreurs à la demande.",
          ],
        },
        {
          title: "Déploiement Ansible idempotent",
          text: "Inventaire, variables, deux rôles et handlers.",
          items: [
            "Relancer le playbook donne changed=0.",
            "Prometheus et Grafana ne redémarrent que si leur configuration change.",
            "La configuration Prometheus est validée avec promtool avant déploiement.",
            "Ports, versions d'images et seuils d'alerte sont dans group_vars.",
          ],
        },
        {
          title: "Règles d'alerte Prometheus",
          text: "Générées à partir de templates Jinja2.",
          items: [
            "AppDown quand le service ne répond plus à la collecte.",
            "HighErrorRate quand plus de 10 % des réponses sont des 5xx.",
            "HighLatencyP95 quand la latence p95 dépasse 0,5 s.",
          ],
        },
        {
          title: "Grafana as code",
          text: "Aucune configuration manuelle dans l'interface.",
          items: [
            "Datasource Prometheus provisionnée depuis un template.",
            "JSON du dashboard généré par un script et versionné.",
            "Panneaux de débit, erreurs, latence, jobs, disponibilité et alertes actives.",
          ],
        },
      ],
      alerting: {
        title: "L'alerte en action",
        text: "Forcer 60 % d'erreurs sur le service et générer du trafic fait passer la règle HighErrorRate de pending à firing, comme on le voit ci-dessous dans Prometheus.",
        alt: "Page des alertes Prometheus avec HighErrorRate en firing",
      },
      takeaway: {
        p1: "Ce projet m'a appris à traiter le déploiement et le monitoring comme du code : reproductibles, relisibles et testables. Le dépôt est documenté pas à pas et dispose d'un pipeline GitHub Actions qui lance les tests, les linters et une vérification de la configuration Prometheus.",
        p2: "Le plus instructif a été de rendre le playbook réellement idempotent et de valider la configuration avant qu'elle n'atteigne les services en cours d'exécution — et de voir une alerte passer de pending à firing sur une métrique que j'avais instrumentée moi-même.",
      },
    },
    mongolingo: {
      title: "Mongolingo",
      badge: "Application web · Pédagogie · Projet R4.03",
      heading: "Une application web type Duolingo pour apprendre les requêtes MongoDB — concrète et progressive.",
      intro:
        "Mongolingo est une application web interactive, inspirée de Duolingo, dédiée à l'apprentissage des requêtes MongoDB. Réalisée en solo pour la ressource R4.03 NoSQL, elle propose 30 questions de niveaux progressifs, du débutant au très complexe. Chaque requête est exécutée en temps réel sur une base MongoDB locale, comparée au résultat attendu, puis accompagnée d'une explication détaillée — pour rendre l'apprentissage du NoSQL plus accessible et interactif.",
      meta: {
        roleLabel: "Mon rôle",
        role: "Développeur solo (projet scolaire)",
        stackLabel: "Stack technique",
        stack: "React · Vite · Node · Express · MongoDB",
        focusLabel: "Axes",
        focus: "Apprentissage NoSQL · Exécution en direct · Outillage de données",
      },
      context: {
        title: "Contexte",
        text: "Mongolingo était le projet solo de la ressource R4.03 — « Qualité au-delà du relationnel » — à l'IUT de Vannes. La consigne : construire une application React, sur le principe de Duolingo mais pour les requêtes MongoDB, avec au moins 30 défis de difficulté croissante, chacun expliqué et exécuté sur la base, ainsi qu'une façon d'explorer les collections et d'importer / sauvegarder les données en JSON et BSON.",
      },
      architecture: {
        title: "Comment ça marche",
        text: "Un front-end React dialogue avec une API Express embarquée, qui exécute les requêtes de l'utilisateur sur une instance MongoDB locale et renvoie les résultats en temps réel.",
        points: [
          { label: "Front-end", value: "React + Vite" },
          { label: "Back-end", value: "API Node + Express" },
          { label: "Base de données", value: "MongoDB (locale)" },
          { label: "Formats de données", value: "JSON + BSON" },
        ],
      },
      features: [
        {
          title: "Quiz interactif",
          text: "Apprendre en pratiquant, avec un retour immédiat.",
          items: [
            "30 défis MongoDB du débutant au très complexe.",
            "Requêtes exécutées en direct sur la base.",
            "Comparaison avec le résultat attendu.",
            "Une explication détaillée pour chaque solution.",
          ],
        },
        {
          title: "Collections & schémas",
          text: "Comprendre les données que l'on interroge.",
          items: [
            "Exploration des collections users, orders et lessons.",
            "Données de démonstration chargées au premier lancement.",
            "Schémas JSON Schema pour chaque collection.",
          ],
        },
        {
          title: "Import / Export",
          text: "Manipuler les données directement depuis l'interface.",
          items: [
            "Import de données en JSON ou BSON.",
            "Export des collections.",
            "Réinitialisation aux données de démonstration.",
          ],
        },
        {
          title: "Sauvegardes",
          text: "Sauvegarder et restaurer son travail.",
          items: [
            "Création de sauvegardes nommées.",
            "Stockées en JSON et BSON base64.",
            "Restauration en un clic depuis l'interface.",
          ],
        },
      ],
      galleryTitle: "Aperçu de l'application",
      takeaway: {
        p1: "Ce projet m'a permis de construire une application web complète de bout en bout, tout en approfondissant le NoSQL et la conception de requêtes MongoDB.",
        p2: "Le défi le plus intéressant a été de concevoir 30 questions avec une vraie courbe de difficulté progressive et d'exécuter chaque requête de façon fiable sur la base en direct.",
      },
    },
};

const de: Dict = {
  nav: {
      home: "Start",
      about: "Über mich",
      education: "Ausbildung",
      projects: "Projekte",
      experience: "Erfahrungen",
      contact: "Kontakt",
      skills: "Kompetenzen",
      languageLabel: "Sprache",
    },
    skills: {
      title: "Kompetenzen",
      intro:
        "Mein BUT Informatik gliedert sich in 6 Kernkompetenzen, die über zwei Jahre entwickelt werden. Jede Karte verweist auf mein detailliertes Kompetenzportfolio auf Notion.",
      but1: "BUT 1",
      but2: "BUT 2",
      viewOnNotion: "Auf Notion ansehen",
      fullPortfolio: "Vollständiges Portfolio",
      items: {
        realiser: { name: "Realisieren", desc: "Eine Anwendung entwickeln" },
        optimiser: { name: "Optimieren", desc: "Anwendungen optimieren" },
        administrer: {
          name: "Administrieren",
          desc: "Komplexe kommunizierende Systeme & Netzwerke verwalten",
        },
        gerer: { name: "Daten verwalten", desc: "Daten und Informationen verwalten" },
        conduire: { name: "Leiten", desc: "Ein Projekt leiten" },
        collaborer: { name: "Zusammenarbeiten", desc: "In einem IT-Team arbeiten" },
      },
    },
    home: {
      eyebrow: "Portfolio {year} · Web & Mobile",
      greeting: "Hallo,",
      iam: "ich bin",
      role: "Informatikstudent & angehender Softwareentwickler.",
      intro:
        "Ich gestalte und entwickle saubere, durchdachte Web- und Mobile-Erlebnisse. Von Backends in Java und Kotlin bis zu modernen Frontends mit React verwandle ich Ideen gerne in nutzbare Produkte.",
      contactBtn: "Kontakt aufnehmen",
      projectsBtn: "Projekte ansehen",
      cvBtn: "Lebenslauf ansehen",
      cvNewTab: "In neuem Tab öffnen",
      currentlyBadge: "Aktuell",
      currentlyText: "Student am IUT Vannes · Offen für",
      internships: "Praktika & Projekte",
      chipTitle: "Web · Mobile · Backend",
      chipSub: "Java · Kotlin · React · SQL · PHP",
      affiliatedWith: "Verbunden mit",
      rankLabel: "Aktueller Rang S4",
    },
    about: {
      title: "Über mich",
      sections: [
        {
          title: "Wer bin ich?",
          content:
            "Ich bin Marin Weis, Informatikstudent mit einer Leidenschaft für Webentwicklung und Design. Ich liebe es, schöne und funktionale Websites zu erstellen, die eine großartige Nutzererfahrung bieten.",
        },
        {
          title: "Meine Fähigkeiten",
          content:
            "Ich habe Erfahrung mit HTML, CSS, JavaScript und Frameworks wie React und Vue.js. Außerdem bin ich vertraut mit Backend-Technologien wie Node.js und Datenbanken wie MongoDB und SQL.",
        },
        {
          title: "Meine Hobbys",
          content:
            "In meiner Freizeit schwimme ich gerne und spiele Oboe. Diese Aktivitäten helfen mir, zu entspannen und kreativ zu bleiben.",
        },
      ],
    },
    education: {
      title: "Ausbildung",
      skillsTitle: "Technologien, mit denen ich arbeite",
      badges: { current: "Laufend", completed: "Abgeschlossen" },
      items: [
        {
          title: "Diplom in Informatik",
          institution: "IUT Vannes",
          result: "aktueller Student",
          duration: "2024 - 2027",
          description:
            "BUT in Informatik mit Schwerpunkt auf Softwareentwicklung, Webtechnologien und Datenbankverwaltung.",
        },
        {
          title: "Wissenschaftliches Abitur",
          institution: "Lycée Jacques Cartier, Saint-Malo",
          result: "Baccalauréat S, mit Auszeichnung",
          duration: "2021 - 2024",
          description:
            "Anspruchsvoller Lehrplan mit Schwerpunkt auf Mathematik, Physik und Informatik, abgeschlossen mit Auszeichnung.",
        },
        {
          title: "Diplom für Musikstudien",
          institution: "Conservatoire Claude Debussy, Saint-Malo",
          result: "Fachrichtung Oboe",
          duration: "2010 - 2024",
          description:
            "Entwicklung musikalischer Fähigkeiten und Disziplin durch jahrelanges Studium und Üben der Oboe.",
        },
      ],
    },
    projects: {
      title: "Projekte",
      intro:
        "Eine Auswahl meiner aktuellen akademischen und persönlichen Projekte. Filtern Sie nach Typ, um Web- oder Mobile-Arbeiten zu entdecken.",
      filters: { all: "Alle", web: "Web", mobile: "Mobile", devops: "DevOps" },
      badges: { web: "Web-App", mobile: "Mobile-App", devops: "DevOps" },
      buttons: { demo: "Demo", code: "Code", caseStudy: "Fallstudie" },
      items: {
        firstAid: {
          title: "First Aid Application",
          description:
            "Eine mobile Anwendung zur Verwaltung von Rettungskräften und ihren Einsätzen. Retter können sich registrieren, ihre Zertifizierungen (PSE1, PSE2, SSA usw.) angeben und ihre Einsätze einsehen, während Administratoren Kompetenzen verwalten und Einsätze automatisch nach Fähigkeiten und Verfügbarkeit zuweisen.",
        },
        dual: {
          title: "Dual Application",
          description:
            "Eine Android-Anwendung zur Unterstützung von Sportlehrern bei Biathlon-Bewertungssitzungen. Entwickelt mit dem IUT Vannes und dem Collège Notre-Dame-La-Blanche, funktioniert die App vollständig offline und verwaltet die Leistungen der Schüler in Echtzeit.",
        },
        askCombak: {
          title: "Ask Combak",
          description:
            "Ein KI-gestützter dialogbasierter Einkaufsassistent, entwickelt während meines Praktikums bei Combak (Vergleichsportal für refurbished Technik). Er führt Nutzer durch ein Gespräch, um das passende Produkt und die besten Angebote zu empfehlen — direkt in die Website integriert.",
        },
        splashTempo: {
          title: "SplashTempo",
          description:
            "Minimalistischer Android-Intervallcoach für Schwimmen & Rettungssport (Kotlin, Jetpack Compose, Room, Coroutines): Abgangszeit-Timer, Signale, CSS-Zonen und Offline-Verlauf.",
        },
        iotAnomaly: {
          title: "IoT Anomaly Pipeline",
          description:
            "End-to-End-Pipeline zur IoT-Anomalieerkennung in Python: Pydantic-v2-Validierung, Pandas-Zeitreihen-Features, Scikit-learn Isolation Forest, DuckDB-SQL, FastAPI und visuelle Berichte.",
        },
        incidentTracker: {
          title: "Incident Tracker API",
          description:
            "Eine Spring-Boot-3-REST-API zur Incident-Verwaltung mit JWT-Authentifizierung, RBAC, dynamischer JPA-Filterung, PostgreSQL/Flyway-Migrationen, RFC-7807-Fehlern, Swagger UI und CI.",
        },
        devopsLab: {
          title: "DevOps Monitoring Lab",
          description:
            "Ein praxisnahes DevOps-Lab: ein Python-Dienst, per idempotentem Ansible-Playbook bereitgestellt und mit Prometheus und Grafana überwacht (Alarmregeln und Dashboard als Code provisioniert), mit GitHub-Actions-Pipeline.",
        },
        mongolingo: {
          title: "Mongolingo",
          description:
            "Eine Web-App im Duolingo-Stil zum Erlernen von MongoDB-Abfragen, allein für das NoSQL-Modul R4.03 entwickelt. 30 progressive Aufgaben laufen in Echtzeit auf einer lokalen MongoDB, jede mit ausführlicher Erklärung — plus Sammlungsansicht, JSON/BSON-Import/Export und Backups.",
        },
      },
    },
    work: {
      title: "Berufserfahrung",
      badges: { recent: "Aktuellste", past: "Frühere Erfahrung" },
      seeMore: "Mehr anzeigen",
      seeLess: "Weniger anzeigen",
      aside: {
        title: "Was diese Erfahrungen über mich aussagen",
        p1: "Durch diese Tätigkeiten habe ich Anpassungsfähigkeit, Teamgeist und ein starkes Verantwortungsbewusstsein entwickelt — sei es bei körperlich anspruchsvoller Arbeit, im Kundenkontakt oder in sicherheitskritischen Situationen.",
        p2: "Dieselbe Zuverlässigkeit und Liebe zum Detail bringe ich in meine Arbeit in der Informatik und Softwareentwicklung ein.",
      },
      items: [
        {
          role: "Austernzüchter",
          company: "SCEO Les Huîtres de la Côte d'Émeraude",
          period: "Juli 2022 & Juli 2023",
          tasks: [
            "Sortieren, Kalibrieren, Sieben und Verpacken von Austern.",
            "Wenden der Austernsäcke für ein gleichmäßiges Wachstum.",
          ],
        },
        {
          role: "Lagerist",
          company: "Leclerc",
          period: "Juli 2024",
          tasks: [
            "Regalauffüllung unter Einhaltung von Ordnung und Präsentation.",
            "Bestandsverwaltung: Warenkontrolle und Nachbestückung der Regale.",
          ],
        },
        {
          role: "Rettungsschwimmer",
          company: "Aquamalo",
          period: "Juli & August 2025",
          tasks: [
            "Überwachung und Sicherung der Schwimmbereiche, Vermeidung von Wassergefahren.",
            "Schnelle Reaktion auf Vorfälle, Hilfeleistung und Erste Hilfe.",
          ],
        },
        {
          role: "Full-Stack-Entwickler — Praktikum",
          company: "Combak",
          period: "April – Juni 2026",
          tasks: [
            "Entwicklung von Ask Combak, einem KI-gestützten dialogbasierten Einkaufsassistenten (Next.js, React, Claude).",
            "Full-Stack-Arbeit: Chat-UI, Konversations-API, Produktsuche und Analytics-Dashboards.",
          ],
        },
      ],
    },
    contact: {
      title: "Lassen Sie uns zusammenarbeiten",
      intro:
        "Sie haben ein Projekt, ein Praktikumsangebot oder möchten einfach über Webentwicklung und Design sprechen? Melden Sie sich gerne — ich antworte normalerweise schnell.",
      availability: "Verfügbar für Praktika, Projekte und Kooperationen.",
      location: "Ansässig in Vannes, Frankreich",
      formTitle: "Kurze Nachricht",
      formHint: "Schreiben Sie mir direkt — Ihre Nachricht landet in meinem Postfach.",
      nameLabel: "Name",
      namePlaceholder: "Ihr Name",
      emailLabel: "E-Mail",
      emailPlaceholder: "sie@beispiel.com",
      subjectLabel: "Betreff",
      subjectPlaceholder: "Praktikumsmöglichkeit, Projektidee…",
      messageLabel: "Nachricht",
      messagePlaceholder: "Erzählen Sie mir mehr über Ihr Projekt oder Ihre Idee.",
      send: "Nachricht senden",
      sending: "Senden…",
      successTitle: "Nachricht gesendet!",
      successMsg: "Danke für Ihre Nachricht — ich melde mich bald.",
      errorMsg: "Etwas ist schiefgelaufen. Bitte erneut versuchen oder mir direkt schreiben.",
    },
    footer: {
      tagline: "Web- & Mobile-Entwickler · Informatikstudent",
      social: "Soziale Netzwerke",
      navTitle: "Navigation",
      builtWith: "Erstellt mit React, TypeScript & Tailwind",
    },
    backToPortfolio: "Zurück zum Portfolio",
    firstAid: {
      title: "First Aid Application",
      badge: "Mobile-App · Akademisches Projekt",
      heading: "Rettungskräfte, Einsätze und Kompetenzen in einer mobilen App verwalten.",
      intro:
        "First Aid Application ist eine mobile App, die Organisationen bei der Verwaltung ihrer Rettungskräfte unterstützt. Sie zentralisiert Profile, Zertifizierungen und Einsätze und hilft Administratoren, die richtigen Personen anhand von Fähigkeiten und Verfügbarkeit den richtigen Einsätzen zuzuweisen.",
      meta: {
        roleLabel: "Rolle",
        role: "Full-Stack-Studentenentwickler",
        stackLabel: "Tech-Stack",
        stack: "Java · SQL · Netzwerk (DHCP / DNS)",
        focusLabel: "Schwerpunkte",
        focus: "Planung · Kompetenzverwaltung · UX",
      },
      features: [
        {
          title: "Erfahrung für Retter",
          text: "Jeder Retter hat ein eigenes Profil mit Zertifizierungen und Verfügbarkeit und behält seine Einsätze leicht im Blick.",
          items: [
            "Persönliches Dashboard mit anstehenden Einsätzen.",
            "Zertifizierungen wie PSE1, PSE2, SSA usw.",
            "Kalenderansicht zur Visualisierung der Einsätze.",
          ],
        },
        {
          title: "Admin & Planung",
          text: "Administratoren erhalten einen Gesamtüberblick über Bedarf und Ressourcen und weisen Personen strukturiert Einsätzen zu.",
          items: [
            "Dashboard mit Kennzahlen.",
            "Zuweisung nach Fähigkeiten und Verfügbarkeit.",
            "Werkzeuge zur Pflege aktueller Kompetenzdaten.",
          ],
        },
        {
          title: "Alarme & Kommunikation",
          text: "Die App hält alle mit auf Admins und Retter zugeschnittenen Alarmen und Benachrichtigungen auf dem Laufenden.",
          items: [
            "Admin-Alarme bei fehlenden Fähigkeiten oder Personalmangel.",
            "Retter-Benachrichtigungen für neue oder geänderte Einsätze.",
            "Klarer Status für jede Einsatzanfrage.",
          ],
        },
      ],
      galleryTitle: "Ein genauerer Blick auf wichtige Bildschirme",
      screens: {
        admin: {
          title: "Admin-Dashboard",
          text: "Überblick über Einsätze, verfügbare Retter und Alarme, um Probleme schnell zu erkennen.",
        },
        calendar: {
          title: "Retter-Kalender",
          text: "Monatsansicht der Einsätze, damit jeder Retter seine Verpflichtungen planen kann.",
        },
        alerts: {
          title: "Alarme & Benachrichtigungen",
          text: "Zentralisierte Alarme und Benachrichtigungen, damit Administratoren keine kritische Änderung verpassen.",
        },
      },
      takeaway: {
        p1: "Die Gestaltung dieses Projekts hat mir gezeigt, wie wichtig eine klare Informationshierarchie bei zeitkritischen Daten wie Einsätzen und Alarmen ist.",
        p2: "Ich habe mich darauf konzentriert, die Oberfläche auch auf kleinen Bildschirmen lesbar und strukturiert zu halten und gleichzeitig alle Daten anzuzeigen, die Administratoren für Entscheidungen benötigen.",
      },
      team: {
        title: "Mitwirkende",
        role: "Entwickler",
        supervisionTitle: "Betreuung",
        referentName: "Abdelbadie Belmouhcine",
        referentRole: "Betreuender Dozent",
        referentOrg: "IUT de Vannes · LabISEN",
      },
    },
    dualStudy: {
      title: "Dual",
      badge: "Mobile-App · Akademisches SAE-Projekt",
      heading: "Eine vollständig offline-fähige Android-App zur Durchführung und Bewertung von Schul-Biathlon-Einheiten.",
      intro:
        "Dual unterstützt Sportlehrer bei Schul-Biathlon-Einheiten (Laufen + Laserschießen) mit 6.- und 4.-Klassen. Entwickelt als SAE des BUT Informatik mit dem Collège Notre-Dame-La-Blanche, funktioniert die App vollständig offline auf dem Feld: Sie zentralisiert die Ergebniserfassung, automatisiert VMA-basierte Berechnungen und Schießstrafen und gibt den Schülern sofortiges Feedback.",
      meta: {
        roleLabel: "Meine Rolle",
        role: "Full-Stack-Entwickler & Kommunikationsverantwortlicher",
        stackLabel: "Tech-Stack",
        stack: "Kotlin · Jetpack Compose · Ktor · Room / SQLite",
        focusLabel: "Schwerpunkte",
        focus: "Offline-first · Echtzeit · Feldtauglichkeit",
      },
      grades: {
        label: "Projektnoten",
        s3: "Semester 3 · Prototyp",
        s4: "Semester 4 · final",
      },
      challenge: {
        title: "Die Herausforderung",
        text: "Während der Biathlon-Einheiten müssen Lehrer Rundenzeiten messen, Treffer und Fehlschüsse verfolgen, Strafen anwenden und die Distanzen an die VMA jedes Schülers anpassen — meist von Hand, was langsam und fehleranfällig ist.",
        points: [
          "Die Ergebnisse jedes Schülers an einem Ort zentralisieren.",
          "Die für die Bewertung nötigen Berechnungen automatisieren.",
          "Den Schülern sofortiges Feedback auf dem Feld geben.",
          "Ohne jede Internetabhängigkeit im Freien funktionieren.",
        ],
      },
      architecture: {
        title: "Offline-first-Netzwerkarchitektur",
        text: "Die App ist für den Einsatz im Freien ohne Internet konzipiert. Das Tablet des Lehrers fungiert als WLAN-Zugangspunkt und lokaler Server; die Schüler verbinden sich direkt damit — kein externer Server nötig.",
        points: [
          { label: "Lokaler Server", value: "Ktor in die App eingebettet" },
          { label: "Anfragen", value: "HTTP über ein Ad-hoc-WLAN" },
          { label: "Echtzeit", value: "Server-Sent Events (SSE)" },
          { label: "Speicher", value: "SQLite + Room, vollständig auf dem Gerät" },
        ],
      },
      features: [
        {
          title: "Lehrerseite",
          text: "Alles Nötige, um eine Einheit vom Feld aus durchzuführen.",
          items: [
            "Registrierung, Anmeldung und Verwaltung von Klassen & Schülern.",
            "Eine Einheit nach Typ starten (VMA-Test, Training, Abschlussprüfung).",
            "Einen QR-Code generieren, damit Schüler der Einheit beitreten.",
            "Frühere Einheiten einsehen und Ergebnisse exportieren.",
            "Lauf- & Schieß-Fortschritt jedes Schülers verfolgen.",
          ],
        },
        {
          title: "Schülerseite",
          text: "Ein fokussiertes Erlebnis für das Feld.",
          items: [
            "Einer Einheit per QR-Code-Scan beitreten.",
            "Ergebnisse je nach Einheitstyp eingeben.",
            "Die berechneten Ergebnisse sofort sehen.",
            "Frühere Einheiten nachschlagen.",
          ],
        },
        {
          title: "Unter der Haube",
          text: "Robust konzipiert für reale Bedingungen.",
          items: [
            "Vollständig offline, ohne externen Dienst.",
            "Lokale Echtzeitkommunikation über SSE.",
            "Native UI mit Jetpack Compose.",
            "Automatisierte Bewertung von VMA, Tempo & Schießeffizienz.",
          ],
        },
      ],
      galleryTitle: "Ein genauerer Blick auf wichtige Bildschirme",
      screens: {
        session: {
          title: "Eine Einheit starten",
          text: "Der Lehrer wählt eine Klasse und einen Einheitstyp — VMA-Test, Training oder Abschlussprüfung.",
        },
        qr: {
          title: "Beitritt per QR-Code",
          text: "Ein QR-Code wird generiert, damit Schüler der lokalen Einheit mit einem Scan beitreten.",
        },
        results: {
          title: "Ergebnisse & Medaillen",
          text: "Jede Leistung wird automatisch bewertet — mit Tempo, Schießeffizienz und Medaillen.",
        },
        progress: {
          title: "Fortschrittskurven",
          text: "Lauf- (% der VMA) und Schießfortschritt werden für jeden Schüler dargestellt.",
        },
      },
      team: {
        title: "Team & Kontext",
        membersTitle: "Das Team",
        supervisionTitle: "Betreuung & Kunde",
        client: {
          role: "Kunde · Sportlehrer",
          org: "Collège Notre-Dame-La-Blanche",
        },
        referent: {
          role: "Betreuender Dozent",
          org: "IUT de Vannes · IRISA",
        },
        roles: {
          scrum: "Scrum Master & Full-Stack-Entwickler",
          comm: "Kommunikationsverantwortlicher & Full-Stack-Entwickler",
          dev: "Full-Stack-Entwickler",
        },
        text: "Entwickelt am IUT de Vannes (BUT Informatik) für das Collège Notre-Dame-La-Blanche, mit dem Sportlehrer Thierry Le Goff als Kunde und Jean-François Kamp als betreuendem Dozenten. Das Entwicklerteam: Matthieu Gouelo, Marin Weis, Nolann Lescop, Glen Potay und Lucien Carré.",
        role: "In diesem Projekt war ich Full-Stack-Entwickler und Kommunikationsverantwortlicher des Teams.",
      },
      takeaway: {
        p1: "Dieses Projekt hat mir beigebracht, Software für reale, eingeschränkte Bedingungen zu entwerfen — im Freien, offline und zeitkritisch.",
        p2: "Der Aufbau eines lokalen Netzwerks mit eingebettetem Ktor-Server und SSE hat mir gezeigt, wie man mehrere Geräte in Echtzeit synchron hält — ganz ohne Cloud-Infrastruktur.",
      },
    },
    askCombak: {
      title: "Ask Combak",
      badge: "Web-App · KI · Praktikumsprojekt",
      heading: "Ein KI-Einkaufsassistent, der Nutzer zum passenden refurbished Produkt führt.",
      intro:
        "Ask Combak ist ein dialogbasierter, KI-gestützter Einkaufsassistent, den ich während meines BUT-2-Praktikums bei Combak entwickelt habe — einem Vergleichsportal für refurbished Elektronik und Haushaltsgeräte. Statt sich durch endlose Filter zu wühlen, beschreiben Nutzer einfach ihren Bedarf; der Assistent stellt die richtigen Fragen und empfiehlt dann passende Produkte und die besten Angebote, direkt auf der Website.",
      meta: {
        roleLabel: "Meine Rolle",
        role: "Full-Stack-Entwickler (Praktikum)",
        stackLabel: "Tech-Stack",
        stack: "Next.js 15 · React · TypeScript · MongoDB · Typesense · Claude",
        focusLabel: "Schwerpunkte",
        focus: "Dialog-UX · KI · Produktsuche",
      },
      context: {
        title: "Kontext",
        text: "Ich habe mein BUT-2-Praktikum bei Combak (13. April – 17. Juni 2026) als Full-Stack-Entwickler absolviert, unter der Leitung des CEO und Mitgründers. Ask Combak war eines der Hauptprojekte: ein Vergleichsportal für refurbished Technik in ein geführtes, dialogbasiertes Einkaufserlebnis zu verwandeln.",
      },
      architecture: {
        title: "Wie es funktioniert",
        text: "Ask Combak verbindet mehrere Bausteine: ein Next.js-Frontend, eine Konversations-API, das Claude-LLM, die Produktdatenbank und eine Suchmaschine — alles auf Vercel deployed.",
        points: [
          { label: "Frontend", value: "Next.js 15 · React · Ant Design" },
          { label: "Konversations-API", value: "REST-Endpunkte, die das LLM orchestrieren" },
          { label: "KI-Modell", value: "Claude (LLM)" },
          { label: "Daten & Suche", value: "MongoDB + Typesense" },
        ],
      },
      features: [
        {
          title: "Dialogbasierter Assistent",
          text: "Ein geführtes Gespräch, das bei der Entscheidung wirklich hilft.",
          items: [
            "Freundlicher Einstieg mit Vorschlägen.",
            "Klärende Fragen (Budget, Marke, Nutzung…).",
            "Natürliches Sprachverständnis dank Claude.",
            "Klare, integrierte Chat-UI mit React & Ant Design.",
          ],
        },
        {
          title: "Produktintelligenz",
          text: "Antworten, die auf echten Produktdaten beruhen.",
          items: [
            "Verbunden mit Combaks Produktdatenbank (MongoDB).",
            "Schnelle Modell- & Produktsuche mit Typesense.",
            "Empfehlungen als detaillierte Produktkarten mit Angeboten.",
            "Bestpreis- und Preisvergleich über Händler hinweg.",
          ],
        },
        {
          title: "Integration & Analytics",
          text: "Mehr als ein Chatbot — ein echtes Tool auf der Website.",
          items: [
            "Direkt in die Combak-Website eingebettet.",
            "Gespeicherte Listen und Preisalarme für Nutzer.",
            "Personalisierte Produktvorschläge.",
            "Nutzungs-Tracking und Dashboards zur Adoption.",
          ],
        },
      ],
      galleryTitle: "Ein genauerer Blick auf wichtige Bildschirme",
      screens: {
        site: {
          title: "In die Website eingebettet",
          text: "Der Assistent lebt direkt auf der Combak-Website, neben dem Produktkatalog.",
        },
        chat: {
          title: "Geführtes Gespräch",
          text: "Er stellt die richtigen Fragen — Budget, Marke, Nutzung — um den Bedarf zu verstehen.",
        },
        reco: {
          title: "Smarte Empfehlungen",
          text: "Er erklärt seine Logik und zeigt passende Produkte mit den besten Angeboten.",
        },
        suggestions: {
          title: "Personalisierte Vorschläge",
          text: "Maßgeschneiderte Produktideen für Smartphones, Laptops und mehr.",
        },
        lists: {
          title: "Listen & Preisalarme",
          text: "Nutzer können Produkte speichern und Preise im Blick behalten.",
        },
        mobile: {
          title: "Mobil optimiert",
          text: "Das volle Erlebnis funktioniert auf dem Handy — wo am meisten eingekauft wird.",
        },
      },
      takeaway: {
        p1: "Dieses Praktikum hat mir beigebracht, ein echtes, produktionsreifes KI-Feature von A bis Z zu bauen — von der Frontend-UX über die API und die Daten bis zum Prompt-Engineering.",
        p2: "Am schwierigsten und lohnendsten war es, das LLM in echten Produktdaten zu verankern, damit der Assistent vertrauenswürdige, nützliche Empfehlungen gibt statt generischer Antworten.",
      },
    },
    splashTempo: {
      title: "SplashTempo",
      badge: "Mobile · Android (Kotlin / Jetpack Compose) · Privatprojekt",
      heading: "Ein minimalistischer Android-Intervallcoach für Schwimm- & Rettungssport mit Room-Datenbank und CSS-Tempozoonen.",
      intro:
        "SplashTempo ist eine native Android-App in Kotlin mit Jetpack Compose, Room und Coroutines. Inspiriert vom Rettungssport steuert sie Abgangszeiten mit einer gut lesbaren Stoppuhr, Audio-/Vibrationssignalen, einem CSS-Rechner und Offline-Trainingsverlauf.",
      coverAlt: "SplashTempo Android-Ansichten: Intervall-Timer, CSS-Rechner und Room-Verlauf",
      repoButton: "Repository ansehen",
      meta: {
        roleLabel: "Meine Rolle",
        role: "Solo-Android-Entwickler",
        stackLabel: "Tech-Stack",
        stack: "Kotlin · Jetpack Compose · Room · Coroutines · JUnit",
        focusLabel: "Schwerpunkt",
        focus: "Timer-Zustandsautomat · Offline-Speicher · Klare UI",
      },
      context: {
        title: "Kontext",
        text: "Als Rettungsschwimmer wollte ich eine ablenkungsfreie Beckenrand-App speziell für feste Abgangszeiten (z. B. 8x50m alle 0:55 oder 4x100m Puppenschleppen).",
      },
      architecture: {
        title: "So funktioniert es",
        text: "Ein reiner Kotlin-Zustandsautomat (IntervalTimerEngine) steuert Countdown, Wiederholungen und Splits unabhängig von Android, während Coroutines die UI aktualisieren und Einheiten in Room speichern.",
        points: [
          { label: "Timer-Engine", value: "Deterministischer Kotlin-Automat (JUnit-getestet)" },
          { label: "CSS & Zonen", value: "Critical Swim Speed & 5 Trainingszonen" },
          { label: "Persistenz", value: "Room (SQLite) + reaktiver Kotlin Flow" },
          { label: "Signale", value: "ToneGenerator-Pieptöne + Vibrations-Feedback" },
        ],
      },
      features: [
        {
          title: "Abgangszeit-Timer",
          text: "Für echtes Becken-Training gebaut.",
          items: [
            "Vorgefertigte Schwimm- & Rettungs-Sets sowie eigene Intervalle.",
            "Große Stoppuhr mit Tabellenziffern und klaren Status-Badges.",
            "Wall-Touch-Taste erfasst Schwimmzeit, Pause und /100m-Pace.",
          ],
        },
        {
          title: "CSS & Tempozoonen",
          text: "400m- & 200m-Zeiten in Zieltempos umrechnen.",
          items: [
            "Berechnet Critical Swim Speed (m/s und /100m).",
            "Erstellt 5 Zonen von Recovery bis Sprint / Rescue.",
            "Zeigt Zielzeiten für 100m und 50m.",
          ],
        },
        {
          title: "Offline-Verlauf in Room",
          text: "Jedes abgeschlossene Set wird gespeichert.",
          items: [
            "Speichert Gesamtdistanz, Schnitt, Bestzeit und /100m-Pace.",
            "Reaktiver Flow aktualisiert Gesamtumfang und Bestwerte.",
            "Funktioniert 100 % offline am Beckenrand.",
          ],
        },
        {
          title: "Saubere Architektur & CI",
          text: "Getestete Domänenlogik & automatischer APK-Build.",
          items: [
            "Domäne vom Android-Framework entkoppelt für schnelle JUnit-Tests.",
            "Schnelle Schalter für Ton und Vibration.",
            "GitHub Actions CI mit Unit-Tests und assembleDebug.",
          ],
        },
      ],
      takeaway: {
        p1: "Mit SplashTempo konnte ich meinen Sport mit sauberer Android-Architektur (Zustandsautomat, Room/Flow und Jetpack Compose) verbinden.",
        p2: "Das bewusst schlichte, kontrastreiche Design bleibt zwischen zwei Bahnen auf einen Blick lesbar.",
      },
    },
    iotAnomaly: {
      title: "IoT Anomaly Pipeline",
      badge: "Data & ML · Python / Scikit-learn / DuckDB · Privatprojekt",
      heading: "Eine End-to-End-Pipeline zur Anomalieerkennung auf IoT-Zeitreihen mit strikter Validierung, Isolation Forest, DuckDB und FastAPI.",
      intro:
        "IoT Anomaly Pipeline ist ein persönliches Data- & ML-Projekt in Python. Es erfasst Zeitreihen von Durchfluss- und IoT-Sensoren, validiert Payloads mit Pydantic v2, berechnet gleitende und zyklische Features mit Pandas, bewertet Anomalien mit Scikit-learn Isolation Forest, speichert Ergebnisse in DuckDB und erzeugt visuelle Matplotlib-Berichte.",
      coverAlt: "Visueller IoT-Anomaliebericht mit Sensordaten, gleitendem Mittelwert und markierten Ausreißern",
      repoButton: "Repository ansehen",
      meta: {
        roleLabel: "Meine Rolle",
        role: "Solo Data & ML Engineer",
        stackLabel: "Tech-Stack",
        stack: "Python · FastAPI · Scikit-learn · Pandas · DuckDB · Docker",
        focusLabel: "Schwerpunkt",
        focus: "Zeitreihen-ML · Datenvalidierung · Analytisches SQL",
      },
      context: {
        title: "Kontext",
        text: "Neben meinen LLM-Projekten wollte ich ein konkretes Data- & ML-Projekt umsetzen: verrauschte Sensordatenströme strikt validieren, Ausreißer und Ausfälle automatisch erkennen und SQL-Auswertungen über eine API bereitstellen.",
      },
      architecture: {
        title: "So funktioniert es",
        text: "Eingehende Sensor-Batches werden per Pydantic v2 validiert, mit aktuellen Werten aus DuckDB für gleitende Fenster ergänzt, von einer StandardScaler + IsolationForest-Pipeline bewertet und in DuckDB gespeichert.",
        points: [
          { label: "Ingestion & API", value: "FastAPI + Pydantic v2 mit strikten Wertebereichen" },
          { label: "Feature Engineering", value: "Gleitender Mittelwert/Std, Z-Score, Delta, zyklische Stunde" },
          { label: "ML-Scoring", value: "Scikit-learn StandardScaler + IsolationForest (joblib)" },
          { label: "SQL & Reporting", value: "Eingebettetes DuckDB + Matplotlib-Bericht" },
        ],
      },
      features: [
        {
          title: "Strikte Validierung",
          text: "Fehlerhafte Messwerte erreichen das Modell nicht.",
          items: [
            "Pydantic v2 prüft Sensor-IDs, Batterie/RSSI und endliche Werte.",
            "Ungültige oder negative Werte werden sofort mit HTTP 422 abgelehnt.",
            "Batch-Endpunkt unterstützt bis zu 10.000 Messwerte pro Anfrage.",
          ],
        },
        {
          title: "Zeitreihen-Features",
          text: "Tageszyklen sauber berücksichtigen.",
          items: [
            "Gleitender 6-Schritte-Mittelwert, Standardabweichung, Z-Score und Delta.",
            "Zyklische Stundenkodierung (hour_sin, hour_cos) für Tagesprofile.",
            "Lädt aktuelle Sensorhistorie aus DuckDB für konsistente Fenster.",
          ],
        },
        {
          title: "Isolation Forest & Schweregrad",
          text: "Unüberwachte Erkennung ohne Labels.",
          items: [
            "Trainiert auf 14 Tagen sauberer Tages-Telemetrie.",
            "Liefert kontinuierliche Scores und klassifiziert NORMAL, WARNING oder CRITICAL.",
            "Neues Training jederzeit über POST /api/v1/train möglich.",
          ],
        },
        {
          title: "DuckDB SQL & Berichte",
          text: "Anomalien abfragen und visuell prüfen.",
          items: [
            "Idempotente Speicherung per INSERT OR REPLACE in DuckDB.",
            "SQL-Zusammenfassung pro Sensor (Anzahl, Anomalierate, Durchschnitt, Max).",
            "Automatischer Matplotlib-Report mit Entscheidungsgrenze.",
          ],
        },
      ],
      takeaway: {
        p1: "Mit diesem Projekt konnte ich Datenvalidierung, Zeitreihen-Features, unüberwachtes ML und analytisches SQL in einem kompakten Python-Service verbinden.",
        p2: "Alles ist mit pytest getestet, mit ruff geprüft, in Docker verpackt und über GitHub Actions CI abgesichert.",
      },
    },
    incidentTracker: {
      title: "Incident Tracker API",
      badge: "Backend · Java / Spring Boot 3 · Privatprojekt",
      heading: "Eine produktionsnahe REST-API zur Incident-Verwaltung mit JWT-Sicherheit, PostgreSQL, Flyway-Migrationen und OpenAPI.",
      intro:
        "Incident Tracker API ist ein persönliches Backend-Projekt mit Java und Spring Boot 3. Es bietet zustandslose JWT-Authentifizierung mit rollenbasierter Zugriffskontrolle (RBAC), dynamische Filterung und Paginierung per JPA Specifications, versionierte PostgreSQL-Migrationen mit Flyway, RFC-7807-Fehlerantworten (ProblemDetail) und eine interaktive Swagger-UI-Dokumentation.",
      coverAlt: "Swagger-UI-Dokumentation der Incident Tracker API",
      repoButton: "Repository ansehen",
      meta: {
        roleLabel: "Meine Rolle",
        role: "Solo-Backend-Entwickler",
        stackLabel: "Tech-Stack",
        stack: "Java 17/21 · Spring Boot 3 · Spring Security (JWT) · PostgreSQL · Flyway · Docker",
        focusLabel: "Schwerpunkt",
        focus: "REST-API-Design · Sicherheit & RBAC · Integrationstests",
      },
      context: {
        title: "Kontext",
        text: "Ich wollte eine moderne Spring-Boot-3-Codebasis auf GitHub aufbauen, die typische Enterprise-Backend-Praktiken zeigt: zustandslose Sicherheit, strikte Schemavalidierung mit Flyway, einheitliche Fehlerformate und automatisierte Integrationstests in der CI.",
      },
      architecture: {
        title: "So funktioniert es",
        text: "Eingehende Anfragen durchlaufen einen zustandslosen JWT-Filter, erreichen versionierte REST-Controller, eine transaktionale Serviceschicht mit RBAC-Prüfungen und schließlich Spring-Data-JPA-Repositories auf PostgreSQL 16.",
        points: [
          { label: "API-Schicht", value: "Spring Boot 3, Java Records, OpenAPI 3 / Swagger UI" },
          { label: "Sicherheit", value: "Spring Security 6, BCrypt, zustandslose JWTs & RBAC" },
          { label: "Persistenz", value: "PostgreSQL 16, Spring Data JPA, Flyway-Migrationen" },
          { label: "Qualität", value: "JUnit 5 + MockMvc Integrationstests, GitHub Actions CI" },
        ],
      },
      features: [
        {
          title: "JWT & RBAC",
          text: "Rollen- und eigentumsbasierte Zugriffskontrolle.",
          items: [
            "Registrierung und Login mit HMAC-SHA256-JWT-Tokens.",
            "Methodensicherheit @PreAuthorize('hasRole(ADMIN)') für Löschvorgänge.",
            "Nur Admins, Ersteller oder zugewiesene Nutzer dürfen Incidents aktualisieren.",
          ],
        },
        {
          title: "Filterung & Paginierung",
          text: "Typsichere Abfragen mit JPA Specifications.",
          items: [
            "Kombination aus Status-, Prioritäts- und Stichwortfilter (q).",
            "Begrenzte Seitengrößen und Sortierung nach Erstellungsdatum.",
            "Endpoint /stats für aggregierte Kennzahlen nach Status und Priorität.",
          ],
        },
        {
          title: "Migrationen & RFC 7807",
          text: "Verlässliches Schema und klare Fehlerantworten.",
          items: [
            "Versionierte Flyway-SQL-Migrationen mit Hibernate ddl-auto: validate.",
            "Globaler @RestControllerAdvice mit RFC-7807-ProblemDetail-Antworten.",
            "Feldgenaue Validierungsfehler bei 400 Bad Request.",
          ],
        },
        {
          title: "Docker & CI",
          text: "Reproduzierbarer Stack und automatisierte Prüfungen.",
          items: [
            "Multi-Stage-Non-Root-Dockerfile und Docker Compose mit PostgreSQL 16.",
            "Unit- und MockMvc-Integrationstests für Auth, CRUD, Filter, Kommentare und RBAC.",
            "GitHub Actions Matrix-Tests auf Java 17 und Java 21 sowie Docker-Build.",
          ],
        },
      ],
      takeaway: {
        p1: "Mit diesem Projekt konnte ich Spring Security 6, Flyway und RFC 7807 ProblemDetail in einer klaren Schichtenarchitektur kombinieren.",
        p2: "Das Repository ist vollständig getestet, auf Englisch mit Swagger UI dokumentiert und per Docker Compose sofort startklar.",
      },
    },
    devopsLab: {
      title: "DevOps Monitoring Lab",
      badge: "DevOps · Observability as Code · Privatprojekt",
      heading: "Ein containerisierter Dienst, mit Ansible bereitgestellt und mit Prometheus und Grafana überwacht — alles als Code provisioniert.",
      intro:
        "DevOps Monitoring Lab ist ein persönliches Lernprojekt: ein Python-Dienst, der Prometheus-Metriken bereitstellt, idempotent per Ansible-Playbook ausgerollt und von Prometheus (Erfassung und Alarmregeln) sowie Grafana (automatisch provisionierte Datenquelle und Dashboard, ohne manuelle Konfiguration in der Oberfläche) überwacht wird. Ein einziger Befehl rollt den gesamten Stack aus, ein zweiter Durchlauf ändert nichts.",
      coverAlt: "Grafana-Dashboard des DevOps Monitoring Lab",
      repoButton: "Repository ansehen",
      meta: {
        roleLabel: "Meine Rolle",
        role: "Einzelprojekt (Selbststudium)",
        stackLabel: "Tech-Stack",
        stack: "Docker · Ansible · Prometheus · Grafana · Python (Flask) · GitHub Actions",
        focusLabel: "Schwerpunkt",
        focus: "Automatisierung · Monitoring & Alerting · Infrastructure as Code",
      },
      context: {
        title: "Kontext",
        text: "Ich wollte verstehen, wie ein Team Deployments automatisiert und einen Dienst beobachtbar hält. Das Lab dreht sich um Fragen, die sich DevOps-Ingenieure täglich stellen: Wie stelle ich jedes Mal gleich bereit, woran erkenne ich, dass der Dienst gesund ist, und wie werde ich gewarnt, bevor Nutzer ein Problem bemerken?",
      },
      architecture: {
        title: "So funktioniert es",
        text: "Ein Ansible-Playbook baut das Anwendungs-Image und startet drei Container in einem gemeinsamen Docker-Netzwerk. Prometheus erfasst den Dienst alle 5 Sekunden und wertet die Alarmregeln aus, Grafana fragt Prometheus ab und zeigt das Dashboard an.",
        points: [
          { label: "Dienst", value: "Flask + gunicorn in Docker, /metrics-Endpunkt" },
          { label: "Automatisierung", value: "Ansible-Rollen, Templates, Handler" },
          { label: "Metriken & Alarme", value: "Prometheus + 3 Alarmregeln" },
          { label: "Dashboards", value: "Grafana als Code provisioniert" },
        ],
      },
      features: [
        {
          title: "Instrumentierter Dienst",
          text: "RED-Metriken mit prometheus_client.",
          items: [
            "Anfragezähler nach Methode, Endpunkt und Statuscode.",
            "Latenz-Histogramm für p50 / p95 / p99.",
            "Gauge für laufende Anfragen und ein Business-Zähler.",
            "Ein Chaos-Endpunkt, um die Fehlerrate bei Bedarf zu erhöhen.",
          ],
        },
        {
          title: "Idempotentes Ansible-Deployment",
          text: "Inventar, Variablen, zwei Rollen und Handler.",
          items: [
            "Ein erneuter Playbook-Lauf meldet changed=0.",
            "Prometheus und Grafana starten nur neu, wenn sich ihre Konfiguration ändert.",
            "Die Prometheus-Konfiguration wird vor dem Deployment mit promtool validiert.",
            "Ports, Image-Versionen und Alarmschwellen liegen in group_vars.",
          ],
        },
        {
          title: "Prometheus-Alarmregeln",
          text: "Aus Jinja2-Templates erzeugt.",
          items: [
            "AppDown, wenn der Dienst die Erfassung nicht mehr beantwortet.",
            "HighErrorRate, wenn mehr als 10 % der Antworten 5xx sind.",
            "HighLatencyP95, wenn die p95-Latenz 0,5 s überschreitet.",
          ],
        },
        {
          title: "Grafana als Code",
          text: "Keine manuelle Konfiguration in der Oberfläche.",
          items: [
            "Prometheus-Datenquelle aus einem Template provisioniert.",
            "Dashboard-JSON von einem Skript erzeugt und versioniert.",
            "Panels für Durchsatz, Fehler, Latenz, Jobs, Verfügbarkeit und aktive Alarme.",
          ],
        },
      ],
      alerting: {
        title: "Alarmierung in Aktion",
        text: "Werden 60 % Fehler erzwungen und Traffic erzeugt, wechselt die Regel HighErrorRate von pending zu firing, wie unten in Prometheus zu sehen.",
        alt: "Prometheus-Alarmseite mit HighErrorRate im Zustand firing",
      },
      takeaway: {
        p1: "Dieses Projekt hat mir gezeigt, Deployment und Monitoring als Code zu behandeln: reproduzierbar, prüfbar und testbar. Das Repository ist Schritt für Schritt dokumentiert und besitzt eine GitHub-Actions-Pipeline mit Tests, Lintern und einer Prüfung der Prometheus-Konfiguration.",
        p2: "Am lehrreichsten war es, das Playbook wirklich idempotent zu machen und die Konfiguration zu validieren, bevor sie die laufenden Dienste erreicht — und einen Alarm von pending zu firing wechseln zu sehen, ausgelöst durch eine selbst instrumentierte Metrik.",
      },
    },
    mongolingo: {
      title: "Mongolingo",
      badge: "Web-App · Bildung · Studienprojekt (R4.03)",
      heading: "Eine Web-App im Duolingo-Stil zum Erlernen von MongoDB-Abfragen — praxisnah und progressiv.",
      intro:
        "Mongolingo ist eine interaktive, von Duolingo inspirierte Web-App zum Erlernen von MongoDB-Abfragen. Allein für das NoSQL-Modul R4.03 entwickelt, bietet sie 30 progressive Aufgaben vom Anfänger bis zum sehr komplexen Niveau. Jede Abfrage wird in Echtzeit auf einer lokalen MongoDB ausgeführt, mit dem erwarteten Ergebnis verglichen und durch eine ausführliche Erklärung ergänzt — für ein zugänglicheres und interaktiveres NoSQL-Lernen.",
      meta: {
        roleLabel: "Meine Rolle",
        role: "Alleinentwickler (Studienprojekt)",
        stackLabel: "Tech-Stack",
        stack: "React · Vite · Node · Express · MongoDB",
        focusLabel: "Schwerpunkte",
        focus: "NoSQL-Lernen · Live-Abfrageausführung · Daten-Tooling",
      },
      context: {
        title: "Kontext",
        text: "Mongolingo war das Einzelprojekt des Moduls R4.03 — „Qualität jenseits des Relationalen“ — am IUT Vannes. Die Aufgabe: eine React-Anwendung bauen, nach dem Duolingo-Prinzip, aber für MongoDB-Abfragen, mit mindestens 30 Aufgaben steigender Schwierigkeit, jede erklärt und auf der Datenbank ausgeführt, plus eine Möglichkeit, die Sammlungen zu durchsuchen und Daten in JSON und BSON zu importieren / zu sichern.",
      },
      architecture: {
        title: "Wie es funktioniert",
        text: "Ein React-Frontend kommuniziert mit einer eingebetteten Express-API, die die Abfragen des Nutzers auf einer lokalen MongoDB-Instanz ausführt und die Ergebnisse in Echtzeit zurückgibt.",
        points: [
          { label: "Frontend", value: "React + Vite" },
          { label: "Backend", value: "Node + Express-API" },
          { label: "Datenbank", value: "MongoDB (lokal)" },
          { label: "Datenformate", value: "JSON + BSON" },
        ],
      },
      features: [
        {
          title: "Interaktives Quiz",
          text: "Lernen durch Tun, mit sofortigem Feedback.",
          items: [
            "30 MongoDB-Aufgaben vom Anfänger bis sehr komplex.",
            "Abfragen live auf der Datenbank ausgeführt.",
            "Vergleich mit dem erwarteten Ergebnis.",
            "Eine ausführliche Erklärung für jede Lösung.",
          ],
        },
        {
          title: "Sammlungen & Schemas",
          text: "Die abgefragten Daten verstehen.",
          items: [
            "Durchsuchen der Sammlungen users, orders und lessons.",
            "Demo-Daten beim ersten Start automatisch geladen.",
            "JSON-Schema-Definitionen für jede Sammlung.",
          ],
        },
        {
          title: "Import / Export",
          text: "Daten direkt über die Oberfläche bearbeiten.",
          items: [
            "Import von Daten in JSON oder BSON.",
            "Export der Sammlungen.",
            "Zurücksetzen auf die Demo-Daten.",
          ],
        },
        {
          title: "Backups",
          text: "Arbeit sichern und wiederherstellen.",
          items: [
            "Benannte Backups erstellen.",
            "Gespeichert als JSON und Base64-BSON.",
            "Wiederherstellung mit einem Klick.",
          ],
        },
      ],
      galleryTitle: "Ein Blick in die App",
      takeaway: {
        p1: "Dieses Projekt ließ mich eine komplette Web-Anwendung von A bis Z bauen und gleichzeitig mein Verständnis von NoSQL und MongoDB-Abfragen vertiefen.",
        p2: "Die spannendste Herausforderung war, 30 Fragen mit einer wirklich progressiven Schwierigkeitskurve zu gestalten und jede Abfrage sicher auf der laufenden Datenbank auszuführen.",
      },
    },
};

export const translations: Record<Lang, Dict> = { en, fr, de };
