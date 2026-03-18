# My Developer Portfolio (Portfolio_PG)

Hey! This is the source code for my personal developer portfolio. 

Instead of just deploying a static site to Vercel or Netlify, I decided to treat this like a real production environment to get some hands-on practice with DevOps. The whole project is containerized, runs a custom Node/Express backend to handle API routes, and uses Jenkins to completely automate the deployment pipeline.

### System Architecture

* **Multi-Stage Docker Build:** I set up a single `Dockerfile` that handles everything. Stage 1 uses Vite to compile the React frontend. Stage 2 takes that compiled `dist` folder and serves it through a lightweight Node.js (Alpine) container, which also handles the backend API.
* **Automated CI/CD:** I wrote a `Jenkinsfile` to handle deployments. Whenever a build triggers, Jenkins automatically pulls the latest code, builds a new Docker image, shuts down the old container, and spins up the new one. 
* **Routing & Network Flow:** The Express backend catches wildcard routes (`/*`) to serve the React SPA. However, it specifically intercepts `/api/contact` to securely handle my contact form.

### Key Features

* **Zero-Downtime Deployments:** Thanks to the Jenkins pipeline, updates get pushed to production without me having to manually SSH into the server and run scripts.
* **Custom Email Backend:** Instead of relying on a third-party client-side email service like EmailJS, I built a custom Express controller using `nodemailer`. It processes the contact form payload and sends it straight to my inbox.
* **Environment Security:** The `.env` files never touch version control. Sensitive stuff like my email credentials and port numbers are injected directly by the Jenkins workspace at runtime.
* **Custom UI & Animations:** Built with React 19 and Tailwind CSS v4. I also wrote some custom Canvas API animations (like the starfield background) and used Framer Motion for smooth page transitions.

### Tech Stack

* **Frontend:** React 19, Vite, Tailwind CSS v4
* **Backend:** Node.js, Express.js
* **DevOps & Infrastructure:** Docker, Docker-Compose, Jenkins

---

### Local Development Setup

If you want to run this locally, here is how to get it going.

**1. Clone the repo:**
```bash
git clone https://github.com/Pratham2779/Portfolio_PG.git
cd Portfolio_PG
```

**2. Setup your environment variables:**
Create a `.env` file inside the `backend/` folder and add your credentials:
```env
PORT=5000
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password
```

**3. Run via Docker (How it runs in production):**
```bash
docker build -t portfolio-pg .
docker run -p 8081:8081 --env-file ./backend/.env portfolio-pg
```
*The app will be available at `http://localhost:8081`.*

**4. Run Manually (For development):**
You'll need two terminals for this.

*Terminal 1 (Frontend):*
```bash
cd frontend 
npm install 
npm run dev
```

*Terminal 2 (Backend):*
```bash
cd backend 
npm install 
npm start
```

***

**Does this hit the right tone for you, or do you want me to adjust how any of the specific technical details are explained?**
