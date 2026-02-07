import { Panel } from "@/components/Panel";
import { Section } from "@/components/Section";

export function About() {
  return (
    <Section id="about" title="About">
      <Panel>
        <p>
          Software Development Engineer with experience building scalable
          full-stack applications using React, Next.js, Node.js, and RESTful
          APIs. Currently an SDE-1 at Nineleaps, delivering end-to-end features,
          optimizing performance, and improving system scalability.
        </p>
      </Panel>
      <div className="about-grid">
        <div className="about-card">
          <h4>Performance Focus</h4>
          <p>
            LRU caching and backend optimizations that cut latency by 40% and
            speed up report processing by 50%.
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
  );
}
