# Advance Happy New Year 2027 🎉✨

A luxurious, production-ready React web application to celebrate and share personalized **Advance Happy New Year 2027** wishes with your friends, family, and loved ones.

Built with **React 19**, **Vite**, **Tailwind CSS**, and **Lucide React**, fully responsive on mobile, tablet, and desktop, with zero backend or paid API dependencies.

---

## 🌟 Key Features

1. **Live Midnight Countdown**: Real-time countdown to January 1, 2027 00:00:00 with animated glassmorphic cards for Days, Hours, Minutes, and Seconds.
2. **Interactive Personalized Wishes**:
   - Enter any name (supports English, Urdu, Arabic, and Unicode scripts).
   - Generates a luxury golden greeting card with customizable heartfelt sentiments.
3. **5+ Instant Sharing Options**:
   - 🟢 **WhatsApp Share**: Uses official WhatsApp Click-to-Chat with pre-formatted encoded message and personalized link.
   - 🔵 **Facebook Share**: One-click sharing on Facebook wall/feed.
   - 📋 **Copy Wishes**: Copies full greeting text to clipboard with instant confirmation.
   - 🔗 **Copy Personal Link**: Copies personalized URL (`https://yourwebsite.com/?name=Ali`).
   - 🔄 **Create Another Wish**: Quickly reset to generate greetings for other loved ones.
   - 📱 **Native Mobile Share**: Uses Web Share API (`navigator.share`) on iPhone & Android.
4. **Personalized URL Support**:
   - Anyone opening `https://yourwebsite.com/?name=Ali` immediately sees their personalized greeting banner and unlocked card!
5. **Interactive Celebration FX**:
   - Interactive Canvas Fireworks: Click or tap anywhere to launch rockets!
   - Colorful Confetti bursts using `canvas-confetti`.
   - Floating golden particle field and glowing 2027 shimmer typography.
   - Built-in Web Audio chime and firework sounds (synthesized locally, zero external MP3s).

---

## 📁 Project Structure

```
new-year-2027/
├── public/
│   └── favicon.svg            # Luxury golden 2027 celebratory icon
├── src/
│   ├── components/
│   │   ├── AdvanceWishesSection.tsx   # Early celebration sentiment cards
│   │   ├── CountdownTimer.tsx         # Live ticker to January 1, 2027
│   │   ├── FireworksCanvas.tsx        # High-performance canvas fireworks
│   │   ├── Footer.tsx                 # Festive footer with site links
│   │   ├── GitHubDeploymentGuide.tsx  # Interactive step-by-step deploy instructions
│   │   ├── Header.tsx                 # 3-Zone navigation bar + audio synthesizer toggle
│   │   ├── HeroSection.tsx            # Glowing ADVANCE HAPPY NEW YEAR 2027
│   │   ├── PersonalizedGreetingCard.tsx # Gold card with all 5 sharing buttons
│   │   ├── Toast.tsx                  # Toast confirmation popups
│   │   └── WishCreator.tsx            # Name input, validation, and theme picker
│   ├── data/
│   │   └── wishTemplates.ts           # Curated English & Urdu wish messages
│   ├── utils/
│   │   ├── audio.ts                   # Web Audio API chime and firework pops
│   │   └── sanitize.ts                # Input sanitization and Urdu/Arabic support
│   ├── App.tsx                        # Master application coordinator
│   ├── index.css                      # Tailwind CSS v4 & luxury gold design tokens
│   ├── main.tsx                       # React 19 entry point
│   └── types.ts                       # TypeScript interfaces
├── index.html                         # SEO, OpenGraph, Twitter Cards & Google Fonts
├── metadata.json                      # AI Studio configuration metadata
├── package.json                       # Scripts: dev, build, predeploy, deploy
├── tsconfig.json                      # TypeScript configuration
├── vite.config.ts                     # Vite configuration with base: './'
└── README.md                          # Full guide and deployment instructions
```

---

## 🚀 Quick Start Guide (Local Development)

### 1. Install dependencies
```bash
npm install
```

### 2. Run the local development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the application with live celebration effects.

### 3. Build for production
```bash
npm run build
```
This bundles the optimized application into the `dist/` directory with relative asset paths.

---

## 🌐 Complete Beginner's Guide: Free GitHub Pages Deployment

Hosting this website for free on GitHub Pages takes just a couple of minutes!

### Step 1: Create a Repository on GitHub
1. Sign in to your [GitHub account](https://github.com).
2. Click the **+** icon in the top right and select **New repository**.
3. Name your repository (e.g., `new-year-2027`).
4. Set it to **Public** and leave all checkboxes unchecked.
5. Click **Create repository**.

### Step 2: Initialize Git in your project folder
Open your terminal in the project directory and run:
```bash
git init
git add .
git commit -m "Initial commit: Advance Happy New Year 2027"
git branch -M main
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/new-year-2027.git
git push -u origin main
```
*(Replace `YOUR_GITHUB_USERNAME` with your actual GitHub username)*

### Step 3: Deploy to GitHub Pages in 1 Command
Run:
```bash
npm run deploy
```
This automatically runs `npm run build` and publishes the compiled `dist` folder to a new `gh-pages` branch on GitHub.

### Step 4: Turn On GitHub Pages
1. Go to your repository on GitHub.
2. Click on **Settings** &rarr; **Pages** (in the left sidebar).
3. Under **Build and deployment** &rarr; **Source**, choose **Deploy from a branch**.
4. Select the **gh-pages** branch and root `/` folder, then click **Save**.

Within 1 to 2 minutes, your website will be live at:
```
https://YOUR_GITHUB_USERNAME.github.io/new-year-2027/
```

### Step 5: Test Personalized Sharing
Try opening your deployed site with a name parameter:
```
https://YOUR_GITHUB_USERNAME.github.io/new-year-2027/?name=Ali
```
It will automatically display the personalized greeting card created specifically for Ali!

---

## 💡 Technologies Used

- **React 19**: Modern component architecture and reactive hooks.
- **Vite 8**: Lightning-fast builds with relative base path support (`base: './'`).
- **Tailwind CSS v4**: Modern CSS styling with custom gold gradients and glassmorphism.
- **Canvas-Confetti**: High-performance celebratory confetti bursts.
- **Lucide React**: Clean SVG iconography.
- **HTML5 Web Audio API**: Client-side synthesized celebration sounds without external audio file latency.

---

## 📄 License
This project is open-source and free to use for personal and educational celebrations.
