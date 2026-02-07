import { Panel } from "@/components/Panel";
import { Section } from "@/components/Section";
import { skills } from "@/data/portfolio";

export function Skills() {
  return (
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
  );
}
