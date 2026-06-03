type ScreenshotCardProps = {
  title: string;
  description: string;
};

export function ScreenshotCard({ title, description }: ScreenshotCardProps) {
  return (
    <article className="screenshot-card">
      <div className="screenshot-frame" aria-hidden="true">
        <div className="screenshot-bar">
          <span />
          <span />
          <span />
        </div>
        <div className="screenshot-lines">
          <span />
          <span />
          <span />
          <span />
        </div>
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
}
