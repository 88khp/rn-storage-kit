import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import CodeBlock from '@theme/CodeBlock';

const features = [
  {
    "title": "Fast key-value storage",
    "body": "MMKVStorageAdapter for preferences, cache and app state, behind a promise API."
  },
  {
    "title": "Encrypted secrets",
    "body": "SecureStorageAdapter stores tokens and passwords in Keychain, with the same interface."
  },
  {
    "title": "Logs that never leak secrets",
    "body": "Secure values are masked as *** and stripped at info level. Logs are off in production by default."
  },
  {
    "title": "One interface to learn",
    "body": "Swap adapters without changing call sites. get, set, remove, clear and getAllKeys work the same."
  }
];
const steps = [
  {
    "title": "Install",
    "code": "npm install @88khp/rn-storage-kit"
  },
  {
    "title": "Pick an adapter",
    "code": "new MMKVStorageAdapter()"
  },
  {
    "title": "Read and write",
    "code": "await storage.set('theme', 'dark')"
  }
];
const code = "import {\n  MMKVStorageAdapter,\n  SecureStorageAdapter,\n} from '@88khp/rn-storage-kit';\n\nconst prefs = new MMKVStorageAdapter();\nconst secure = new SecureStorageAdapter();\n\nawait prefs.set('theme', 'dark');\nawait secure.set('auth_token', 'eyJ...');\n\nconst token = await secure.get('auth_token');";

const Art = () => (
  <svg viewBox="0 0 480 360" role="img" aria-label="Preference, secret and log cards stacked">
    <defs>
      <linearGradient id="artBg" x1="0" y1="0" x2="1" y2="1">
        <stop className="art-s1" offset="0" />
        <stop className="art-s2" offset="1" />
      </linearGradient>
      <filter id="artShadow" x="-25%" y="-25%" width="150%" height="170%">
        <feDropShadow dx="0" dy="14" stdDeviation="14" floodOpacity="0.28" />
      </filter>
    </defs>
    <rect x="0" y="0" width="480" height="360" rx="28" fill="url(#artBg)" />
    <rect className="art-card" x="236" y="52" width="196" height="108" rx="20" filter="url(#artShadow)" />
    <rect className="art-bar" x="262" y="84" width="112" height="10" rx="5" />
    <rect className="art-toggle" x="370" y="80" width="40" height="20" rx="10" />
    <circle className="art-knob" cx="400" cy="90" r="7" />
    <rect className="art-card" x="72" y="120" width="250" height="108" rx="20" filter="url(#artShadow)" />
    <path className="art-shackle" d="M104 152 V140 a14 14 0 0 1 28 0 V152" />
    <rect className="art-accent" x="98" y="150" width="36" height="28" rx="7" />
    {[0, 1, 2, 3, 4].map((i) => (
      <circle key={i} className="art-ink" cx={152 + i * 18} cy="170" r="5" />
    ))}
    <rect className="art-bar" x="98" y="196" width="150" height="10" rx="5" />
    <rect className="art-card" x="164" y="204" width="250" height="108" rx="20" filter="url(#artShadow)" />
    <circle className="art-accent" cx="192" cy="236" r="7" />
    <rect className="art-bar-strong" x="210" y="232" width="150" height="8" rx="4" />
    <rect className="art-bar" x="192" y="256" width="170" height="8" rx="4" />
    <rect className="art-bar" x="192" y="276" width="110" height="8" rx="4" />
    <text className="art-mark" x="36" y="332">88khp / rn-storage-kit</text>
  </svg>
);

export default function Home() {
  return (
    <Layout title="Storage for React Native, behind one API" description="Fast key-value storage, encrypted secrets and production-safe logs behind one async get, set, remove and clear interface.">
      <header className="hero">
        <div className="container">
          <div className="hero__text">
          <span className="hero__eyebrow">rn-storage-kit</span>
          <h1 className="hero__title">Storage for React Native, behind one API</h1>
          <p className="hero__lede">Fast key-value storage, encrypted secrets and production-safe logs behind one async get, set, remove and clear interface.</p>
          <div className="hero__install">
            <span className="prompt">$</span>
            <code>npm install @88khp/rn-storage-kit</code>
          </div>
          <div className="hero__actions">
            <Link className="btn btn--primary" to="/docs/intro">Install</Link>
            <Link className="btn" to="/docs/intro">Read the docs</Link>
          </div>
          </div>
          <div className="hero__art"><Art /></div>
        </div>
      </header>

      <section className="section">
        <div className="container">
          <div className="section__head">
            <h2>How it fits together</h2>
          </div>
          <ol className="steps">
            {steps.map((s, i) => (
              <li className="step" key={s.title}>
                <span className="step__num">{i + 1}</span>
                <div>
                  <h3 className="step__title">{s.title}</h3>
                  <code className="step__code">{s.code}</code>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section--tint">
        <div className="container split">
          <div>
            <h2>Use it</h2>
            <p className="section__body">The same four methods work on both adapters. Only the adapter decides where the data lives.</p>
          </div>
          <div className="split__code">
            <CodeBlock language="ts" title="storage.ts">{code}</CodeBlock>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section__head">
            <h2>Why it's worth using</h2>
          </div>
          <div className="features__grid">
            {features.map((f) => (
              <div className="feature" key={f.title}>
                <h3 className="feature__title">{f.title}</h3>
                <p className="feature__body">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container cta__inner">
          <h2>Start with the docs</h2>
          <div className="hero__actions">
            <Link className="btn btn--primary" to="/docs/intro">Open the docs</Link>
            <a className="btn" href="https://github.com/88khp/rn-storage-kit">View on GitHub</a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
