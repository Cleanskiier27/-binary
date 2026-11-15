import { Activity, ArrowUpRight, Shield, Wifi } from 'lucide-react';

const features = [
  {
    icon: Activity,
    title: 'Network activity',
    description: 'Bring traffic and performance signals into one clear view.',
  },
  {
    icon: Shield,
    title: 'Security insights',
    description: 'Make room for the alerts and context that matter to your team.',
  },
  {
    icon: Wifi,
    title: 'Connected devices',
    description: 'Build a live inventory of the devices on your network.',
  },
];

export default function App() {
  return (
    <main className="app-shell">
      <header className="topbar">
        <a className="brand" href="/" aria-label="NetworkBuster home">
          <span className="brand-mark">
            <Activity size={19} strokeWidth={2.5} />
          </span>
          <span>NetworkBuster</span>
        </a>
        <span className="status">
          <span className="status-dot" />
          Workspace ready
        </span>
      </header>

      <section className="intro" aria-labelledby="page-title">
        <p className="eyebrow">NETWORK OPERATIONS</p>
        <h1 id="page-title">
          Your network,
          <br />
          <span>in focus.</span>
        </h1>
        <p className="intro-copy">
          A clear starting point for monitoring, understanding, and managing
          your network.
        </p>
        <a className="primary-link" href="#workspace">
          Explore the workspace <ArrowUpRight size={17} />
        </a>
      </section>

      <section className="workspace" id="workspace" aria-label="Workspace features">
        <div className="section-heading">
          <div>
            <p className="eyebrow">YOUR WORKSPACE</p>
            <h2>Everything starts here</h2>
          </div>
          <span className="section-count">01 — 03</span>
        </div>
        <div className="feature-grid">
          {features.map(({ icon: Icon, title, description }, index) => (
            <article className="feature-card" key={title}>
              <span className="feature-icon">
                <Icon size={20} />
              </span>
              <span className="feature-number">0{index + 1}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <footer className="footer">
        <span>NetworkBuster</span>
        <span>Workspace scaffold</span>
      </footer>
    </main>
  );
}
