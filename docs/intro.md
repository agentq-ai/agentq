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

### Preparation (Prerequisite)

1. Make sure you already install <strong>Docker</strong> (latest version recommended) & <strong>PostgreSQL</strong> (version 17 recommended)

2. Create new database with name : <strong>agentq_opensource</strong>

```bash
CREATE DATABASE agentq_opensource;
```

3. Pull the latest version agentq image

```bash
# Pull the latest version
docker pull agentqai/agentq-lite:latest
```

4. Run the agentq image
```bash
# Run the container
docker run -d -p 80:80 \
  -e DB_HOST=host.docker.internal or localhost or your_IP \
  -e DB_PORT=5432 \
  -e DB_USERNAME=your_db_user \
  -e DB_PASSWORD=your_db_password \
  -e DB_DATABASE=agentq_opensource \
  --name agentq \
  agentqai/agentq-lite:latest
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
