---
sidebar_position: 1
---

# Installation

## Introduction
Simplify Test Case Management with **AgentQ**'s Powerful AI.

Streamline your testing with AI-driven test case creation and boost efficiency.

---

## Key Features

✔ **AI-Powered Automation** - Leverage AI for test case generation and analysis  
✔ **Project Management** - Organize tests into projects and test runs  
✔ **API Integration** - Connect with 3rd-party tools via API  
✔ **On-Premise Ready** - Self-hosted solution with Docker support  

---

## Installation with Docker

Get started with AgentQ Lite in seconds using Docker:

```bash
# Pull the latest version
docker pull agentqai/agentq-lite:latest

# Run the container (maps to port 80)
docker run -d -p 80:80 agentqai/agentq-lite
```

---

## Getting Started

### Access the AgentQ
Access the web interface at:  
`http://localhost:80` (after Docker installation)
<img src={require('@site/static/img/login-agentqlite.png').default} alt="login agentq.id" style={{ maxWidth: '30%'}} />

### Credential (default)

- Email
```bash
admin@agentq.id
```

- Password
```bash
agentq
```

---

## How to Use

### Projects
- Create projects to group related test cases
- Set project-specific configurations

### Test Cases
- Design manual or AI-generated test cases
- Add steps, expected results, and tags

### Test Runs
- Execute test cases in batches
- Track pass/fail status and metrics

### API Key Setup
1. Go to **Settings > API Keys**
2. Paste your key from [agentq.id](https://agentq.id)
3. Save to activate AI features

#### Get Your API Key
To unlock AI features:
1. Sign up and sign in at [agentq.id](https://agentq.id)
<img src={require('@site/static/img/login-agentqid.png').default} alt="login agentq.id" style={{ maxWidth: '30%'}} />

2. Navigate to **API Keys** in your dashboard
3. Copy your unique key
<img src={require('@site/static/img/apikey.png').default} alt="api key" style={{ maxWidth: '100%' }} />


### 3rd-Party Integrations
Connect with:
- Confluence (Atlassian)
<!-- - CI/CD pipelines (Jenkins, GitHub Actions) -->
<!-- - Bug trackers (Jira, Trello) -->
<!-- - Messaging (Slack, Teams) -->

---

## Need Help?
- 📚 [Documentation](https://agentq.id/agentq/docs/intro/)  
- ✉️ [support@agentq.id](mailto:support@agentq.id)  
- 🐞 [Report Issues](https://github.com/agentq-ai/agentq/issues)  
