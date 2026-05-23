# Musab Mushtaq — Personal Portfolio

A visually stunning, high-performance, and modular personal portfolio website built with **React**, **TypeScript**, and **Vite**. 

## Design Philosophy & Features

- **Matte Black & Lavender Accent:** A curated, harmonious color scheme that blends sleek dark aesthetics with striking lavender gradients.
- **Floating Navigation Dock:** A centered floating glass-pill dock featuring smooth backdrop-blur effects and fluid SPA tab switching instead of clunky page reloads or endless scrolls.
- **Bento Box Project Grid:** An elegant Apple-inspired bento grid displaying project details, interactive technologies tags, and direct repository links with reactive micro-animations.
- **Interactive Experience Timeline:** A beautifully crafted chronological tree outlining work history and project milestones with customized accents.
- **Data-Driven & Modular:** Built around a single data file (`src/data/portfolio.ts`), allowing rapid content updates (text, projects, and work experience) without modifying the React logic.
- **Fully Responsive:** Crafted with a fluid layout using relative modern scales, looking stunning on everything from ultra-wide desktop monitors to mobile screens.


## Tech Stack

- **Framework:** [React 19](https://react.dev/)
- **Build Tool:** [Vite 8](https://vite.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** Custom Vanilla CSS & Google Fonts (Lexend)

## Getting Started

To get a local development server running:

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Local Server
```bash
npm run dev
```
Open [http://localhost:5174/](http://localhost:5174/) (or the port specified in your console) to view the live reload environment in your browser!

### 3. Build for Production
```bash
npm run build
```
This compiles a highly optimized static bundle into the `/dist` folder, fully prepared for deployment to static web hosts like GitHub Pages.


## Personalizing the Content

Updating the content of this portfolio is designed to be seamless. You do not need to edit any UI components directly. Simply open:
[src/data/portfolio.ts](./src/data/portfolio.ts)

And populate the `portfolioData` object:
```typescript
export const portfolioData: PortfolioData = {
  name: "Your Name",
  role: "Your Role Title",
  bio: "Your short bio description...",
  email: "your.email@example.com",
  socials: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername"
  },
  experience: [
    // Add your roles here
  ],
  projects: [
    // Add your projects here
  ]
};
```
Once saved, the site will automatically repopulate all fields, timelines, and grids in real-time!

---

## License

This project is open-source and licensed under the [MIT License](LICENSE). Feel free to fork, customize, and use it to showcase your own amazing work!
