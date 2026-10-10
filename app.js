/**
 * Alejandro Gómez Canal — Portfolio Engine & Telemetry Suite (2025/2026)
 * Features: Multilingual i18n, Google Analytics 4 Event Tracking, Project Filters, Print CV
 */

const translations = {
  es: {
    nav_about: "Sobre Mí",
    nav_case_study: "Casos de Éxito",
    nav_architecture: "Arquitectura",
    nav_experience: "Trayectoria",
    nav_projects: "Proyectos",
    hero_status: "Platform Lead @ Universia · Madrid",
    hero_bio: "Ingeniero de software y arquitecto de soluciones con <strong>+14 años de trayectoria</strong> diseñando plataformas cloud distribuidas, gobernanza de identidades y sistemas de alta concurrencia. Enfocado en la resiliencia técnica, la estandarización y el impacto en equipos de ingeniería.",
    copy_email: "Copiar alexcanal@gmail.com",
    copied_email: "✓ Copiado al portapapeles",
    print_cv: "Descargar CV (PDF)",
    casestudy_section_label: "ARQUITECTURA EN PRODUCCIÓN",
    casestudy_section_heading: "Caso de Estudio: Plataforma Cloud & Ecosistema IAM",
    casestudy_badge: "PROYECTO CRÍTICO · BANCO SANTANDER ECOSYSTEM",
    casestudy_title: "Modernización de Plataforma de Identidad y Malla de Servicios Multi-Tenant",
    casestudy_summary: "Diseño e implantación de una arquitectura de plataforma Zero-Trust para unificar el acceso corporativo, federación de identidades y microservicios con alta concurrencia.",
    metric_sla: "Disponibilidad en picos",
    metric_latency: "Latencia p99 Auth/Gateway",
    metric_time: "Tiempo de despliegue (GitOps)",
    metric_reqs: "Peticiones mensuales gestionadas",
    case_challenge_title: "⚠️ El Desafío",
    case_challenge_desc: "Fragmentación de sistemas de autenticación legacy, cuellos de botella en el gateway centralizado ante picos masivos de matrícula universitaria y necesidad de auditoría de seguridad bancaria estricta.",
    case_solution_title: "⚡ Arquitectura Implementada",
    case_solution_desc: "Federación de identidad con Keycloak (OIDC/OAuth2) desacoplada con clúster Redis, malla de servicios Istio para mTLS y observabilidad integral en Kubernetes (AWS EKS), con Kong Gateway perimetral.",
    case_impact_title: "🎯 Impacto Técnico & Negocio",
    case_impact_desc: "Estandarización de plantillas Helm y pipelines CI/CD que redujeron el onboarding de nuevos microservicios a minutos con compliance de seguridad automático.",
    bento_meta_arch: "01 / ARQUITECTURA",
    bento_title_arch: "Especialización de Plataforma",
    bento_desc_arch: "Liderazgo y diseño de sistemas distribuidos empresariales combinando infraestructura Cloud Native, seguridad perimetral y desarrollo ágil.",
    bento_meta_exp: "02 / TRAYECTORIA",
    bento_stat_label: "Años en ingeniería de software",
    bento_sub_stat: "De desarrollo frontend en 2012 a Platform Lead en 2026.",
    bento_meta_principles: "03 / PRINCIPIOS",
    bento_title_principles: "Criterio Técnico",
    principle_1: "<strong>Estandarización:</strong> Frameworks y scaffolding comunes para multiplicar la velocidad del equipo.",
    principle_2: "<strong>Automatización:</strong> Todo proceso manual repetitivo se codifica en pipelines CI/CD o charts de Helm.",
    principle_3: "<strong>Observabilidad:</strong> Telemetría y métricas antes de escalar para prevenir fallos proactivamente.",
    bento_meta_systems: "04 / SISTEMAS CRÍTICOS",
    arch_box_1_title: "Cloud & Kubernetes",
    arch_box_1_desc: "Orquestación en producción en AWS con Helm, Kops, Ansible y mTLS mediante Istio.",
    arch_box_2_title: "Identidad & Seguridad",
    arch_box_2_desc: "SSO corporativo, federación OIDC/OAuth 2.0 con Keycloak y protección perimetral con Kong.",
    arch_box_3_title: "Microservicios & Eventos",
    arch_box_3_desc: "APIs de baja latencia con gRPC, Node.js, Go y streaming distribuido desacoplado con Kafka.",
    arch_box_4_title: "SRE & Resiliencia",
    arch_box_4_desc: "Monitorización en Prometheus/Grafana, mutation testing con Pitest y control SonarQube.",
    timeline_section_label: "EXPERIENCIA",
    timeline_section_heading: "Evolución Profesional",
    present: "Presente",
    exp_universia_lead: "Liderazgo transversal del equipo de plataforma (perfiles de ingeniería de datos, infraestructura cloud y desarrollo). Definición de la estrategia técnica, arquitecturas de referencia y soporte continuo a la escalabilidad operativa.",
    exp_universia_sre: "Garantía de fiabilidad, observabilidad con Prometheus/Grafana y resiliencia de servicios productivos en la nube.",
    exp_kairos: "Diseño de plataforma de microservicios (Node.js con REST y gRPC), clústeres de Kubernetes en AWS gestionados con Helm, Service Mesh con Istio, gestión de identidades corporativas con Keycloak y Kong Gateway.",
    role_dia: "Arquitecto Frontend & QA",
    exp_dia: "Evolución hacia Web Components y Angular, testing de mutación (Pitest), Error-Prone y soporte a servicios Java 8 / Spring 4.",
    exp_atos: "POC para Endesa en detección de fraude eléctrico con Big Data. Backend en Scala (Scalatra, Slick), front en AngularJS y Oracle PL/SQL.",
    projects_section_label: "CÓDIGO & REPOSITORIOS",
    projects_section_heading: "Proyectos Destacados",
    filter_all: "Todos",
    filter_cloud: "Cloud & Infra",
    filter_backend: "Backend & APIs",
    filter_perf: "SRE & Profiling",
    proj_oauth_desc: "Servidor OAuth 2.0 modular en Node.js con almacenamiento de tokens en Redis y Docker.",
    proj_perf_desc: "Benchmarks y profiling del event loop para optimizar rendimiento y memoria en Node.",
    proj_go_desc: "Laboratorio en Golang enfocado en patrones concurrentes, canales y rendimiento nativo.",
    proj_gitflow_desc: "Contenedor Alpine ligero con utilidades para flujos de ramificación GitFlow en pipelines de CI/CD.",
    connect_title: "¿Conversamos?",
    connect_desc: "Siempre con interés en intercambiar perspectivas sobre ingeniería de plataforma, Kubernetes, sistemas distribuidos o retos técnicos.",
    connect_linkedin: "Perfil de LinkedIn ↗"
  },
  en: {
    nav_about: "About",
    nav_case_study: "Case Studies",
    nav_architecture: "Architecture",
    nav_experience: "Experience",
    nav_projects: "Projects",
    hero_status: "Platform Lead @ Universia · Madrid, Spain",
    hero_bio: "Software Engineer and Solutions Architect with <strong>14+ years of experience</strong> designing distributed cloud platforms, enterprise identity governance, and high-throughput systems. Focused on technical resilience, standardization, and engineering team enablement.",
    copy_email: "Copy alexcanal@gmail.com",
    copied_email: "✓ Copied to clipboard",
    print_cv: "Download CV (PDF)",
    casestudy_section_label: "PRODUCTION ARCHITECTURE",
    casestudy_section_heading: "Case Study: Cloud Platform & IAM Ecosystem",
    casestudy_badge: "MISSION CRITICAL · BANCO SANTANDER ECOSYSTEM",
    casestudy_title: "Multi-Tenant Identity Modernization & Service Mesh Architecture",
    casestudy_summary: "Design and implementation of a Zero-Trust platform architecture unifying enterprise access, identity federation, and high-throughput microservices.",
    metric_sla: "Peak Availability",
    metric_latency: "p99 Auth/Gateway Latency",
    metric_time: "Deployment Lead Time (GitOps)",
    metric_reqs: "Monthly Requests Handled",
    case_challenge_title: "⚠️ The Challenge",
    case_challenge_desc: "Legacy authentication fragmentation, centralized gateway bottlenecks during university enrollment spikes, and rigorous banking security compliance requirements.",
    case_solution_title: "⚡ Architecture Implemented",
    case_solution_desc: "Keycloak OIDC/OAuth2 federation decoupled via Redis cluster, Istio Service Mesh for mTLS and end-to-end telemetry on Kubernetes (AWS EKS), with perimeter Kong Gateway.",
    case_impact_title: "🎯 Technical & Business Impact",
    case_impact_desc: "Standardized Helm charts and CI/CD pipelines reducing new microservices onboarding to minutes with automated banking security compliance.",
    bento_meta_arch: "01 / ARCHITECTURE",
    bento_title_arch: "Platform Engineering",
    bento_desc_arch: "Enterprise-grade distributed systems design blending Cloud Native infrastructure, perimeter security, and developer velocity.",
    bento_meta_exp: "02 / CAREER",
    bento_stat_label: "Years in software engineering",
    bento_sub_stat: "From frontend development in 2012 to Platform Lead in 2026.",
    bento_meta_principles: "03 / PRINCIPLES",
    bento_title_principles: "Engineering Mindset",
    principle_1: "<strong>Standardization:</strong> Shared frameworks and scaffolding to compound engineering velocity.",
    principle_2: "<strong>Automation:</strong> Every repetitive manual process is encoded into CI/CD pipelines or Helm charts.",
    principle_3: "<strong>Observability:</strong> Telemetry and metrics before scaling to proactively catch bottlenecks.",
    bento_meta_systems: "04 / CRITICAL SYSTEMS",
    arch_box_1_title: "Cloud & Kubernetes",
    arch_box_1_desc: "Production orchestration on AWS with Helm, Kops, Ansible, and mTLS via Istio.",
    arch_box_2_title: "Identity & Security",
    arch_box_2_desc: "Enterprise SSO, OIDC/OAuth 2.0 federation with Keycloak, and perimeter routing with Kong.",
    arch_box_3_title: "Microservices & Events",
    arch_box_3_desc: "Low-latency APIs with gRPC, Node.js, Go, and decoupled event-driven streaming with Kafka.",
    arch_box_4_title: "SRE & Resilience",
    arch_box_4_desc: "Telemetry with Prometheus/Grafana, mutation testing via Pitest, and SonarQube quality gates.",
    timeline_section_label: "EXPERIENCE",
    timeline_section_heading: "Career Journey",
    present: "Present",
    exp_universia_lead: "Cross-functional leadership of the platform engineering team (data, cloud infrastructure, and core backend). Technical roadmap definition, reference architectures, and operational scalability.",
    exp_universia_sre: "Ensuring reliability, observability with Prometheus/Grafana, and operational resilience of cloud production services.",
    exp_kairos: "Design of microservices platform (Node.js with REST & gRPC), Kubernetes clusters on AWS managed via Helm, Service Mesh with Istio, enterprise IAM with Keycloak, and Kong Gateway.",
    role_dia: "Frontend Architect & QA Specialist",
    exp_dia: "Evolution towards Web Components and Angular, mutation testing (Pitest), Error-Prone, and Java 8 / Spring 4 backend support.",
    exp_atos: "Endesa Big Data POC for power fraud detection. Backend in Scala (Scalatra, Slick), frontend in AngularJS, and Oracle PL/SQL procedures.",
    projects_section_label: "CODE & REPOSITORIES",
    projects_section_heading: "Featured Projects",
    filter_all: "All",
    filter_cloud: "Cloud & Infra",
    filter_backend: "Backend & APIs",
    filter_perf: "SRE & Profiling",
    proj_oauth_desc: "Modular OAuth 2.0 server built in Node.js with Redis token persistence and Docker containerization.",
    proj_perf_desc: "Event loop profiling, stress testing, and concurrency benchmarks in Node.js.",
    proj_go_desc: "Golang sandbox exploring channels, goroutines, and native runtime concurrency.",
    proj_gitflow_desc: "Lightweight Alpine Docker image with GitFlow branching automation for CI/CD pipelines.",
    connect_title: "Let's connect",
    connect_desc: "Always open to discussing platform engineering, Kubernetes, distributed systems, or emerging tech challenges.",
    connect_linkedin: "LinkedIn Profile ↗"
  }
};

/**
 * Telemetry Dispatcher: sends custom events to Google Tag Manager (GTM dataLayer)
 */
function trackEvent(eventName, eventParams = {}) {
  try {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: eventName,
      ...eventParams
    });

    if (typeof window.gtag === 'function') {
      window.gtag('event', eventName, eventParams);
    }

    // Safe console logging for local testing
    if (window.location.hostname === 'localhost' || window.location.protocol === 'file:') {
      console.log(`[GTM Event: GTM-PCZWFVXL] ${eventName}`, eventParams);
    }
  } catch (err) {
    console.debug('Telemetry error suppressed', err);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  // 1. Language State & Localization Engine
  let currentLang = localStorage.getItem('preferred-lang') || (navigator.language.startsWith('es') ? 'es' : 'en');

  const applyLanguage = (lang) => {
    currentLang = lang;
    localStorage.setItem('preferred-lang', lang);
    document.documentElement.lang = lang;

    // Update switcher buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });

    // Translate DOM elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang] && translations[lang][key]) {
        el.innerHTML = translations[lang][key];
      }
    });
  };

  // Switch handlers
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.getAttribute('data-lang');
      applyLanguage(lang);
      trackEvent('switch_language', { target_language: lang });
    });
  });

  // Apply initial language
  applyLanguage(currentLang);

  // 2. Mouse Spotlight Tracker (Desktop only)
  const spotlight = document.getElementById('cursor-spotlight');
  if (spotlight && window.matchMedia('(pointer: fine)').matches) {
    window.addEventListener('mousemove', (e) => {
      spotlight.style.left = `${e.clientX}px`;
      spotlight.style.top = `${e.clientY}px`;
    });
  }

  // 3. Click-to-copy Email Button
  const copyBtn = document.getElementById('copy-email-btn');
  const copyText = document.getElementById('copy-text');
  
  if (copyBtn && copyText) {
    copyBtn.addEventListener('click', async () => {
      const email = copyBtn.getAttribute('data-email');
      try {
        await navigator.clipboard.writeText(email);
        copyText.textContent = translations[currentLang].copied_email;
        copyBtn.style.background = '#10b981';
        copyBtn.style.color = '#ffffff';

        trackEvent('copy_email', { email: email });

        setTimeout(() => {
          copyText.innerHTML = translations[currentLang].copy_email;
          copyBtn.style.background = '#ffffff';
          copyBtn.style.color = '#000000';
        }, 2200);
      } catch (err) {
        window.location.href = `mailto:${email}`;
      }
    });
  }

  // 4. Download / Print CV Button (Executive PDF format via @media print)
  const printBtn = document.getElementById('print-cv-btn');
  if (printBtn) {
    printBtn.addEventListener('click', () => {
      trackEvent('print_cv', { language: currentLang });
      window.print();
    });
  }

  // 5. Interactive Project Filtering
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectItems = document.querySelectorAll('.project-item');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');
      trackEvent('filter_projects', { category: filter });

      projectItems.forEach(item => {
        const categories = (item.getAttribute('data-category') || '').split(' ');
        if (filter === 'all' || categories.includes(filter)) {
          item.classList.remove('hidden-project');
        } else {
          item.classList.add('hidden-project');
        }
      });
    });
  });

  // 6. Outbound Link Tracking (LinkedIn, GitHub, Repos)
  document.querySelectorAll('.tracking-outbound').forEach(link => {
    link.addEventListener('click', () => {
      const trackingId = link.getAttribute('data-tracking') || 'external_link';
      trackEvent('outbound_click', {
        link_id: trackingId,
        url: link.href
      });
    });
  });

  // 7. Developer Console Signature
  console.log(
    '%c alexagc %c Platform Lead & Solutions Architect · SRE ',
    'background: #18181b; color: #00f5d4; font-family: monospace; font-size: 11px; padding: 4px 8px; border: 1px solid #27272a; border-radius: 4px;',
    'background: transparent; color: #888888; font-family: sans-serif; font-size: 11px;'
  );
});
