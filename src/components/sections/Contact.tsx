import { Panel } from "@/components/Panel";
import { Section } from "@/components/Section";

export function Contact() {
  return (
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
            <a
              className="btn primary"
              href="https://drive.google.com/uc?export=download&id=1bRPGSjvXUmrEQSaHqKHphkw452x3YCMY"
              target="_blank"
              rel="noreferrer"
            >
              Download Resume
            </a>
          </div>
        </div>
      </Panel>
    </Section>
  );
}
