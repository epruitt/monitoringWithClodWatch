

# monitoringWithClodWatch
 
A TypeScript AWS CDK project for infrastructure monitoring using **Amazon CloudWatch**. This repo provides a scaffolded CDK stack to define, deploy, and manage CloudWatch-based monitoring resources on AWS.
 
---
 
## Overview
 
`monitoringWithClodWatch` is an AWS Cloud Development Kit (CDK) application written in TypeScript. It enables developers to define CloudWatch dashboards, alarms, metrics, and log groups as infrastructure-as-code, making it easy to provision and maintain observability resources across AWS environments.
 
---
 
## Project Structure
 
```
monitoringWithClodWatch/
├── bin/            # CDK app entry point
├── lib/            # CDK stack definitions (CloudWatch constructs)
├── services/       # Service-level monitoring configurations
├── test/           # Jest unit tests for CDK stacks
├── cdk.json        # CDK toolkit configuration
├── jest.config.js  # Jest test configuration
├── tsconfig.json   # TypeScript compiler options
├── package.json    # Project dependencies and scripts
└── README.md       # Project documentation
```
 
---
 
## Prerequisites
 
- [Node.js](https://nodejs.org/) (v14 or later)
- [AWS CDK CLI](https://docs.aws.amazon.com/cdk/latest/guide/cli.html) (`npm install -g aws-cdk`)
- AWS credentials configured (`aws configure`)
---
 
## Getting Started
 
### 1. Install Dependencies
 
```bash
npm install
```
 
### 2. Bootstrap Your AWS Environment (first time only)
 
```bash
npx cdk bootstrap
```
 
### 3. Deploy the Stack
 
```bash
npx cdk deploy
```
 
---
 
## Available Commands
 
| Command | Description |
|---|---|
| `npm run build` | Compile TypeScript to JavaScript |
| `npm run watch` | Watch for changes and auto-compile |
| `npm run test` | Run Jest unit tests |
| `npx cdk deploy` | Deploy the stack to your default AWS account/region |
| `npx cdk diff` | Compare the deployed stack with current local state |
| `npx cdk synth` | Emit the synthesized CloudFormation template |
 
---
 
## Tech Stack
 
- **Language:** TypeScript (69.8%) / JavaScript (30.2%)
- **Framework:** AWS CDK v2
- **Monitoring Service:** Amazon CloudWatch
- **Testing:** Jest
- **IaC Output:** AWS CloudFormation
---
 
## Contributing
 
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/my-feature`)
3. Commit your changes (`git commit -m 'Add my feature'`)
4. Push to the branch (`git push origin feature/my-feature`)
5. Open a Pull Request
---
 
## License
 
This project is open source. See the repository for details.
 
---
 
## Author
 
**Emanuel Pruitt** — [GitHub Profile](https://github.com/epruitt)
