# AWS Serverless Contact Form

## Project Overview

This project is a fully serverless contact form application built using AWS cloud services.

The frontend is hosted on Amazon S3 and distributed globally using CloudFront.
The backend is powered by API Gateway and AWS Lambda.
Monitoring and alerting are configured using CloudWatch and SNS.

This architecture ensures scalability, cost-efficiency, and high availability.

---

## Architecture Flow

1. User submits contact form from static website
2. CloudFront serves content from S3
3. API Gateway receives form request
4. Lambda function processes the request
5. CloudWatch monitors logs and errors
6. SNS sends email alerts if failures occur



## AWS Services Used

- Amazon S3 (Static Website Hosting)
- Amazon CloudFront (CDN)
- Amazon API Gateway (REST API)
- AWS Lambda (Backend Logic)
- Amazon CloudWatch (Monitoring & Logs)
- Amazon SNS (Email Notifications)



## Monitoring & Alerts Implemented

- Lambda Error Alarm
- API Gateway 5XX Error Alarm
- API Gateway 4XX Error Alarm
- Lambda Duration Alarm
- CloudWatch Dashboard
- SNS Email Notifications



## Key Features

- Fully Serverless Architecture
- Real-time Monitoring
- Automatic Email Alerts on Failures
- Scalable and Cost-Effective Design
- CDN-enabled Global Distribution



## Skills Demonstrated

- Serverless Architecture Design
- API Integration
- Cloud Monitoring & Alerting
- AWS Security Basics
- DevOps Best Practices



## Project Structure

