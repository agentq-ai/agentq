
import React, { useState } from 'react';
import Layout from '@theme/Layout';

const colors = {
  primary: '#C73939',
  secondary: '#222',
  accent: '#F5F5F5',
  card: '#fff',
  border: '#222',
  highlight: '#fffbe6',
};

export default function AccessibilityTestingTool() {
  const [modalImg, setModalImg] = useState(null);
  const [modalAlt, setModalAlt] = useState('');

  const handleImgClick = (src, alt) => {
    setModalImg(src);
    setModalAlt(alt);
  };

  const closeModal = () => setModalImg(null);

  return (
    <Layout title="AI Test Case Creation">
      <div style={{background: colors.accent, minHeight: '100vh', position: 'relative'}}>
        {/* Hero Section */}
        <section style={{background: colors.primary, color: '#fff', padding: '48px 0 32px 0', textAlign: 'center'}}>
          <h1 style={{fontSize: '2.6rem', fontWeight: 700, marginBottom: '18px'}}>AI Test Case Creation for Web & Apps</h1>
          <p style={{fontSize: '1.25rem', fontWeight: 400, marginBottom: '28px'}}>Automate your test case creation with AgentQ AI. Save time, improve accuracy, and ensure your test coverage meets your needs.</p>
          <div style={{display: 'flex', justifyContent: 'center', gap: '18px'}}>
            <a href="#" style={{background: colors.card, color: colors.primary, padding: '14px 32px', borderRadius: '8px', fontWeight: 600, fontSize: '1.08rem', textDecoration: 'none'}}>Try Demo</a>
            <a href="#" style={{background: colors.secondary, color: '#fff', padding: '14px 32px', borderRadius: '8px', fontWeight: 600, fontSize: '1.08rem', textDecoration: 'none'}}>Key Features</a>
          </div>
        </section>

        {/* What is AI Test Case Creation */}
        <section style={{padding: '48px 0', textAlign: 'center'}}>
          <h2 style={{fontSize: '2rem', fontWeight: 700, marginBottom: '18px'}}>What is AI Test Case Creation?</h2>
          <p style={{fontSize: '1.1rem', maxWidth: '700px', margin: '0 auto'}}>AI Test Case Creation is an AgentQ feature that lets you automatically generate test cases from requirements documents (PRD) using AI technology. This process helps QA and developers save time, improve consistency, and accelerate the application testing cycle.</p>
        </section>

        {/* AI Test Case Creation Process */}
        <section style={{background: colors.card, padding: '48px 0', textAlign: 'center', borderTop: `1px solid ${colors.border}`}}>
          <h2 style={{fontSize: '2rem', fontWeight: 700, marginBottom: '18px'}}>AI Test Case Creation Process</h2>
          <div style={{display: 'flex', justifyContent: 'center', gap: '32px', flexWrap: 'wrap', marginBottom: '32px'}}>
            <div style={{background: colors.accent, borderRadius: '10px', padding: '24px', minWidth: '220px', boxShadow: '0 2px 8px rgba(0,0,0,0.04)', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
              <div style={{fontWeight: 600, marginBottom: '10px'}}>1. Data Preparation</div>
              <img src={require('../../static/img/tutorial/AI Test Case Creation/click button generate with ai.png').default} alt="Click Generate with AI" style={{width: '100%', maxWidth: '180px', borderRadius: '6px', marginBottom: '8px', cursor: 'pointer'}} onClick={() => handleImgClick(require('../../static/img/tutorial/AI Test Case Creation/click button generate with ai.png').default, 'Click Generate with AI')} />
            </div>
            <div style={{background: colors.accent, borderRadius: '10px', padding: '24px', minWidth: '220px', boxShadow: '0 2px 8px rgba(0,0,0,0.04)', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
              <div style={{fontWeight: 600, marginBottom: '10px'}}>2. Data Processing</div>
              <img src={require('../../static/img/tutorial/AI Test Case Creation/proses membaca prd.png').default} alt="Reading PRD" style={{width: '100%', maxWidth: '180px', borderRadius: '6px', marginBottom: '8px', cursor: 'pointer'}} onClick={() => handleImgClick(require('../../static/img/tutorial/AI Test Case Creation/proses membaca prd.png').default, 'Reading PRD')} />
            </div>
            <div style={{background: colors.accent, borderRadius: '10px', padding: '24px', minWidth: '220px', boxShadow: '0 2px 8px rgba(0,0,0,0.04)', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
              <div style={{fontWeight: 600, marginBottom: '10px'}}>3. Review Test Cases</div>
              <img src={require('../../static/img/tutorial/AI Test Case Creation/preview test case and button generate more test case atau complete review.png').default} alt="Preview Test Cases" style={{width: '100%', maxWidth: '180px', borderRadius: '6px', cursor: 'pointer'}} onClick={() => handleImgClick(require('../../static/img/tutorial/AI Test Case Creation/preview test case and button generate more test case atau complete review.png').default, 'Preview Test Cases')} />
            </div>
            <div style={{background: colors.accent, borderRadius: '10px', padding: '24px', minWidth: '220px', boxShadow: '0 2px 8px rgba(0,0,0,0.04)', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
              <div style={{fontWeight: 600, marginBottom: '10px'}}>4. Completion</div>
              <img src={require('../../static/img/tutorial/AI Test Case Creation/success generate tc.png').default} alt="Success Generate Test Case" style={{width: '100%', maxWidth: '180px', borderRadius: '6px', cursor: 'pointer'}} onClick={() => handleImgClick(require('../../static/img/tutorial/AI Test Case Creation/success generate tc.png').default, 'Success Generate Test Case')} />
            </div>
          </div>
          <a href="#" style={{background: colors.primary, color: '#fff', padding: '14px 32px', borderRadius: '8px', fontWeight: 600, fontSize: '1.08rem', textDecoration: 'none'}}>Try Demo</a>
          {/* Modal for enlarged image */}
          {modalImg && (
            <div onClick={closeModal} style={{position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(0,0,0,0.7)', zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <img src={modalImg} alt={modalAlt} style={{maxWidth: '90vw', maxHeight: '90vh', borderRadius: '12px', boxShadow: '0 4px 32px rgba(0,0,0,0.25)', background: '#fff'}} />
            </div>
          )}
        </section>

        {/* Features & Support AI Test Case Creation */}
        <section style={{padding: '48px 0', textAlign: 'center'}}>
          <div style={{display: 'flex', justifyContent: 'center', gap: '40px', flexWrap: 'wrap'}}>
            <div style={{background: colors.card, borderRadius: '10px', padding: '32px', minWidth: '320px', boxShadow: '0 2px 8px rgba(0,0,0,0.04)'}}>
              <h3 style={{fontWeight: 700, fontSize: '1.3rem', marginBottom: '12px'}}>Upload PRD & Automatic Analysis</h3>
              <p style={{fontSize: '1rem'}}>Just upload your requirements document (PRD), AgentQ AI will read and analyze it to generate relevant test cases</p>
            </div>
            <div style={{background: colors.card, borderRadius: '10px', padding: '32px', minWidth: '320px', boxShadow: '0 2px 8px rgba(0,0,0,0.04)'}}>
              <h3 style={{fontWeight: 700, fontSize: '1.3rem', marginBottom: '12px'}}>Review & Customize Test Cases</h3>
              <p style={{fontSize: '1rem'}}>You can review, add, or edit the generated test cases before completing the process</p>
            </div>
          </div>
        </section>


        {/* Advantages of AI Test Case Creation */}
        <section style={{background: colors.card, padding: '48px 0', textAlign: 'center', borderTop: `1px solid ${colors.border}`}}>
          <h2 style={{fontSize: '2rem', fontWeight: 700, marginBottom: '18px'}}>Advantages of AgentQ AI Test Case Creation</h2>
          <div style={{display: 'flex', justifyContent: 'center', gap: '32px', flexWrap: 'wrap', marginBottom: '32px'}}>
            <div style={{background: colors.accent, borderRadius: '10px', padding: '24px', minWidth: '220px', boxShadow: '0 2px 8px rgba(0,0,0,0.04)'}}>Automatic Documentation</div>
            <div style={{background: colors.accent, borderRadius: '10px', padding: '24px', minWidth: '220px', boxShadow: '0 2px 8px rgba(0,0,0,0.04)'}}>Data Security</div>
            <div style={{background: colors.accent, borderRadius: '10px', padding: '24px', minWidth: '220px', boxShadow: '0 2px 8px rgba(0,0,0,0.04)'}}>24/7 Support</div>
            <div style={{background: colors.accent, borderRadius: '10px', padding: '24px', minWidth: '220px', boxShadow: '0 2px 8px rgba(0,0,0,0.04)'}}>Easy Integration</div>
          </div>
        </section>

        {/* FAQ Section */}
        <section style={{background: colors.accent, padding: '48px 0', textAlign: 'center'}}>
          <h2 style={{fontSize: '2rem', fontWeight: 700, marginBottom: '18px'}}>Frequently Asked Questions</h2>
          <div style={{maxWidth: '900px', margin: '0 auto', textAlign: 'left'}}>
            <details style={{marginBottom: '18px'}}>
              <summary style={{fontWeight: 600, fontSize: '1.08rem', cursor: 'pointer'}}>What is AI Test Case Creation?</summary>
              <p style={{marginLeft: '18px'}}>AgentQ feature to automatically generate test cases from requirements documents using AI.</p>
            </details>
            <details style={{marginBottom: '18px'}}>
              <summary style={{fontWeight: 600, fontSize: '1.08rem', cursor: 'pointer'}}>How does it work?</summary>
              <p style={{marginLeft: '18px'}}>Upload your PRD, AI will read and generate test cases, then you can review and finalize.</p>
            </details>
            <details style={{marginBottom: '18px'}}>
              <summary style={{fontWeight: 600, fontSize: '1.08rem', cursor: 'pointer'}}>Can I customize the test cases?</summary>
              <p style={{marginLeft: '18px'}}>Yes, you can add, edit, or delete test cases before completing the process.</p>
            </details>
          </div>
        </section>

        {/* CTA Section */}
        <section style={{background: colors.primary, color: '#fff', padding: '48px 0', textAlign: 'center'}}>
          <h2 style={{fontSize: '2.2rem', fontWeight: 700, marginBottom: '18px'}}>Start Automating Your Test Cases</h2>
          <p style={{fontSize: '1.15rem', marginBottom: '28px'}}>Get 100 minutes of free automated test case creation with AgentQ!</p>
          <a href="#" style={{background: colors.card, color: colors.primary, padding: '14px 32px', borderRadius: '8px', fontWeight: 600, fontSize: '1.08rem', textDecoration: 'none'}}>Try Free</a>
        </section>
      </div>
    </Layout>
  );
}
