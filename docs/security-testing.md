# Security Testing (DAST)

Learn how to use AgentQ's Dynamic Application Security Testing (DAST) features to identify security vulnerabilities in your applications.

:::note
This feature is only available in the Enterprise version.
:::

## Overview
DAST (Dynamic Application Security Testing) helps you identify security vulnerabilities in your web applications by analyzing them while they're running. This automated security testing approach simulates real-world attacks to find potential security weaknesses.

## Prerequisites
- AgentQ Enterprise account
- Test cases prepared for security testing
- Target application URL

## Steps

### 1. Start Automation
Click the "Automate by AgentQ" button to begin the security testing process.

![Start Automation](/img/tutorial/Dast%20Testing/click%20button%20automate%20by%20AgentQ.png)

### 2. Select Test Case
Choose a test case that has been configured for security testing (type: security - DAST).

![Select Test Case](/img/tutorial/Dast%20Testing/select%20test%20case%20dengan%20type%20security%20-%20dast.png)

### 3. Select Test Type
Choose "Security DAST" from the available testing options.

![Select DAST](/img/tutorial/Dast%20Testing/Select%20security%20dast.png)

### 4. Run Security Test
Click the "Run" button to start the security testing process.

![Run Test](/img/tutorial/Dast%20Testing/click%20button%20run.png)

### 5. Monitor Testing Progress
The system will begin the security testing process. You can monitor the progress and view real-time logs of the security scan.

![Testing Progress](/img/tutorial/Dast%20Testing/Proses%20security%20testing%20and%20log.png)

## Key Features
- Automated vulnerability scanning
- Real-time testing logs
- Detailed security reports
- Multiple security test types
- Risk assessment and scoring

## Best Practices
1. **Test Planning**
   - Plan your security tests during off-peak hours
   - Ensure you have proper authorization for testing
   - Document all test scenarios

2. **Test Configuration**
   - Use appropriate test cases for different security aspects
   - Set proper scope for security scanning
   - Configure authentication if required

3. **Result Analysis**
   - Review all identified vulnerabilities
   - Prioritize fixes based on risk levels
   - Document and track remediation progress

## Security Considerations
- Always obtain proper authorization before running security tests
- Monitor system performance during testing
- Follow security testing compliance requirements
- Keep security test results confidential

## Troubleshooting
- If tests fail to start, verify your test case configuration
- Ensure target application is accessible
- Check network connectivity and firewall settings
- Verify authentication credentials if required