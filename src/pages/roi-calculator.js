import React, { useState } from 'react';
import styles from './roi-calculator.module.css';
import Layout from '@theme/Layout';

const qaData = {
  jr: { manual: 6000000, automation: 8000000, times: [60, 80, 70, 40] },
  mid: { manual: 8000000, automation: 10000000, times: [40, 60, 60, 30] },
  sr: { manual: 12000000, automation: 15000000, times: [30, 45, 40, 20] }
};

function fmt(n) {
  if (isNaN(n) || !isFinite(n)) return 'Rp 0';
  return 'Rp ' + n.toLocaleString('id-ID');
}

export default function ROICalculator() {
  const [level, setLevel] = useState('mid');
  const agentqCost = 4900000;
  const agentqTime = 21;
  const agentqCostFmt = fmt(agentqCost);

  const data = qaData[level];
  const totalTime = data.times.reduce((a, b) => a + b, 0);
  const totalCost = data.manual + data.automation;

  return (
    <Layout title="QA Saving Calculator">
      <h1 style={{textAlign: 'center', margin: '30px 0'}}>QA Saving Calculator</h1>

      <div style={{display: 'flex', flexWrap: 'wrap', gap: '40px', justifyContent: 'center', alignItems: 'flex-start', width: '100%', maxWidth: '1100px', margin: '0 auto 32px auto'}}>

        {/* QA Konvensional */}
        <div style={{
          borderRadius: '10px',
          padding: '18px',
          background: '#fff',
          flex: '1 1 400px',
          minWidth: '340px',
          maxWidth: '500px',
          boxSizing: 'border-box',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
        }}>
          <h2>QA Konvensional</h2>
          <div style={{marginBottom: '15px'}}>
            <label htmlFor="qaLevel" style={{display: 'block', marginBottom: '6px', fontWeight: 'bold'}}>Pilih Level QA:</label>
            <select id="qaLevel" value={level} onChange={e => setLevel(e.target.value)} style={{width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '6px', fontSize: '14px', backgroundColor: '#fff'}}>
              <option value="jr">Junior</option>
              <option value="mid">Mid</option>
              <option value="sr">Senior</option>
            </select>
          </div>
          <div style={{marginBottom: '15px'}}>
            <label style={{display: 'block', marginBottom: '6px', fontWeight: 'bold'}}>QA Manual Salary (Rp):</label>
            <input type="text" value={data.manual.toLocaleString('id-ID')} disabled style={{width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '6px', fontSize: '14px', backgroundColor: '#eee'}} />
          </div>
          <div style={{marginBottom: '15px'}}>
            <label style={{display: 'block', marginBottom: '6px', fontWeight: 'bold'}}>QA Automation Salary (Rp):</label>
            <input type="text" value={data.automation.toLocaleString('id-ID')} disabled style={{width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '6px', fontSize: '14px', backgroundColor: '#eee'}} />
          </div>
          <table style={{width: '100%', borderCollapse: 'collapse', marginTop: '15px', background: '#fff'}}>
            <thead>
              <tr>
                <th style={{padding: '12px', border: '1px solid #ddd', textAlign: 'left', background: '#f4f4f4'}}>Action</th>
                <th style={{padding: '12px', border: '1px solid #ddd', textAlign: 'center', width: '150px', background: '#f4f4f4'}}>Time (Minutes)</th>
              </tr>
            </thead>
            <tbody>
              <tr><td style={{padding: '12px', border: '1px solid #ddd'}}>Manual Test Case Creation</td><td style={{padding: '12px', border: '1px solid #ddd', textAlign: 'center'}}>{data.times[0]}</td></tr>
              <tr><td style={{padding: '12px', border: '1px solid #ddd'}}>Create Script Automation</td><td style={{padding: '12px', border: '1px solid #ddd', textAlign: 'center'}}>{data.times[1]}</td></tr>
              <tr><td style={{padding: '12px', border: '1px solid #ddd'}}>Manual Requirement Analysis</td><td style={{padding: '12px', border: '1px solid #ddd', textAlign: 'center'}}>{data.times[2]}</td></tr>
              <tr><td style={{padding: '12px', border: '1px solid #ddd'}}>Manual Test Reporting</td><td style={{padding: '12px', border: '1px solid #ddd', textAlign: 'center'}}>{data.times[3]}</td></tr>
            </tbody>
            <tfoot>
              <tr>
                <th style={{padding: '12px', border: '1px solid #ddd', background: '#fafafa'}}>Total Time:</th>
                <th style={{padding: '12px', border: '1px solid #ddd', textAlign: 'center', background: '#fafafa'}}>{totalTime}</th>
              </tr>
            </tfoot>
          </table>
          <div style={{marginTop: '15px', padding: '12px', background: '#fafafa', border: '1px solid #ddd', borderRadius: '6px', fontWeight: 'bold'}}>
            Total Human Cost: <span>{fmt(totalCost)}</span>
          </div>
        </div>

        {/* AgentQ (AI-Assisted) */}
        <div style={{
          borderRadius: '10px',
          padding: '18px',
          background: '#fff',
          flex: '1 1 400px',
          minWidth: '340px',
          maxWidth: '500px',
          boxSizing: 'border-box',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
        }}>
          <h2>AgentQ (AI-Assisted)</h2>
          <table style={{width: '100%', borderCollapse: 'collapse', marginTop: '15px', background: '#fff'}}>
            <thead>
              <tr>
                <th style={{padding: '12px', border: '1px solid #ddd', textAlign: 'left', background: '#f4f4f4'}}>Action</th>
                <th style={{padding: '12px', border: '1px solid #ddd', textAlign: 'center', width: '150px', background: '#f4f4f4'}}>Time (Minutes)</th>
              </tr>
            </thead>
            <tbody>
              <tr><td style={{padding: '12px', border: '1px solid #ddd'}}>AI Test Case Creation</td><td style={{padding: '12px', border: '1px solid #ddd', textAlign: 'center'}}>5</td></tr>
              <tr><td style={{padding: '12px', border: '1px solid #ddd'}}>No Code Automation</td><td style={{padding: '12px', border: '1px solid #ddd', textAlign: 'center'}}>10</td></tr>
              <tr><td style={{padding: '12px', border: '1px solid #ddd'}}>AI Requirement Analysis</td><td style={{padding: '12px', border: '1px solid #ddd', textAlign: 'center'}}>5</td></tr>
              <tr><td style={{padding: '12px', border: '1px solid #ddd'}}>AI Test Reporting</td><td style={{padding: '12px', border: '1px solid #ddd', textAlign: 'center'}}>1</td></tr>
            </tbody>
            <tfoot>
              <tr>
                <th style={{padding: '12px', border: '1px solid #ddd', background: '#fafafa'}}>Total Time:</th>
                <th style={{padding: '12px', border: '1px solid #ddd', textAlign: 'center', background: '#fafafa'}}>{agentqTime}</th>
              </tr>
            </tfoot>
          </table>
          <div style={{marginTop: '15px', padding: '12px', background: '#fafafa', border: '1px solid #ddd', borderRadius: '6px', fontWeight: 'bold'}}>
            AgentQ Subscription Cost: <span>{agentqCostFmt}</span>
          </div>
          <a href="https://agentq.id/login" target="_blank" rel="noopener noreferrer" style={{display: 'inline-block', background: '#C73939', color: 'white', padding: '14px 32px', borderRadius: '8px', fontWeight: 600, fontSize: '1.08rem', textDecoration: 'none', boxShadow: '0 2px 8px rgba(199,57,57,0.10)', transition: 'background 0.2s', marginTop: '12px'}}>Try AgentQ Free</a>
        </div>
      </div>

      {/* Note bawah */}
      <div style={{width: '100%', margin: '32px auto 0 auto', textAlign: 'center'}}>
        <span style={{display: 'inline-block', background: '#fffbe6', color: '#222', borderRadius: '8px', padding: '14px 18px', fontSize: '1rem', fontWeight: 500, boxShadow: '0 2px 8px rgba(0,0,0,0.04)'}}>
          <b>Note:</b> AgentQ doesn't 100% replace QA, but it does help simplify the traditional QA testing process. AgentQ AI still requires at least one Junior QA to operate and validate its results
        </span>
      </div>
    </Layout>
  );
}
