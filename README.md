# Mihir Khunt — Portfolio

A modern, interactive developer portfolio built with **React**, **Vite**, **Tailwind CSS v4**, and **Framer Motion**.

## 🚀 Live Demo

[View Portfolio →](https://your-portfolio-url.vercel.app)

## ✨ Features

- **Interactive DotGrid** background with mouse proximity & shock effects
- **GooeyNav** particle navbar with smooth transitions
- **Framer Motion** page transitions and scroll animations
- **Live API data** — Codeforces rating, solved count, and contests fetched in real time
- **Custom LeetCode stat card** with difficulty breakdown bars
- **Contact form** via Web3Forms (no backend needed)
- **Scroll progress bar** at the top of every page
- Fully responsive dark-mode design

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19 + Vite 7 |
| Styling | Tailwind CSS v4 |
| Animations | Framer Motion |
| Icons | Lucide React + React Icons |
| Routing | React Router v7 |
| Deployment | Vercel |

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/          # DotGrid, GooeyNav, GlareHover, etc.
│   ├── HeroSection.jsx
│   ├── About.jsx
│   ├── Skills.jsx
│   ├── Contact.jsx
│   ├── Footer.jsx
│   └── ...
├── pages/
│   ├── Home.jsx
│   ├── AboutPage.jsx
│   ├── Projects.jsx
│   ├── Competitive.jsx (CP & DSA)
│   ├── ContactPage.jsx
│   └── NotFound.jsx
└── data/
    └── constants.js  # All project data lives here
```

## 🔧 Setup & Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

## 📬 Contact Form Setup

1. Go to [web3forms.com](https://web3forms.com)
2. Enter your email and get your free access key
3. Replace `YOUR_WEB3FORMS_ACCESS_KEY` in `src/components/Contact.jsx`

## 📄 License

MIT — feel free to use as inspiration, but please don't copy it wholesale.
