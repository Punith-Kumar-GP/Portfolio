export function Section({
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
