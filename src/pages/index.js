// /src/pages/index.js

import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import Link from '@docusaurus/Link';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={styles.heroBanner}>
      <div className="container">
        <div className="row">
          <div className="col">
            <h1 className={styles.heroTitle}>Simplify Test Case Management with <span style={{ color: '#C73939' }}>AgentQ</span>'s Powerful AI.</h1>
            <p className={styles.heroSubtitle}>
            Streamline your testing with AI-driven test case creation and boost efficiency.
            </p>
            <div className={styles.buttons}>
              <Link className="button button--primary button--lg" to="/docs/intro">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      description="AI-powered test case management with automatic test case generation.">
      <HomepageHeader />
      <main>
      {/* <section className={styles.features}>
        <div className="container">
        <div className="col col--6">
            <img src="/img/agentq.png" alt="AgentQ Hero Graphic" className={styles.heroImage} />
          </div>
          <h2>Better way to write tests</h2>
          <p>Write tests faster and more reliably with AI-powered automation.</p>
          <div className="row">
            <div className="col col--4">
              <div className={styles.featureItem}>
                <i className="fas fa-language fa-3x" style={{ color: '#25c2a0' }}></i>
                <h3>Natural Language Commands</h3>
                <p>Write tests in plain English. No need to learn complex selectors or APIs.</p>
              </div>
            </div>
            <div className="col col--4">
              <div className={styles.featureItem}>
                <i className="fas fa-robot fa-3x" style={{ color: '#25c2a0' }}></i>
                <h3>AI-Powered Automation</h3>
                <p>Leverages AI/ML to understand your intentions and generate reliable test commands.</p>
              </div>
            </div>
            <div className="col col--4">
              <div className={styles.featureItem}>
                <i className="fas fa-code fa-3x" style={{ color: '#25c2a0' }}></i>
                <h3>Simple Integration</h3>
                <p>Easy to integrate with your existing test framework such as Playwright. Just npm install and go.</p>
              </div>
            </div>
          </div>
        </div>
      </section> */}
        
        <section className={styles.howItWorks}>
          <div className="container">
            <h1 className={styles.howItWorksTitle}>How it Works</h1>
            <div className="row">
              <div className="col col--12">
                <p className={styles.howItWorksText}>AgentQ leverages cutting-edge AI to analyze your application's requirements and automatically generate detailed test cases. Simply provide your specifications, and AgentQ will handle the rest.</p>
              </div>
              <div className="col col--6">
                <h1 className={styles.howItWorksSubtitle}>Enter Application Requirements for Test Case Generation.</h1>

                <div>
                  <ul style={{ paddingLeft: 30, fontSize: 18 }}>
                    <li style={{ marginBottom: 10 }}><strong style={{ color: '#C73939'}}>Upload File:</strong> Upload a document containing your requirements. Supported formats: doc, docx, pdf, txt, etc.</li>
                    <li style={{ marginBottom: 10 }}><strong style={{ color: '#C73939'}}>Public URL:</strong> Enter a publicly accessible URL where your requirements are hosted.</li>
                    <li><strong style={{ color: '#C73939'}}>Private URL:</strong> Enter a private URL and provide necessary credentials (e.g., API key) to access your requirements.</li>
                  </ul>
                </div>
              </div>
              <div className="col col--6">
                <img src={require('@site/static/img/step1.png').default} alt="Data Preparation" style={{ maxWidth: '100%' }} />
              </div>
            </div>
          </div>
          </section>

          <section>
            <div className="container">
              <div className="row">
                <div className="col col--6">
                  <img src={require('@site/static/img/step2.png').default} alt="Data Processing" style={{ maxWidth: '100%' }} />
                </div>
                <div className="col col--6">
                  <h1 className={styles.howItWorksSubtitle}>AgentQ analyzes requirements and generates test cases.</h1>
                  <div>
                  <ul style={{ paddingLeft: 30, fontSize: 18 }}>
                    <li style={{ marginBottom: 10 }}>Leverages a <strong style={{ color: '#C73939'}}>high-quality embedding model</strong> for semantic analysis.</li>
                    <li style={{ marginBottom: 10 }}><strong style={{ color: '#C73939'}}>Fast data processing</strong> ensures quick test case generation.</li>
                  </ul>
                </div>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.howItWorks}>
            <div className="container">
              <div className="row">
                <div className="col col--6">
                  <h1 className={styles.howItWorksSubtitle}>Review and customize generated test cases.</h1>
                  <div>
                  <ul style={{ paddingLeft: 30, fontSize: 18 }}>
                    <li style={{ marginBottom: 10 }}><strong style={{ color: '#C73939'}}>Leverage AI</strong> to produce detailed and effective test cases, covering various scenarios.</li>
                    <li style={{ marginBottom: 10 }}><strong style={{ color: '#C73939'}}>Flexible Adaptation</strong>  with easily review, edit, and tailor generated test cases to match your unique testing requirements, ensuring maximum relevance.</li>
                  </ul>
                </div>
                </div>
                <div className="col col--6">
                  <img src={require('@site/static/img/step3.png').default} alt="Reviewing Test Cases" style={{ maxWidth: '100%' }} />
                </div>
              </div>
            </div>
          </section>

          <section className={styles.howItWorksEnd}>
            <div className="container">
              <div className="row">
                <div className="col col--6">
                  <img src={require('@site/static/img/step4.png').default} alt="Completion" style={{ maxWidth: '100%' }} />
                </div>
                <div className="col col--6">
                  <h1 className={styles.howItWorksSubtitle}>Generate Effective and High-Quality Test Cases.</h1>
                  <div>
                  <ul style={{ paddingLeft: 30, fontSize: 18 }}>
                    <li style={{ marginBottom: 10 }}>Maximize your <strong style={{ color: '#C73939'}}>test coverage</strong> to ensure thorough testing.</li>
                    <li style={{ marginBottom: 10 }}><strong style={{ color: '#C73939'}}>Leverage AI</strong> to automate manual tasks, significantly boosting team productivity.</li>
                    <li style={{ marginBottom: 10 }}>Deliver higher-quality projects with <strong style={{ color: '#C73939'}}>faster</strong> turnaround times.</li>
                  </ul>
                </div>
                </div>
              </div>
            </div>
          </section>

        <section className={styles.getStarted}>
          <div className="container">
            <h2>Trusted and chosen by companies</h2>
            <div className={styles.logos}>
              <img src={require('@site/static/img/company-logos/xapiens.png').default} alt="Amazon" style={{ width: 250 }} />
              {/* <img src={require('@site/static/img/company-logos/google.png').default} alt="Google" />
              <img src={require('@site/static/img/company-logos/microsoft.png').default} alt="Microsoft" />
              <img src={require('@site/static/img/company-logos/ibm.png').default} alt="IBM" /> */}
            </div>
            <p></p>
            {/* <div className={styles.buttons}>
              <Link
                className="button button--primary button--lg"
                to="/docs/intro">

              </Link>
            </div> */}
          </div>
        </section>
      </main>
    </Layout>
  );
}