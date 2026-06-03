type FeatureCardProps = {
  title: string;
  children: React.ReactNode;
  badge?: string;
  className?: string;
};

export function FeatureCard({
  title,
  children,
  badge,
  className = "",
}: FeatureCardProps) {
  return (
    <article className={`card ${className}`.trim()}>
      <h3>{title}</h3>
      {children}
      {badge ? <span className="badge">{badge}</span> : null}
    </article>
  );
}
