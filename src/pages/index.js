// /src/pages/index.js

import React, { useState } from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import Link from '@docusaurus/Link';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={styles.heroBanner}>
      <div className="container">
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>
              RUN YOUR TEST CASES ON <span style={{ color: '#C73939' }}>AUTOPILOT</span>
            </h1>
            <p className={styles.heroSubtitle}>
              AI-Powered Software Testing Platform that automates your testing workflow, so your team can focus on building great products
            </p>
            <div className={styles.heroCTA}>
              <a href="https://agentq.id/login" className="button button--primary button--lg" target="_blank" rel="noopener noreferrer">
                Try AgentQ Free
              </a>
              <a href="https://discord.gg/6dArs9tpfm" className="button button--secondary button--lg" style={{ marginLeft: '1rem' }} target="_blank" rel="noopener noreferrer">
                Join Discord
              </a>
            </div>
            <p className={styles.heroMetrics}>
              <span>⚡️ 70% Faster Test</span>
              <span>🎯 85% Accuracy</span>
              <span>🚀 1000+ Projects</span>
            </p>
          </div>
          <div className={styles.heroVisual}>
            <img src={require('@site/static/img/agentq.png').default} alt="AgentQ AI Testing" className={styles.heroImage} />
          </div>
        </div>
      </div>
    </header>
  );
}

function ImageModal({ isOpen, imageUrl, onClose }) {
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent}>
        <button className={styles.modalClose} onClick={onClose}>×</button>
        <img src={imageUrl} alt="Enlarged view" />
      </div>
    </div>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  const [modalImage, setModalImage] = useState(null);
  return (
    <Layout
      description="AI-powered test case management with automatic test case generation.">
      <HomepageHeader />
      <main>
        <ImageModal 
          isOpen={!!modalImage} 
          imageUrl={modalImage} 
          onClose={() => setModalImage(null)} 
        />
        <section className={styles.features}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2>Everything You Need for Test Automation</h2>
            <p>Advanced AI that understands your application and creates comprehensive test suites</p>
          </div>
          <div className={styles.featureGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🤖</div>
              <h3>AI Test Generation</h3>
              <p>Upload your requirements and let our AI create detailed test cases automatically</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🎯</div>
              <h3>Smart Coverage Analysis</h3>
              <p>AI identifies gaps in test coverage and suggests additional test scenarios</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🔄</div>
              <h3>Automated Maintenance</h3>
              <p>Tests automatically update when your application changes</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>📊</div>
              <h3>Advanced Analytics</h3>
              <p>Get insights into your test coverage, performance, and quality metrics</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🔌</div>
              <h3>Easy Integration</h3>
              <p>Works with your existing tools - Playwright, Selenium, TestCafe, and more</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>⚡️</div>
              <h3>Lightning Fast</h3>
              <p>Generate and execute hundreds of test cases in minutes, not hours</p>
            </div>
          </div>
        </div>
      </section>
        
        <section className={styles.howItWorks}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <h2>How AgentQ Works</h2>
              <p>Simple steps to automate your test case management</p>
            </div>
            
            <div className={styles.workflowSteps}>
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

              <div className="row" style={{ marginTop: '4rem' }}>
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

              <div className="row" style={{ marginTop: '4rem' }}>
                <div className="col col--6">
                  <h1 className={styles.howItWorksSubtitle}>Review and customize generated test cases.</h1>
                  <div>
                    <ul style={{ paddingLeft: 30, fontSize: 18 }}>
                      <li style={{ marginBottom: 10 }}><strong style={{ color: '#C73939'}}>Leverage AI</strong> to produce detailed and effective test cases, covering various scenarios.</li>
                      <li style={{ marginBottom: 10 }}><strong style={{ color: '#C73939'}}>Flexible Adaptation</strong> with easily review, edit, and tailor generated test cases to match your unique testing requirements, ensuring maximum relevance.</li>
                    </ul>
                  </div>
                </div>
                <div className="col col--6">
                  <img src={require('@site/static/img/step3.png').default} alt="Reviewing Test Cases" style={{ maxWidth: '100%' }} />
                </div>
              </div>

              <div className="row" style={{ marginTop: '4rem' }}>
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
          </div>
        </section>

        <section className={styles.capabilities}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <h2>Comprehensive Test Automation</h2>
              <p>Cover all your testing needs with our advanced automation capabilities</p>
            </div>
            
            <div className="row">
              <div className="col col--4">
                <div className={styles.capabilityCard}>
                  <img 
                    src={require('@site/static/img/nocode-utomation test.png').default} 
                    alt="No-Code Automation"
                    onClick={() => setModalImage(require('@site/static/img/nocode-utomation test.png').default)}
                    style={{ cursor: 'pointer' }}
                  />
                  <div className={styles.capabilityContent}>
                    <h3>No-Code Automation Testing</h3>
                    <p>Create and manage automated tests without writing code. Perfect for QA teams and business analysts.</p>
                    <ul>
                      <li>Visual Test Builder</li>
                      <li>Drag-and-Drop Actions</li>
                      <li>Reusable Test Components</li>
                      <li>Easy Test Maintenance</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col col--4">
                <div className={styles.capabilityCard}>
                  <img 
                    src={require('@site/static/img/automation type.png').default} 
                    alt="Automation Types"
                    onClick={() => setModalImage(require('@site/static/img/automation type.png').default)}
                    style={{ cursor: 'pointer' }}
                  />
                  <div className={styles.capabilityContent}>
                    <h3>Multiple Automation Types</h3>
                    <p>From UI testing to API automation, AgentQ supports various types of test automation to ensure comprehensive coverage of your application.</p>
                    <ul>
                      <li>End-to-End Testing</li>
                      <li>API Testing</li>
                      <li>Performance Testing <span className={styles.featureComingSoon}>(Coming Soon)</span></li>
                      <li>Cross-browser Testing <span className={styles.featureComingSoon}>(Coming Soon)</span></li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="col col--4">
                <div className={styles.capabilityCard}>
                  <img 
                    src={require('@site/static/img/security dast.png').default} 
                    alt="Security DAST"
                    onClick={() => setModalImage(require('@site/static/img/security dast.png').default)}
                    style={{ cursor: 'pointer' }}
                  />
                  <div className={styles.capabilityContent}>
                    <h3>Security Testing & DAST</h3>
                    <p>Integrate security testing into your automation pipeline with our Dynamic Application Security Testing (DAST) capabilities.</p>
                    <ul>
                      <li>Vulnerability Scanning</li>
                      <li>Security Compliance</li>
                      <li>Risk Assessment</li>
                      <li>Continuous Security Testing</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.integrations}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <h2>Powerful Integrations</h2>
              <p>Works seamlessly with your favorite tools and frameworks</p>
            </div>
            
            <div className={styles.integrationGrid}>
              <div className={styles.integrationCard}>
                <div className={styles.integrationLogo}>
                  <img 
                    src="https://playwright.dev/img/playwright-logo.svg" 
                    alt="Playwright" 
                    loading="lazy"
                  />
                </div>
                <div className={styles.integrationFeatures}>
                  <ul>
                    <li><span className={styles.featureAvailable}>✓</span> Test execution & reporting</li>
                    <li><span className={styles.featureAvailable}>✓</span> NLP with put <strong style={{ color: '#C73939' }}>q()</strong> function</li>
                  </ul>
                </div>
                <span className={styles.statusAvailable}>Partial Support</span>
              </div>
              
              <div className={styles.integrationCard}>
                <div className={styles.integrationLogo}>
                  <img 
                    src="https://www.jenkins.io/images/logos/jenkins/jenkins.svg" 
                    alt="Jenkins"
                    loading="lazy"
                  />
                </div>
                <p>Seamless integration with Jenkins pipelines for automated test execution and reporting</p>
                <span className={styles.statusAvailable}>Available Now</span>
              </div>
              
              <div className={styles.integrationCard}>
                <div className={styles.integrationLogo}>
                  <img 
                    src={require('@site/static/img/jira.png').default}
                    alt="Jira"
                    loading="lazy"
                  />
                </div>
                <p>Automated bug reporting and test case management with Jira integration</p>
                <span className={styles.statusAvailable}>Available Now</span>
              </div>
              
              <div className={styles.integrationCard}>
                <div className={styles.integrationLogo}>
                </div>
                <h3>More Integrations Coming Soon!</h3>
                <p>We're constantly adding new integrations based on user feedback</p>
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