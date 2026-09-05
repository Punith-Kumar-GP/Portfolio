import { Panel } from "@/components/Panel";
import { Section } from "@/components/Section";

export function About() {
  return (
    <Section id="about" title="About">
      <Panel>
        <p>
          Full Stack Software Development Engineer with 4+ years of experience
          designing and shipping production systems. I specialize in
          AI-integrated platforms, event-driven data pipelines, and cloud-native
          architecture with React, Next.js, Node.js, and AWS.
        </p>
      </Panel>
      <div className="about-grid">
        <div className="about-card">
          <h4>Performance Focus</h4>
          <p>
            LRU caching, asynchronous processing, and parallel execution that
            cut API latency by 80% and report generation time by 75%.
          </p>
        </div>
        <div className="about-card">
          <h4>System Thinking</h4>
          <p>
            Database-driven rule engines and domain-focused systems that blend
            AI reasoning with deterministic business validation.
          </p>
        </div>
        <div className="about-card">
          <h4>Testing & Quality</h4>
          <p>
            Reusable components and automated testing with Jest and React
            Testing Library to strengthen release confidence.
          </p>
        </div>
        <div className="about-card">
          <h4>Cloud Ready</h4>
          <p>
            AWS Lambda, Step Functions, ECS, S3, DynamoDB, CloudWatch, Azure,
            Docker, CI/CD, and event-driven pipelines at scale.
          </p>
        </div>
      </div>
    </Section>
  );
}
