import { Panel } from "@/components/Panel";
import { Section } from "@/components/Section";
import { TagList } from "@/components/TagList";
import { hobbies } from "@/data/portfolio";

export function Hobbies() {
  return (
    <Section id="hobbies" title="Hobbies">
      <Panel>
        <TagList items={hobbies} />
      </Panel>
    </Section>
  );
}
