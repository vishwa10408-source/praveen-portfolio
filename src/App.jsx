import { useEffect } from "react";
import Navbar from "./components/Navbar";
import SectionTitle from "./components/SectionTitle";

import {
  experience,
  focusAreas,
  methodology,
  profile,
  projects,
  skills,
  stats,
} from "./data/portfolio";

function Icon({ name, size = 18 }) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
  };

  if (name === "arrow") {
    return (
      <svg {...common}>
        <path d="M7 17 17 7" />
        <path d="M7 7h10v10" />
      </svg>
    );
  }

  if (name === "download") {
    return (
      <svg {...common}>
        <path d="M12 3v12" />
        <path d="m7 10 5 5 5-5" />
        <path d="M5 21h14" />
      </svg>
    );
  }

  if (name === "shield") {
    return (
      <svg {...common}>
        <path d="M12 3 19 6v5c0 5-3.1 8.4-7 10-3.9-1.6-7-5-7-10V6l7-3Z" />
        <path d="m9.2 12 1.8 1.8 4-4" />
      </svg>
    );
  }

  if (name === "pin") {
    return (
      <svg {...common}>
        <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    );
  }

  if (name === "mail") {
    return (
      <svg {...common}>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </svg>
    );
  }

  if (name === "github") {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.866-.014-1.7-2.782.605-3.369-1.343-3.369-1.343-.455-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.071 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.091-.647.349-1.088.635-1.338-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.269 2.75 1.026A9.578 9.578 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.295 2.748-1.026 2.748-1.026.546 1.378.203 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.337 4.695-4.566 4.943.359.31.678.921.678 1.856 0 1.34-.012 2.421-.012 2.75 0 .269.18.58.688.481A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
      </svg>
    );
  }

  if (name === "linkedin") {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3A1.96 1.96 0 1 0 5.25 6.92 1.96 1.96 0 0 0 5.25 3ZM20.44 13.4c0-3.46-1.85-5.07-4.31-5.07-1.99 0-2.88 1.09-3.38 1.86V8.5H9.37V20h3.38v-5.7c0-1.5.28-2.95 2.14-2.95 1.84 0 1.86 1.72 1.86 3.05V20h3.39l.3-6.6Z" />
      </svg>
    );
  }

  return null;
}

function App() {
  const projectImages = {
    "01": "/captcha.png",
    "02": "/password-checker.png",
    "03": "/malware-xai.png",
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      {
        threshold: 0.12,
      },
    );

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="site-shell">
      <div className="grid-bg" />

      <Navbar />

      <main>
        {/* HERO */}
        <section className="hero container" id="home">
          <div className="hero-copy reveal">
            <div className="availability">
              <span />
              {profile.availability}
            </div>
            <p className="hero-kicker">CYBERSECURITY / APPLICATION SECURITY</p>
            <h1>
              Building safer systems.
              <em> Thinking like an attacker.</em>
            </h1>
            <p className="hero-intro">{profile.tagline}</p>
            <div className="hero-actions">
              <a href="#work" className="btn btn-primary">
                Explore my work
                <Icon name="arrow" size={18} />
              </a>

              <a
                href="/resume.pdf"
                download="Praveenkumar-Resume.pdf"
                className="btn"
              >
                Download CV
                <Icon name="download" size={18} />
              </a>
            </div>
            <div className="hero-micro">
              <span>OWASP</span>
              <span>WEB SECURITY</span>
              <span>VULNERABILITY ANALYSIS</span>
            </div>
          </div>

          <div className="hero-visual reveal">
            <div className="security-card">
              <div className="security-top">
                <div className="status">
                  <span />
                  SECURITY PROFILE
                </div>

                <Icon name="shield" size={28} />
              </div>

              <div className="portrait-frame">
                <img
                  src="/IMG.png"
                  alt={profile.name}
                  onError={(e) => {
                    e.currentTarget.style.display = "none";

                    e.currentTarget.parentElement.classList.add(
                      "photo-missing",
                    );
                  }}
                />

                <div className="photo-fallback">
                  <strong>{profile.firstName.charAt(0)}</strong>

                  <small>public/praveen.png</small>
                </div>

                <div className="scan-line" />

                <span className="corner c1" />
                <span className="corner c2" />
                <span className="corner c3" />
                <span className="corner c4" />
              </div>

              <div className="security-meta">
                <div>
                  <small>ROLE</small>
                  <strong>{profile.role}</strong>
                </div>

                <div>
                  <small>LOCATION</small>
                  <strong>{profile.location}</strong>
                </div>
              </div>
            </div>

            <div className="floating-code code-one">HTTP / 200</div>

            <div className="floating-code code-two">RISK: REVIEWED</div>

            <div className="floating-code code-three">TLS / ENABLED</div>
          </div>
        </section>

        {/* ABOUT */}
        <section className="section container" id="about">
          <SectionTitle
            eyebrow="01 / PROFILE"
            title="Technical depth. Clear communication."
            text="Security work matters most when the finding is accurate, the impact is understood, and the fix is actionable."
          />

          <div className="about-grid">
            <p className="about-lead reveal">
              I look for the gap between
              <span> how a system should behave </span>
              and how it can actually be abused.
            </p>

            <div className="about-copy reveal">
              <p>{profile.about}</p>

              <div className="location">
                <Icon name="pin" size={17} />
                {profile.location}
              </div>
            </div>
          </div>

          <div className="stats reveal">
            {stats.map((stat) => (
              <div className="stat" key={stat.label}>
                <strong>{stat.value}</strong>

                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* SKILLS */}
        <section className="section skills-section" id="skills">
          <div className="container">
            <SectionTitle
              eyebrow="02 / CAPABILITIES"
              title="Security skills built for real applications."
              text="Focused on practical security analysis, validation, reporting and secure development."
            />
          </div>

          <div className="marquee-wrap reveal">
            <div className="marquee-track">
              {[...skills, ...skills].map((skill, index) => (
                <span key={`${skill}-${index}`}>
                  {skill}
                  <i>+</i>
                </span>
              ))}
            </div>
          </div>

          <div className="focus-grid container">
            {focusAreas.map((item) => (
              <article className="focus-card reveal" key={item.number}>
                <div className="focus-number">{item.number}</div>

                <h3>{item.title}</h3>

                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        {/* WORK */}
        <section className="section container" id="work">
          <SectionTitle
            eyebrow="03 / SECURITY WORK"
            title="Projects that demonstrate security thinking."
            text="Replace these examples with your real labs, assessments, reports or security projects."
          />

          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card reveal" key={project.number}>
                <div className="project-header">
                  <span>{project.number}</span>

                  <span>{project.category}</span>
                </div>

                <div className="terminal">
                  <img
                    src={project.image || projectImages[project.number]}
                    alt={`${project.title} screenshot`}
                    style={{
                      width: "100%",
                      height: "220px",
                      objectFit: "cover",
                      display: "block",
                    }}
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                </div>

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="project-outcome">
                  <span>OUTCOME</span>

                  <strong>{project.outcome}</strong>
                </div>

                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>

                {(project.live !== "#" || project.code !== "#") && (
                  <div className="project-links">
                    {project.live !== "#" && (
                      <a href={project.live} target="_blank" rel="noreferrer">
                        Case Study <Icon name="arrow" size={15} />
                      </a>
                    )}

                    {project.code !== "#" && (
                      <a href={project.code} target="_blank" rel="noreferrer">
                        Repository <Icon name="github" size={15} />
                      </a>
                    )}
                  </div>
                )}
              </article>
            ))}
          </div>
        </section>

        {/* METHOD */}
        <section className="section method-section container" id="method">
          <SectionTitle
            eyebrow="04 / METHODOLOGY"
            title="A disciplined approach to security testing."
          />

          <div className="method-grid">
            <div className="method-intro reveal">
              <span>MY APPROACH</span>

              <h3>Find what matters. Prove it. Explain it clearly.</h3>

              <p>
                Good security testing is not about producing the longest list of
                alerts. It is about finding meaningful weaknesses and helping
                people fix them.
              </p>
            </div>

            <div className="method-list reveal">
              {methodology.map((step, index) => (
                <div className="method-row" key={step}>
                  <span>{String(index + 1).padStart(2, "0")}</span>

                  <p>{step}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section className="section container" id="experience">
          <SectionTitle
            eyebrow="05 / EXPERIENCE"
            title="Development knowledge meets security thinking."
          />

          <div className="timeline">
            {experience.map((item) => (
              <article
                className="timeline-row reveal"
                key={`${item.title}-${item.period}`}
              >
                <span className="timeline-period">{item.period}</span>

                <div>
                  <h3>{item.title}</h3>

                  <span className="timeline-place">{item.place}</span>
                </div>

                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section className="contact section container" id="contact">
          <div className="contact-panel reveal">
            <span className="contact-eyebrow">
              AVAILABLE FOR CYBERSECURITY OPPORTUNITIES
            </span>

            <h2>
              Let’s make systems
              <em> harder to break.</em>
            </h2>

            {/* MAIN EMAIL */}
            <a
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
                profile.email,
              )}`}
              target="_blank"
              rel="noreferrer"
              className="contact-email"
            >
              {profile.email}
              <Icon name="arrow" size={22} />
            </a>

            <div className="contact-bottom">
              <div className="contact-links">
                {/* GITHUB */}
                <a href={profile.github} target="_blank" rel="noreferrer">
                  <Icon name="github" />
                  GitHub
                </a>

                {/* LINKEDIN */}
                <a href={profile.linkedin} target="_blank" rel="noreferrer">
                  <Icon name="linkedin" />
                  LinkedIn
                </a>

                {/* EMAIL - DIRECT GMAIL COMPOSE */}
                <a
                  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
                    profile.email,
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icon name="mail" />
                  Email
                </a>
              </div>

              <span>© 2026 {profile.name}</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
