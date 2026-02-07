import { Panel } from "@/components/Panel";
import { Section } from "@/components/Section";
import { experience } from "@/data/portfolio";

export function Experience() {
  return (
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
  );
}
