# Self-Hosted Runner CI/CD Demo

A full-stack application built to learn and experiment with **GitHub Actions**, **Self-Hosted Runners**, and **automated deployment**.

Unlike a typical CRUD project, the primary objective of this repository is to gain hands-on experience with DevOps concepts such as Continuous Integration (CI), Continuous Deployment (CD), Docker, Nginx, and Linux server management.

The application itself is intentionally simple—a basic CRUD system—so the focus remains on designing and implementing a deployment pipeline similar to what is commonly used in production environments.

---

# Project Goals

This project was created to practice and understand:

* GitHub Actions
* Self-Hosted Runner
* Continuous Integration (CI)
* Continuous Deployment (CD)
* Docker & Docker Compose
* Linux Server Administration
* Nginx Reverse Proxy
* Frontend Deployment
* Backend Container Deployment
* Environment Variable Management

---

# Tech Stack

## Backend

* Express.js
* Node.js

## Frontend

* Vite
* JavaScript

## Database

* PostgreSQL

## DevOps

* GitHub Actions
* Self-Hosted Runner
* Docker
* Docker Compose
* Nginx
* Ubuntu Server
* Linux

---

# Project Structure

```text
.
├── backend/
│   ├── src/
│   └── Dockerfile
│
├── frontend/
│   ├── src/
│   └── vite.config.js
│
├── nginx/
│   └── nginx.conf
│
├── .github/
│   └── workflows/
│       ├── ci.yml
│       └── cd.yml
│
├── docker-compose.yml
│
└── README.md
```

---

# Features

Application

* Basic CRUD operations
* REST API using Express
* PostgreSQL database
* Vite frontend

Infrastructure

* Dockerized backend
* PostgreSQL running with Docker Compose
* Automated deployment using GitHub Actions
* Self-Hosted Runner
* Nginx reverse proxy
* Frontend deployment automation

---

# System Architecture

```text
                    GitHub Repository
                           │
                           │ Push
                           ▼
                   GitHub Actions
                    ┌───────────────┐
                    │               │
                    ▼               ▼
              CI Workflow      CD Workflow
        (GitHub Hosted Runner) (Self-Hosted Runner)
                    │               │
                    │               │
              npm install      Build Docker
              npm test         Docker Compose
                                Deploy Frontend
                                Reload Nginx
                    │
                    ▼
              Ubuntu Server
          ┌───────────────────────┐
          │                       │
          │      Nginx            │
          │         │             │
          │         ▼             │
          │    Vite Static Files  │
          │                       │
          │       Express API     │
          │           │           │
          │           ▼           │
          │      PostgreSQL       │
          │                       │
          └───────────────────────┘
```

---

# Continuous Integration (CI)

The CI workflow is executed using a **GitHub-hosted runner**.

It is triggered whenever code is pushed to the `main` branch or when a Pull Request is opened.

The workflow performs:

* Checkout source code
* Setup Node.js
* Install dependencies
* Run automated tests

Workflow

```text
Developer
     │
     ▼
Push / Pull Request
     │
     ▼
GitHub Hosted Runner
     │
     ├── Checkout
     ├── npm install
     └── npm test
```

---

# Continuous Deployment (CD)

The CD workflow is executed using a **Self-Hosted Runner** running directly on the deployment server.

Deployment steps

1. Checkout latest source code
2. Copy production environment variables
3. Stop running containers
4. Build new Docker images
5. Start containers with Docker Compose

Workflow

```text
Developer
      │
      ▼
Push to main
      │
      ▼
GitHub Actions
      │
      ▼
Self-Hosted Runner
      │
      ├── Checkout
      ├── Copy .env
      ├── docker compose down
      └── docker compose up -d --build
```

Environment variables are stored **outside the repository** and copied during deployment to avoid exposing sensitive information.

---

# Frontend Deployment

The frontend is built using **Vite**.

Deployment process

1. Build production files
2. Copy generated files to the Nginx web directory
3. Replace the existing Nginx configuration
4. Reload Nginx

Nginx is responsible for

* Serving static frontend files
* Reverse proxying API requests
* Supporting Single Page Application (SPA) routing

---

# Backend Deployment

The backend is containerized using Docker.

Docker Compose manages

* Express API
* PostgreSQL Database

Deployment is fully automated through GitHub Actions and the Self-Hosted Runner.

---

# CI/CD Workflow Summary

```text
                Push Code
                    │
                    ▼
             GitHub Repository
                    │
                    ▼
             GitHub Actions
             ┌──────────────┐
             │              │
             ▼              ▼
          CI Pipeline   CD Pipeline
             │              │
      npm install      docker compose
      npm test         Build
                        Deploy
                        Restart
             │              │
             └──────┬───────┘
                    ▼
             Ubuntu Server
```

---

# Security

Production secrets are **not committed** to the repository.

Instead

* `.env` is stored on the deployment server
* GitHub Actions copies the production environment during deployment
* Sensitive configuration remains outside version control

---

# Learning Outcomes

Through this project I gained practical experience with

* GitHub Actions
* Self-Hosted Runners
* CI/CD Pipelines
* Docker
* Docker Compose
* Linux
* Ubuntu Server
* Nginx
* Reverse Proxy
* Environment Variables
* Deployment Automation

---

# Future Improvements

Planned enhancements include

* Zero-downtime deployment
* Docker image registry
* Health checks
* Automatic rollback
* Deployment notifications
* HTTPS with Let's Encrypt
* Monitoring using Prometheus & Grafana
* Log aggregation
* Kubernetes deployment
* Multi-environment deployment (Development / Staging / Production)

---

# Repository Purpose

The application itself is intentionally simple.

The primary objective of this repository is to demonstrate a complete DevOps workflow using GitHub Actions, Self-Hosted Runners, Docker, Docker Compose, Nginx, and Linux server deployment rather than building a feature-rich application.
