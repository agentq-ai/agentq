import React from 'react';
import Layout from '@theme/Layout';

const colors = {
  primary: '#C73939',
  secondary: '#222',
  accent: '#F5F5F5',
  card: '#fff',
  border: '#222',
};

export default function KarirPage() {
  return (
    <Layout title="Karir di AgentQ AI">
  <div style={{background: colors.accent, minHeight: '100vh', paddingBottom: '48px', paddingLeft: '18px', paddingRight: '18px'}}>
        <section style={{maxWidth: '900px', margin: '0 auto', padding: '48px 0 32px 0', textAlign: 'center'}}>
          <h1 style={{fontSize: '2.5rem', fontWeight: 700, color: colors.primary}}>Careers at AgentQ AI</h1>
          <div style={{fontSize: '1.15rem', margin: '24px 0 0 0', color: colors.secondary, textAlign: 'justify'}}>
            AgentQ AI is an AI-powered SaaS platform that helps QA engineers, developers, and software teams perform automation testing faster, smarter, and more efficiently.<br /><br />
            We believe the future of QA (Quality Assurance) is not just manual testing, but a combination of AI, automation, and team collaboration.<br /><br />
            With AgentQ AI, we aim to solve major challenges in software development:<br />
            <ul style={{margin: '18px auto 0 auto', maxWidth: '700px', color: colors.secondary, textAlign: 'justify'}}>
              <li>Testing often takes too long - we want to make testing automatic & adaptive.</li>
              <li>Bugs are found too late, fixing costs increase, and AgentQ.id helps detect issues earlier.</li>
              <li>QA is often seen as a bottleneck - we want to turn it into a team productivity enabler.</li>
            </ul>
            <br />
            We are still in the early stages, building our product with a build-in-public approach, so every team member (including interns) will directly shape the product direction, branding, and user experience.
          </div>
        </section>
        <div style={{maxWidth: '900px', margin: '0 auto', marginBottom: '48px', marginTop: '8px', textAlign: 'center'}}>
          <span style={{display: 'inline-block', background: '#fffbe6', color: colors.secondary, borderRadius: '8px', padding: '16px 24px', fontSize: '1.08rem', fontWeight: 500, boxShadow: '0 2px 8px rgba(0,0,0,0.04)'}}>
            Interested in joining AgentQ AI? Please fill out the following form:&nbsp;
            <a href="https://forms.gle/a4wbjU31JGbRStJ86" target="_blank" rel="noopener noreferrer" style={{color: colors.primary, fontWeight: 600, textDecoration: 'underline'}}>Application Form</a>
          </span>
        </div>

        <section style={{maxWidth: '900px', margin: '0 auto', padding: '0 0 32px 0'}}>
          <div className="career-cards" style={{display: 'flex', flexWrap: 'wrap', gap: '32px', justifyContent: 'center'}}>
            {/* Marketing Intern */}
            <div style={{background: colors.card, border: `2px solid ${colors.primary}`, borderRadius: '12px', padding: '32px', flex: '1 1 380px', minWidth: '320px', boxShadow: '0 2px 8px rgba(0,0,0,0.04)'}}>
              <h2 style={{color: colors.primary, fontWeight: 700, fontSize: '1.3rem', marginBottom: '12px'}}>Marketing Intern</h2>
              <h3 style={{fontWeight: 600, fontSize: '1.08rem', marginBottom: '8px'}}>Responsibilities</h3>
              <ul style={{marginBottom: '16px'}}>
                <li>Create creative content for LinkedIn & Twitter/X (light articles, carousels, threads, micro-content)</li>
                <li>Manage social media & maintain AgentQ AI branding consistency</li>
                <li>Research QA/automation testing trends & competitors</li>
                <li>Be active in QA/Tech communities (Slack, Discord, Reddit, Indie Hackers)</li>
                <li>Simple outreach (contact QA engineers/developers for feedback/testimonials)</li>
                <li>Prepare weekly reports (engagement, traffic, content results)</li>
              </ul>
              <h3 style={{fontWeight: 600, fontSize: '1.08rem', marginBottom: '8px'}}>Qualifications</h3>
              <ul style={{marginBottom: '16px'}}>
                <li>Active student/fresh graduate (Marketing, Communication, Management, or Technology)</li>
                <li>Familiar with social media marketing</li>
                <li>Able to write light content in Indonesian/English</li>
                <li>Creative, communicative, eager to learn, and interested in SaaS/AI startups</li>
                <li>Plus: basic experience with Canva/Notion/SEO</li>
              </ul>
              <h3 style={{fontWeight: 600, fontSize: '1.08rem', marginBottom: '8px'}}>Benefits</h3>
              <ul>
                <li>Real experience building SaaS AI startup branding from scratch</li>
                <li>Mentorship from Growth Product Manager & Founder</li>
                <li>Internship certificate & LinkedIn recommendation</li>
                <li>Opportunity to build a digital marketing portfolio</li>
                <li>Internet allowance Rp50,000 - 70,000</li>
                <li>Commission per new client: Rp100,000 - Rp300,000 per paid sign-up</li>
                <li>Milestone bonuses</li>
              </ul>
            </div>
            {/* UI/UX Intern */}
            <div style={{background: colors.card, border: `2px solid ${colors.secondary}`, borderRadius: '12px', padding: '32px', flex: '1 1 380px', minWidth: '320px', boxShadow: '0 2px 8px rgba(0,0,0,0.04)'}}>
              <h2 style={{color: colors.secondary, fontWeight: 700, fontSize: '1.3rem', marginBottom: '12px'}}>UI/UX Intern</h2>
              <h3 style={{fontWeight: 600, fontSize: '1.08rem', marginBottom: '8px'}}>Responsibilities</h3>
              <ul style={{marginBottom: '16px'}}>
                <li>Conduct user research & interviews with QA engineers/developers</li>
                <li>Create wireframes, prototypes, and user flows using Figma</li>
                <li>Help design basic design systems (typography, colors, UI components)</li>
                <li>Test & iterate designs based on user feedback</li>
                <li>Collaborate with Marketing Intern to provide user insights</li>
                <li>Document design process and improvements</li>
              </ul>
              <h3 style={{fontWeight: 600, fontSize: '1.08rem', marginBottom: '8px'}}>Qualifications</h3>
              <ul style={{marginBottom: '16px'}}>
                <li>Active student/fresh graduate (Design, Informatics, Information Systems, Visual Communication Design, or similar)</li>
                <li>Familiar with design tools (Figma required, Plus: Miro, Notion)</li>
                <li>Has a UI/UX design portfolio (college/freelance projects welcome)</li>
                <li>Interested in SaaS, AI, and software engineering</li>
                <li>Communicative, open to feedback, and detail-oriented</li>
              </ul>
              <h3 style={{fontWeight: 600, fontSize: '1.08rem', marginBottom: '8px'}}>Benefits</h3>
              <ul>
                <li>Hands-on experience in UI/UX for SaaS startups</li>
                <li>Mentorship from Growth Product Manager & Founder</li>
                <li>Internship certificate & LinkedIn recommendation</li>
                <li>Real portfolio (AgentQ AI wireframe/prototype)</li>
                <li>Internet allowance Rp50,000 - 70,000</li>
                <li>Commission per new client: Rp100,000 - Rp300,000 per paid sign-up</li>
                <li>Performance bonus if design system & prototype go live and increase engagement/retention</li>
              </ul>
            </div>
          </div>
          <style>{`
            @media (max-width: 900px) {
              .career-cards {
                flex-direction: column !important;
                gap: 20px !important;
              }
            }
            @media (max-width: 600px) {
              .career-cards > div {
                min-width: 0 !important;
                padding: 18px !important;
              }
              .career-note {
                padding: 10px 6px !important;
                font-size: 0.98rem !important;
              }
            }
          `}</style>
        </section>
      </div>
    </Layout>
  );
}
