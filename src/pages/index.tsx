import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header style={{marginTop: "auto", marginBottom: "auto"}} className={clsx(styles.heroBanner)}>
      <div className="container">
		<div style={{display: "flex", justifyContent: "center", alignItems: "center", width: "100%"}}>
			<img style={{
				width: 300,
			}} src={require("@site/static/img/favicon.png").default} />
		</div>
		<p className="hero__subtitle">
			{siteConfig.tagline}
		</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
			دليل الاستعمال
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
    </Layout>
  );
}
