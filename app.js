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
    hero_bio: "Platform Lead y arquitecto de soluciones con <strong>+14 años de trayectoria</strong> construyendo plataformas cloud empresariales, autoservicio para desarrolladores (DevEx) y arquitecturas distribuidas resilientes. Enfocado en la gobernanza de costes (FinOps), seguridad Zero-Trust y automatización GitOps.",
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
    arch_box_1_title: "Frameworks Core Node.js & DevEx",
    arch_box_1_desc: "Diseño de frameworks internos en Node.js/TypeScript, scaffolding corporativo, SDKs comunes y autoservicio para acelerar squads.",
    arch_box_2_title: "Cilium eBPF & Cloud Native Mesh",
    arch_box_2_desc: "Redes Kubernetes de ultra-baja latencia con eBPF, observabilidad de flujo con Hubble, seguridad a nivel kernel y AWS EKS.",
    arch_box_3_title: "Edge Gateways (APISIX & Traefik)",
    arch_box_3_desc: "Enrutamiento dinámico cloud-native con Apache APISIX y Traefik, integración de plugins y federación con Keycloak IAM.",
    arch_box_4_title: "SRE, Telemetría & FinOps",
    arch_box_4_desc: "Observabilidad con OpenTelemetry, Datadog y Prometheus, garantía de SLAs y optimización de costes cloud.",
    timeline_section_label: "EXPERIENCIA",
    timeline_section_heading: "Evolución Profesional",
    present: "Presente",
    exp_universia_lead: "Liderazgo transversal del equipo de platform engineering (infraestructura cloud, datos y arquitectura core). Diseño de framework interno en Node.js, definición del roadmap técnico, plataformas de autoservicio (DevEx), redes eBPF/Cilium y gobernanza FinOps.",
    exp_universia_sre: "Garantía de fiabilidad y observabilidad integral con Prometheus, Grafana y Datadog en microservicios productivos.",
    exp_kairos: "Diseño de plataforma de microservicios (Node.js con REST y gRPC), clústeres de Kubernetes en AWS gestionados con Helm, Service Mesh con Istio, gestión de identidades corporativas con Keycloak y Kong Gateway.",
    role_dia: "Arquitecto Frontend & QA",
    exp_dia: "Evolución hacia Web Components y Angular, testing de mutación (Pitest), Error-Prone y soporte a servicios Java 8 / Spring 4.",
    exp_atos: "POC para Endesa en detección de fraude eléctrico con Big Data. Backend en Scala (Scalatra, Slick), front en AngularJS y Oracle PL/SQL.",
    projects_section_label: "CÓDIGO & PLATAFORMAS",
    projects_section_heading: "Proyectos & Arquitecturas",
    filter_all: "Todos",
    filter_opensource: "Open Source",
    filter_platform: "Plataforma Cloud",
    filter_security: "IAM & Seguridad",
    proj_portfolio_desc: "Portfolio web de ingeniería y showcase de arquitectura. Estética craft sin dependencias, telemetría con GTM y despliegue continuo con GitHub Actions.",
    proj_nodejs_fw_title: "Enterprise Node.js Core Framework & DevEx SDK",
    proj_nodejs_fw_desc: "Diseño y arquitectura de framework interno en Node.js/TypeScript: abstracción de OpenTelemetry, middleware de autenticación, observabilidad y resiliencia para squads.",
    proj_cilium_edge_title: "Next-Gen Ingress & eBPF Mesh (Cilium + APISIX / Traefik)",
    proj_cilium_edge_desc: "Arquitectura de red de alto rendimiento sobre Kubernetes: CNI y seguridad basada en eBPF con Cilium, observabilidad Hubble y balanceo perimetral dinámico con APISIX y Traefik.",
    proj_iam_mesh_title: "Zero-Trust IAM & Service Mesh Architecture",
    proj_iam_mesh_desc: "Arquitectura de referencia para gobernanza de identidades (Keycloak SSO), control perimetral y mTLS en Kubernetes con Istio Service Mesh.",
    proj_event_title: "High-Throughput Distributed Event Streams",
    proj_event_desc: "Diseño de microservicios desacoplados de alto rendimiento con Apache Kafka, Redis cluster y gRPC para plataformas corporativas multi-tenant.",
    proj_gitops_title: "Cloud-Native Platform Scaffolding & GitOps",
    proj_gitops_desc: "Estandarización de infraestructura y charts de Helm sobre AWS EKS con compliance bancario, observabilidad Prometheus y pipelines CI/CD automatizados.",
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
    hero_bio: "Platform Lead and Solutions Architect with <strong>14+ years of experience</strong> building enterprise cloud platforms, developer enablement ecosystems (DevEx), and resilient distributed architectures. Focused on cloud cost governance (FinOps), Zero-Trust security, and automated GitOps.",
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
    arch_box_1_title: "Enterprise Node.js Core & DevEx",
    arch_box_1_desc: "Internal Node.js/TypeScript framework design, corporate scaffolding, shared SDKs, and developer self-service platforms.",
    arch_box_2_title: "Cilium eBPF & Cloud Native Mesh",
    arch_box_2_desc: "Ultra low-latency Kubernetes networking via eBPF, Hubble flow observability, kernel-level security, and AWS EKS.",
    arch_box_3_title: "Edge Gateways (APISIX & Traefik)",
    arch_box_3_desc: "High-performance cloud-native dynamic routing with Apache APISIX and Traefik, plugin pipelines, and Keycloak IAM federation.",
    arch_box_4_title: "SRE, Telemetry & FinOps",
    arch_box_4_desc: "End-to-end observability with OpenTelemetry, Datadog, and Prometheus, SLA/SLI enforcement, and cloud cost governance.",
    timeline_section_label: "EXPERIENCE",
    timeline_section_heading: "Career Journey",
    present: "Present",
    exp_universia_lead: "Cross-functional leadership of the platform engineering team (cloud platform, data infrastructure, and core backend). Enterprise Node.js framework architecture, technical roadmap definition, developer experience (DevEx), eBPF/Cilium networking, and FinOps governance.",
    exp_universia_sre: "Ensuring reliability and end-to-end observability with Prometheus, Grafana, and Datadog across production microservices.",
    exp_kairos: "Design of microservices platform (Node.js with REST & gRPC), Kubernetes clusters on AWS managed via Helm, Service Mesh with Istio, enterprise IAM with Keycloak, and Kong Gateway.",
    role_dia: "Frontend Architect & QA Specialist",
    exp_dia: "Evolution towards Web Components and Angular, mutation testing (Pitest), Error-Prone, and Java 8 / Spring 4 backend support.",
    exp_atos: "Endesa Big Data POC for power fraud detection. Backend in Scala (Scalatra, Slick), frontend in AngularJS, and Oracle PL/SQL procedures.",
    projects_section_label: "CODE & PLATFORMS",
    projects_section_heading: "Projects & Architectures",
    filter_all: "All",
    filter_opensource: "Open Source",
    filter_platform: "Cloud Platform",
    filter_security: "IAM & Security",
    proj_portfolio_desc: "Engineering portfolio & architectural showcase. Zero-dependency craft aesthetic, GTM telemetry, and automated GitHub Actions CI/CD.",
    proj_nodejs_fw_title: "Enterprise Node.js Core Framework & DevEx SDK",
    proj_nodejs_fw_desc: "Design and architecture of internal Node.js/TypeScript core framework: OpenTelemetry abstraction, authentication middleware, error handling, and resilience for engineering squads.",
    proj_cilium_edge_title: "Next-Gen Ingress & eBPF Mesh (Cilium + APISIX / Traefik)",
    proj_cilium_edge_desc: "High-throughput Kubernetes networking architecture: eBPF-powered CNI and security via Cilium, Hubble observability, and dynamic edge routing with APISIX and Traefik.",
    proj_iam_mesh_title: "Zero-Trust IAM & Service Mesh Architecture",
    proj_iam_mesh_desc: "Reference architecture for enterprise identity governance (Keycloak SSO), perimeter routing, and mTLS on Kubernetes via Istio Service Mesh.",
    proj_event_title: "High-Throughput Distributed Event Streams",
    proj_event_desc: "Decoupled high-performance microservices architecture with Apache Kafka, Redis cluster, and gRPC for multi-tenant enterprise platforms.",
    proj_gitops_title: "Cloud-Native Platform Scaffolding & GitOps",
    proj_gitops_desc: "Infrastructure standardization and Helm scaffolding on AWS EKS with banking compliance, Prometheus observability, and automated CI/CD.",
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

  // Desregistrar Service Workers antiguos de Angular (evita problemas de caché con la versión anterior)
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.getRegistrations().then(registrations => {
      for (const registration of registrations) {
        registration.unregister();
      }
    });
  }

  // 7. Developer Console Signature
  console.log(
    '%c alexagc %c Platform Lead & Solutions Architect · SRE ',
    'background: #18181b; color: #00f5d4; font-family: monospace; font-size: 11px; padding: 4px 8px; border: 1px solid #27272a; border-radius: 4px;',
    'background: transparent; color: #888888; font-family: sans-serif; font-size: 11px;'
  );
});
