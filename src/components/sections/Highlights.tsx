import { Panel } from "@/components/Panel";
import { Section } from "@/components/Section";
import { TagList } from "@/components/TagList";
import { achievements } from "@/data/portfolio";

export function Highlights() {
  return (
    <Section id="achievements" title="Highlights">
      <Panel>
        <TagList items={achievements} />
      </Panel>
    </Section>
  );
}
