"use client";

import { useEffect, useRef } from "react";

const projects = [
  {
    title: "DMW (DataFlow)",
    description:
      "Data and document processing platform with scalable full-stack features, dashboards, and automated verification flows.",
    stack: ["Next.js", "Node.js", "TypeScript", "AWS"],
  },
  {
    title: "Auto Git Commit Messages",
    description:
      "Automated Git commit message generation using NLP, reducing manual effort by 80%.",
    stack: ["Python", "Machine Learning"],
  },
  {
    title: "Property Management System",
    description:
      "Built REST APIs with Node.js + Express and a MySQL backend, with a responsive UI in HTML, CSS, and JavaScript.",
    stack: ["Node.js", "Express", "MySQL", "HTML/CSS"],
  },
];

const skills = [
  "JavaScript",
  "Java",
  "TypeScript",
  "Python",
  "React",
  "Next.js",
  "Redux",
  "Node.js",
  "Spring",
  "Express",
  "REST APIs",
  "Jest",
  "React Testing Library",
  "MySQL",
  "MongoDB",
  "AWS",
  "Azure",
  "Git",
  "Postman",
];

const experience = [
  {
    role: "Software Development Engineer 1",
    company: "Nineleaps",
    time: "Apr 2025 - Present",
    detail:
      "Building scalable full-stack features for DataFlow (DMW) using React, Next.js, and Node.js with performance-focused backend optimizations.",
  },
  {
    role: "Associate System Engineer",
    company: "IBM",
    time: "Jan 2024 - Apr 2025",
    detail:
      "Developed and optimized React + Redux interfaces, improved performance, and increased test coverage with Jest and RTL.",
  },
];

const achievements = [
  "400+ LeetCode problems solved",
  "Feather on the Hat awards (5x)",
  "PageSpeed +25 points, load times reduced by 50%",
];

const hobbies = ["Cricket", "Binge-watching movies", "Crime thrillers"];

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="section" id={id}>
      <div className="section-title">{title}</div>
      <div className="section-content">{children}</div>
    </section>
  );
}

function TagList({ items }: { items: string[] }) {
  return (
    <div className="tag-row">
      {items.map((item) => (
        <span className="tag" key={item}>
          {item}
        </span>
      ))}
    </div>
  );
}

function Panel({ children }: { children: React.ReactNode }) {
  return <div className="panel">{children}</div>;
}

export default function Home() {
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const titleWrapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const title = titleRef.current;
    const wrap = titleWrapRef.current;
    if (!title || !wrap) return;

    const handleMove = (event: MouseEvent) => {
      const rect = wrap.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      const rotateX = y * -24;
      const rotateY = x * 24;
      title.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };

    const handleLeave = () => {
      title.style.transform = "rotateX(0deg) rotateY(0deg)";
    };

    wrap.addEventListener("mousemove", handleMove);
    wrap.addEventListener("mouseleave", handleLeave);

    return () => {
      wrap.removeEventListener("mousemove", handleMove);
      wrap.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return (
    <div className="site">
      <header className="site-header">
        <nav className="nav">
          <div className="logo">Punith</div>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#achievements">Highlights</a>
            <a href="#education">Education</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>
      </header>

      <main className="page">
        <section className="hero" id="top">
          <div className="hero-intro">
            <p className="eyebrow">Software Development Engineer</p>
            <div className="hero-title-wrap" ref={titleWrapRef}>
              <h1 className="hero-title hero-title-tilt" ref={titleRef}>
                <span data-text="Punith">Punith</span>
                <span data-text="Kumar G P">Kumar G P</span>
              </h1>
            </div>
            <p className="hero-subtitle">
              Full-stack engineer shipping fast, scalable web apps with React,
              Next.js, Node.js, and RESTful APIs. I fuse performance, testing,
              and clean architecture into dependable systems.
            </p>
            <div className="hero-cta">
              <a className="btn primary" href="#projects">
                View Work
              </a>
              <a className="btn ghost" href="#contact">
                Contact
              </a>
            </div>
          </div>
          <div className="hero-panel">
            <div className="stats">
              <div className="stat">
                <h3>SDE-1</h3>
                <p>Nineleaps</p>
              </div>
              <div className="stat">
                <h3>400+</h3>
                <p>LeetCode</p>
              </div>
              <div className="stat">
                <h3>10K+</h3>
                <p>Records</p>
              </div>
              <div className="stat">
                <h3>5x</h3>
                <p>Awards</p>
              </div>
            </div>
            <div className="marquee" aria-hidden="true">
              <div className="marquee-track">
                <span>Next.js</span>
                <span>Custom CSS</span>
                <span>Motion</span>
                <span>WebGL</span>
                <span>Design Systems</span>
                <span>Accessibility</span>
                <span>Next.js</span>
                <span>Custom CSS</span>
                <span>Motion</span>
                <span>WebGL</span>
                <span>Design Systems</span>
                <span>Accessibility</span>
              </div>
            </div>
          </div>
        </section>

        <Section id="about" title="About">
          <Panel>
            <p>
              Software Development Engineer with experience building scalable
              full-stack applications using React, Next.js, Node.js, and RESTful
              APIs. Currently an SDE-1 at Nineleaps, delivering end-to-end
              features, optimizing performance, and improving system
              scalability.
            </p>
          </Panel>
          <div className="about-grid">
            <div className="about-card">
              <h4>Performance Focus</h4>
              <p>
                LRU caching and backend optimizations that cut latency by 40%
                and speed up report processing by 50%.
              </p>
            </div>
            <div className="about-card">
              <h4>System Thinking</h4>
              <p>
                Built a rule-based configuration engine powering core system
                decisions and automated verification flows.
              </p>
            </div>
            <div className="about-card">
              <h4>Testing & Quality</h4>
              <p>
                Jest + React Testing Library with measurable coverage gains and
                fewer post-release defects.
              </p>
            </div>
            <div className="about-card">
              <h4>Cloud Ready</h4>
              <p>
                Experience across AWS and Azure for scalable, production-ready
                deployments.
              </p>
            </div>
          </div>
        </Section>

        <Section id="projects" title="Projects">
          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
                <TagList items={project.stack} />
              </article>
            ))}
          </div>
        </Section>

        <Section id="skills" title="Skills">
          <Panel>
            <div className="skills-grid skills-animated">
              {skills.map((skill) => (
                <div className="skill" key={skill}>
                  {skill}
                </div>
              ))}
            </div>
          </Panel>
        </Section>

        <Section id="achievements" title="Highlights">
          <Panel>
            <TagList items={achievements} />
          </Panel>
        </Section>

        <Section id="experience" title="Experience">
          <Panel>
            <div className="timeline">
              {experience.map((item) => (
                <div className="timeline-item" key={item.company}>
                  <h4>
                    {item.role} · {item.company}
                  </h4>
                  <p className="eyebrow">{item.time}</p>
                  <p>{item.detail}</p>
                </div>
              ))}
            </div>
          </Panel>
        </Section>

        <Section id="education" title="Education">
          <Panel>
            <h3>New Horizon College of Engineering</h3>
            <p className="eyebrow">Aug 2019 - Jul 2023</p>
            <p>
              B.E. in Electronics and Communication Engineering · CGPA 9.19/10
            </p>
          </Panel>
        </Section>

        <Section id="hobbies" title="Hobbies">
          <Panel>
            <TagList items={hobbies} />
          </Panel>
        </Section>

        <Section id="contact" title="Contact">
          <Panel>
            <div className="contact-card">
              <div>
                <h3>Let&apos;s build something scalable.</h3>
                <p className="eyebrow">Bengaluru, India</p>
              </div>
              <div className="contact-links">
                <a href="mailto:punith5542@gmail.com">punith5542@gmail.com</a>
                <span className="eyebrow">+91 8867733975</span>
                <a
                  className="eyebrow"
                  href="https://www.linkedin.com/in/punith-kumar-g-p-384254246/"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </Panel>
        </Section>
      </main>

      <footer className="footer">© 2026 Punith Kumar G P</footer>
    </div>
  );
}
