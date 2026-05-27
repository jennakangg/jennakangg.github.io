const site = {
  title: "From Human Vision to Machine Vision",
  shortTitle: "HVMV",
  subtitle:
    "A half-day workshop on bringing together researchers across human vision, machine vision, computer graphics, XR, computational displays, and visual perception.",
  event: "SIGGRAPH 2026 Technical Workshop",
  eventLine: "Thursday, July 23 • 9:00 AM - 12:15 PM",
  venue: "Los Angeles Convention Center",
  room: "Room 406 AB",
  posterNote:
    "Bridging biological and computational visual systems through shared questions, methods, and visual computing applications.",
  overviewTitle: "Why this workshop?",
  overview:
    "Human vision and machine vision often study the same underlying phenomenon through different methods and different research cultures. This workshop is designed to create more direct cross-talk between them.",
  overviewBullets: [
    "Biologically grounded and data-driven approaches",
    "Human perception for graphics, displays, and XR",
    "Interpretability and robustness in machine vision",
    "New collaborations across visual computing",
  ],
  meta: ["Workshop acronym: HVMV", "Edition: 1st", "Format: Half-day"],
  about: [
    "Visual computing spans rendering, displays, reconstruction, modeling, and recorded visual data. Within that space, human vision research focuses on understanding how people see and how that knowledge can improve realism, immersion, responsiveness, and interaction. Machine vision research focuses on computational systems that perform visual perception tasks such as reconstruction, scene understanding, neural rendering, SLAM, action recognition, and vision-language modeling.",
    "Although both communities investigate visual perception, they often operate separately. This workshop argues that stronger connections between them can produce better computational models, better perceptual tools for graphics and displays, and more interpretable machine vision systems. The goal is a deeper, interdisciplinary conversation about how each field can directly inform the other.",
  ],
  topics: [
    {
      title: "Neural Networks as Models of Human Vision",
      body:
        "How machine learning systems can serve as computational models of human visual processing and what these comparisons reveal about visual cognition.",
    },
    {
      title: "Perceptually Optimized Rendering and Displays",
      body:
        "Rendering pipelines and display systems designed around subjective human perception, especially for immersive systems.",
    },
    {
      title: "Interpretable Machine Vision",
      body:
        "Using human-vision-inspired metrics and architectures to better understand the capabilities and limitations of machine vision systems.",
    },
    {
      title: "Graphics for Studying Human Vision",
      body:
        "Using controlled, realistic visual stimuli from computer graphics to study more complex aspects of human perception.",
    },
    {
      title: "Collaboration Across Fields",
      body:
        "New opportunities, open problems, and practical barriers in interdisciplinary work across human and machine vision.",
    },
    {
      title: "Broader Impacts and Ethics",
      body:
        "Accessibility, trust, deepfakes, algorithmic bias, and the social implications of increasingly capable visual AI systems.",
    },
  ],
  agenda: [
    ["9:00 AM - 9:05 AM", "Opening remarks"],
    ["9:05 AM - 9:35 AM", "Talk 1"],
    ["9:35 AM - 10:05 AM", "Talk 2"],
    ["10:05 AM - 10:20 AM", "Q&A discussion"],
    ["10:20 AM - 10:50 AM", "Talk 3"],
    ["10:50 AM - 11:20 AM", "Talk 4"],
    ["11:20 AM - 11:40 AM", "Q&A discussion"],
    ["11:40 AM - 11:45 AM", "Break / setup for open discussion"],
    ["11:45 AM - 12:15 PM", "Moderated discussion"],
  ],
  agendaNote:
    "The workshop proposal describes keynote talks, audience questions, and a moderated discussion designed to encourage cross-pollination between the two research communities.",
  speakers: [
    {
      id: "speaker-rafal",
      name: "Rafal Mantiuk",
      role: "University of Cambridge",
      photo: "./speakers/rafal.jpg",
      photoPosition: "center 24%",
      photoScale: 1.4,
      photoOffsetY: "-8%",
      bio:
        "Works across psychophysics, applied visual perception, computational displays, image and video quality, and perceptual rendering. His work directly engages the question of how foundation models align with biological vision.",
    },
    {
      id: "speaker-laurie",
      name: "Laurie Wilcox",
      role: "York University",
      photo: "./speakers/laurie.webp",
      photoPosition: "center 70%",
      photoScale: 2.2,
      photoOffsetY: "-18%",
      bio:
        "Specializes in the neural mechanisms of depth perception in real and virtual environments, with research that connects biological vision, XR, and practical display engineering.",
    },
    {
      id: "speaker-aaron",
      name: "Aaron Hertzmann",
      role: "Adobe Research / University of Washington",
      photo: "./speakers/aaron.jpg",
      photoPosition: "center 24%",
      photoScale: 1.2,
      photoOffsetY: "0%",
      cardClass: "speaker-card-white",
      bio:
        "Works at the intersection of machine learning, computational photography, and the psychology of art, with a long track record of bridging computation and human visual experience.",
    },
    {
      id: "speaker-richard",
      name: "Richard Zhang",
      role: "Adobe Research",
      photo: "./speakers/richard.jpg",
      photoPosition: "center 22%",
      photoScale: 1.40,
      photoOffsetY: "0%",
      bio:
        "Known for perceptual metrics such as LPIPS and DreamSim, and for research showing how deep features can align with human perceptual judgments.",
    },
  ],
  organizers: [
    {
      name: "Kenneth Chen",
      role: "PhD Student, New York University",
      email: "kennychen@nyu.edu",
      body:
        'Researches visual perception for graphics and computational displays.',
    },
    {
      name: "Dr. Niall L. Williams",
      role: "University of Zaragoza",
      email: "niallw.phd@gmail.com",
      body:
        "Studies computational methods for immersive displays and uses computer graphics to probe the capabilities and limitations of human vision.",
    },
    {
      name: "Dr. Colin Groth",
      role: "Postdoctoral Researcher, New York University",
      email: "c.groth@nyu.edu",
      body:
        "Works on perceptual techniques in graphics, especially for XR and cybersickness mitigation, with an emphasis on cross-disciplinary collaboration.",
    },
    {
      name: "Jenna Kang",
      role: "PhD Student, New York University",
      email: "jennakang@nyu.edu",
      body:
        "Studies visual perception, psychophysics, and computer graphics, including perceptual evaluation of generative AI and video synthesis.",
    },
    {
      name: "Dr. Alexandre Chapiro",
      role: "Meta Reality Labs",
      email: "alex@chapiro.net",
      body:
        "Imaging architect and senior research scientist working across perception, graphics, computational displays, and psychophysics.",
    },
    {
      name: "Prof. Qi Sun",
      role: "Associate Professor, New York University",
      email: "qisun@nyu.edu",
      body:
        "Research interests include VR/AR, perceptual computer graphics, computational displays, and applied perception.",
    },
  ],
  contact: {
    email: "kennychen@nyu.edu",
    keywords: "Visual Computing, Human Vision, Machine/Computer Vision",
  },
};

const navItems = [
  ["#poster", "Poster"],
  ["#about", "About"],
  ["#topics", "Topics"],
  ["#agenda", "Agenda"],
  ["#organizers", "Organizers"],
  ["#contact", "Contact"],
];

const sectionHeading = (eyebrow, title, copy = "") => `
  <div class="section-heading">
    <p class="eyebrow">${eyebrow}</p>
    <h2>${title}</h2>
    ${copy ? `<p class="section-intro">${copy}</p>` : ""}
  </div>
`;

const app = document.querySelector("#app");

app.innerHTML = `
  <header class="site-header">
    <div class="container nav-wrap">
      <a class="brand" href="#poster">${site.shortTitle}</a>
      <nav class="nav" aria-label="Primary">
        ${navItems.map(([href, label]) => `<a href="${href}">${label}</a>`).join("")}
      </nav>
    </div>
  </header>

  <main id="poster">
    <section class="poster-shell">
      <div class="container">
        <div class="poster">
          <div class="poster-topline">
            <div>
              <h1>${site.title}</h1>
              <p class="poster-eventline"><em>${site.event}</em> @ ${site.eventLine}</p>
              <p class="poster-room">${site.venue} • ${site.room}</p>
            </div>
            <div class="poster-badge" aria-label="Conference details">
              <span class="poster-badge-mark">SIGGRAPH 2026</span>
              <span>Los Angeles</span>
              <span>Technical Workshop</span>
            </div>
          </div>

          <div class="poster-stage">
            <div class="poster-visual" aria-hidden="true">
              <div class="poster-visual-copy">
                <p class="poster-kicker">${site.venue}</p>
                <p>${site.posterNote}</p>
              </div>
            </div>

            <aside class="poster-sidecard">
              <p class="eyebrow">Workshop at a glance</p>
              <p>${site.overview}</p>
              <ul>
                ${site.overviewBullets.map((item) => `<li>${item}</li>`).join("")}
              </ul>
              <div class="meta-pills">
                ${site.meta.map((item) => `<span>${item}</span>`).join("")}
              </div>
              <div class="poster-actions">
                <a class="button button-secondary" href="./workshop_doc.pdf">Workshop PDF</a>
              </div>
            </aside>

            <div class="speaker-strip" id="speakers">
              ${site.speakers
                .map(
                  (speaker, index) => `
                    <article class="speaker-card ${speaker.cardClass ?? ""}" data-speaker-card>
                      <button
                        class="speaker-trigger"
                        type="button"
                        aria-expanded="true"
                        aria-controls="${speaker.id}"
                      >
                        <span class="speaker-portrait">
                          <img
                            src="${speaker.photo}"
                            alt="Portrait of ${speaker.name}"
                            style="object-position: ${speaker.photoPosition}; transform: translateY(${speaker.photoOffsetY ?? "0%"}) scale(${speaker.photoScale ?? 1}); transform-origin: center top;"
                          />
                        </span>
                        <span class="speaker-summary">
                          <span class="speaker-name">${speaker.name}</span>
                          <span class="speaker-role">${speaker.role}</span>
                        </span>
                      </button>
                      <div
                        class="speaker-bio"
                        id="${speaker.id}"
                      >
                        <p>${speaker.bio}</p>
                      </div>
                    </article>
                  `,
                )
                .join("")}
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section" id="agenda">
      <div class="container">
        ${sectionHeading("Agenda", "Half-day schedule", site.agendaNote)}
        <div class="agenda">
          ${site.agenda
            .map(
              ([time, label]) => `
                <div class="agenda-row">
                  <span>${time}</span>
                  <strong>${label}</strong>
                </div>
              `,
            )
            .join("")}
        </div>
      </div>
    </section>

    <section class="section" id="about">
      <div class="container">
        ${sectionHeading("About", "Why connect human and machine vision?", site.subtitle)}
        <div class="panel-grid panel-grid-wide">
          ${site.about
            .map(
              (paragraph) => `
                <article class="panel panel-prose">
                  <p>${paragraph}</p>
                </article>
              `,
            )
            .join("")}
        </div>
      </div>
    </section>

    <section class="section section-tinted" id="topics">
      <div class="container">
        ${sectionHeading("Topics", "Discussion themes")}
        <div class="topic-grid">
          ${site.topics
            .map(
              (topic) => `
                <article class="topic-card">
                  <h3>${topic.title}</h3>
                  <p>${topic.body}</p>
                </article>
              `,
            )
            .join("")}
        </div>
      </div>
    </section>

    <section class="section section-tinted" id="organizers">
      <div class="container">
        ${sectionHeading("Organizers", "Workshop team")}
        <div class="organizer-grid">
          ${site.organizers
            .map(
              (organizer) => `
                <article class="person-card">
                  <h3>${organizer.name}</h3>
                  <p class="person-role">${organizer.role}</p>
                  <p>${organizer.body}</p>
                </article>
              `,
            )
            .join("")}
        </div>
      </div>
    </section>

    <section class="section" id="contact">
      <div class="container">
        <div class="contact-panel">
          <div class="contact-copy">
            <p class="eyebrow">Contact</p>
            <h2>Get in touch</h2>
            <p>Primary contact: Kenneth Chen, <a href="mailto:${site.contact.email}">${site.contact.email}</a></p>
            <p>Keywords: ${site.contact.keywords}</p>
            <ul class="contact-list">
              ${site.organizers
                .map(
                  (organizer) =>
                    `<li>${organizer.name}: <a href="mailto:${organizer.email}">${organizer.email}</a></li>`,
                )
                .join("")}
            </ul>
          </div>
          <div class="contact-actions">
            <a class="button button-primary" href="mailto:${site.contact.email}">Email Organizer</a>
            <a class="button button-secondary" href="./workshop_doc.pdf">Open Proposal PDF</a>
          </div>
        </div>
      </div>
    </section>
  </main>
`;

const speakerTriggers = Array.from(document.querySelectorAll(".speaker-trigger"));

speakerTriggers.forEach((trigger) => {
  trigger.addEventListener("click", () => {
    const card = trigger.closest("[data-speaker-card]");
    const bio = card?.querySelector(".speaker-bio");
    const isExpanded = trigger.getAttribute("aria-expanded") === "true";

    if (!card || !bio) {
      return;
    }

    trigger.setAttribute("aria-expanded", isExpanded ? "false" : "true");
    card.classList.toggle("is-open", !isExpanded);
    bio.hidden = isExpanded;
  });
});

speakerTriggers.forEach((trigger) => {
  if (trigger.getAttribute("aria-expanded") !== "true") {
    return;
  }

  trigger.closest("[data-speaker-card]")?.classList.add("is-open");
});
