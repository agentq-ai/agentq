import React from 'react';
import Layout from '@theme/Layout';

export default function AITestCaseCreation() {
  return (
    <Layout title="AgentQ AI Test Case Creation">
      <section style={{background: '#18181b', color: 'white', padding: '64px 0 32px 0', textAlign: 'center'}}>
        <h1 style={{fontSize: '2.7rem', fontWeight: 700, marginBottom: '1.2rem'}}>Powerful and Intuitive AI Test Case Creation</h1>
        <p style={{fontSize: '1.25rem', marginBottom: '2.2rem', opacity: 0.92}}>Plan, execute, and analyze your QA process with AgentQ's AI-powered platform. Create, manage, and execute test cases faster and smarter.</p>
        <a href="https://agentq.id/login" target="_blank" rel="noopener noreferrer" style={{background: '#C73939', color: 'white', padding: '18px 38px', borderRadius: '10px', fontWeight: 600, fontSize: '1.1rem', textDecoration: 'none', boxShadow: '0 2px 8px rgba(199,57,57,0.12)', transition: 'background 0.2s'}}>Try AgentQ Free</a>
      </section>
      <div style={{maxWidth: 1200, margin: '0 auto', padding: '32px 16px'}}>
        {/* Features Section */}
        <div style={{display: 'flex', justifyContent: 'center', gap: '2rem', marginTop: '2.5rem', marginBottom: '2.5rem', flexWrap: 'wrap'}}>
          <div style={{background: 'rgba(24,24,27,0.97)', color: 'white', borderRadius: 16, boxShadow: '0 2px 16px rgba(0,0,0,0.10)', padding: '2rem', minWidth: 260, maxWidth: 340, textAlign: 'center'}}>
            <img src={require('../../static/img/tutorial/AI Test Case Creation/data prosesing.png').default} alt="Easy Test Management" style={{width: '56px', marginBottom: '1rem'}} />
            <h3 style={{fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.7rem'}}>Make test management easy</h3>
            <p style={{fontSize: '1rem', color: '#e5e7eb'}}>Automate and organize your test cases with AI. Reduce manual effort and keep your QA process streamlined.</p>
          </div>
          <div style={{background: 'rgba(24,24,27,0.97)', color: 'white', borderRadius: 16, boxShadow: '0 2px 16px rgba(0,0,0,0.10)', padding: '2rem', minWidth: 260, maxWidth: 340, textAlign: 'center'}}>
            <img src={require('../../static/img/tutorial/AI Test Case Creation/success generate tc.png').default} alt="Increase Speed" style={{width: '56px', marginBottom: '1rem'}} />
            <h3 style={{fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.7rem'}}>Increase your testing speed & efficiency</h3>
            <p style={{fontSize: '1rem', color: '#e5e7eb'}}>Generate, execute, and review test cases in seconds. Accelerate your release cycles with intelligent automation.</p>
          </div>
          <div style={{background: 'rgba(24,24,27,0.97)', color: 'white', borderRadius: 16, boxShadow: '0 2px 16px rgba(0,0,0,0.10)', padding: '2rem', minWidth: 260, maxWidth: 340, textAlign: 'center'}}>
            <img src={require('../../static/img/tutorial/AI Test Case Creation/contoh lampirkan prd .png').default} alt="Insights" style={{width: '56px', marginBottom: '1rem'}} />
            <h3 style={{fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.7rem'}}>Make informed testing improvements</h3>
            <p style={{fontSize: '1rem', color: '#e5e7eb'}}>Get actionable insights and recommendations to improve your test coverage and QA strategy.</p>
          </div>
        </div>
        <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginTop: '2rem'}}>
          <div style={{background: '#fff', borderRadius: 16, boxShadow: '0 2px 16px rgba(0,0,0,0.07)', padding: '2rem'}}>
            <img src={require('../../static/img/tutorial/AI Test Case Creation/click button generate with ai.png').default} alt="Generate Test Case" style={{width: '100%', maxWidth: '320px', marginBottom: '1rem', borderRadius: '8px'}} />
            <h2 style={{fontSize: '1.2rem', fontWeight: 600, marginBottom: '0.7rem'}}>Generate Test Cases with AI</h2>
            <p style={{fontSize: '1rem', color: '#444'}}>Let AgentQ analyze your product requirements and instantly generate comprehensive test cases. Save time and ensure coverage with AI-driven suggestions.</p>
          </div>
          <div style={{background: '#fff', borderRadius: 16, boxShadow: '0 2px 16px rgba(0,0,0,0.07)', padding: '2rem'}}>
            <img src={require('../../static/img/tutorial/AI Test Case Creation/preview test case and button generate more test case atau complete review.png').default} alt="Preview Test Case" style={{width: '100%', maxWidth: '320px', marginBottom: '1rem', borderRadius: '8px'}} />
            <h2 style={{fontSize: '1.2rem', fontWeight: 600, marginBottom: '0.7rem'}}>Preview & Review Test Cases</h2>
            <p style={{fontSize: '1rem', color: '#444'}}>Easily review, edit, and approve AI-generated test cases. Collaborate with your team to refine and finalize your test suite before execution.</p>
          </div>
        </div>
        <div style={{marginTop: '2.5rem', textAlign: 'center'}}>
          <img src={require('../../static/img/tutorial/AI Test Case Creation/success generate tc.png').default} alt="Success Generate" style={{width: '80px', marginBottom: '1rem'}} />
          <h3 style={{fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.5rem'}}>Seamless Integration</h3>
          <p style={{fontSize: '1rem', color: '#444', maxWidth: 700, margin: '0 auto'}}>AgentQ integrates with your existing workflow, making it easy to adopt AI-powered test management. Experience faster releases and higher quality with less manual effort.</p>
        </div>
      </div>
    </Layout>
  );
}
