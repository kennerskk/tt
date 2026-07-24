# Self-Hosted Runner CI/CD Demo

A full-stack demo project created to learn and experiment with GitHub Actions Self-Hosted Runner and automated deployment workflows.

The main goal of this project is **not** to build a complex application, but to gain hands-on experience with DevOps practices including CI/CD, Docker, Nginx, and Linux server deployment.

---

## Tech Stack

### Backend
- Express.js
- Node.js

### Frontend
- Vite
- JavaScript

### Database
- PostgreSQL

### DevOps
- GitHub Actions
- Self-Hosted Runner
- Docker
- Docker Compose
- Nginx
- Ubuntu Server
- Linux

---

## Project Structure

```
.
├── backend/
├── frontend/
├── nginx/
│   └── nginx.conf
├── docker-compose.yml
├── .github/
│   └── workflows/
└── README.md
```

---

## Features

- Basic CRUD application
- REST API using Express
- Vite frontend
- PostgreSQL database
- Docker Compose for backend and database
- Nginx reverse proxy
- Automated deployment using GitHub Actions Self-Hosted Runner

---

## Architecture

```
Developer
      │
      ▼
GitHub Repository
      │
      ▼
GitHub Actions
      │
      ▼
Self-Hosted Runner
      │
      ├──────────────┐
      ▼              ▼
Build Frontend   Restart Docker Compose
      │              │
      ▼              ▼
Copy dist/      Backend + PostgreSQL
to Nginx
```

---

## Deployment Flow

### Frontend

1. Push code to GitHub
2. GitHub Actions is triggered
3. Self-hosted runner builds the Vite application
4. Generated `dist` files are copied to the Nginx web directory
5. Custom `nginx.conf` is copied to the server
6. Nginx is reloaded

---

### Backend

1. Push backend changes
2. GitHub Actions runs on the self-hosted runner
3. Docker image is rebuilt
4. Docker Compose restarts the backend service
5. PostgreSQL data is preserved using Docker volumes

---

## Nginx

The project includes a custom Nginx configuration used to

- Serve the Vite static files
- Reverse proxy API requests
- Support SPA routing

---

## CI/CD

GitHub Actions automates the deployment process using a self-hosted runner.

Pipeline includes

- Checkout source code
- Install dependencies
- Build frontend
- Deploy frontend assets
- Update Nginx configuration
- Rebuild backend containers
- Restart services with Docker Compose

---

## Learning Objectives

This project was created to practice

- GitHub Actions
- Self-Hosted Runner
- CI/CD Pipeline
- Docker
- Docker Compose
- Linux server management
- Nginx configuration
- Reverse Proxy
- Full-stack deployment

---

## Future Improvements

- HTTPS with Let's Encrypt
- Zero-downtime deployment
- Health checks
- Monitoring with Prometheus & Grafana
- Automated testing
- Rollback deployment
- Multi-environment deployment
