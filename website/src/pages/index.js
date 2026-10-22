import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function Home() {
  return (
    <Layout title="RN Storage Kit" description="Unified storage for React Native">
      <main className="container margin-vert--xl">
        <h1>RN Storage Kit</h1>
        <p>Unified storage for React Native: fast key-value, encrypted secrets and structured logs behind one API.</p>
        <Link className="button button--primary button--lg" to="/docs/intro">
          Read the docs
        </Link>
      </main>
    </Layout>
  );
}
