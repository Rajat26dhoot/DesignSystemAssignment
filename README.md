
---

# Design System Assignment

A scalable, reusable React + TypeScript design system featuring enterprise-ready **Color Tokens**, **Progress Bar**, **Top Navigation Bar**, and **Timeline** components, styled with TailwindCSS (or styled-components) and documented with Storybook.

---

## ✨ Features

- **Token-based color system** with WCAG-compliant contrast, light/dark theme support
- **Progress Bar**: Accessible, customizable, animated
- **Top Navigation Bar**: Icon support, responsive, keyboard/ARIA accessible
- **Timeline**: Chronological display of events, icon/color support
- **Storybook documentation** with detailed props, use cases, accessibility, and best practices

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Rajat26dhoot/DesignSystemAssignment.git
cd design-system
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Run Storybook

```bash
npm run storybook
# or
yarn storybook
```

Visit [http://localhost:6006](http://localhost:6006) to view the components and documentation.

---

## 🧱 Components

### Progress Bar

- **Features:** Determinate/indeterminate, size & color variants, animated, accessible (`role="progressbar"`, ARIA support)
- **Usage Example:**
  ```tsx
  
  ```
- **See:** `src/stories/ProgressBar.stories.tsx`

---

### Top Navigation Bar

- **Features:** Icon and label support, disabled state, responsive sizes, keyboard navigation, ARIA roles
- **Usage Example:**
  ```tsx
  
  ```
- **See:** `src/stories/TopNavBar.stories.tsx`

---

### Timeline

- **Features:** Vertical/horizontal layout, custom icons/colors, event links, accessible structure
- **Usage Example:**
  ```tsx
  
  ```
- **See:** `src/stories/Timeline.stories.tsx`

---

## 🎨 Color System

- **Tokens:** Primary, Secondary, Tertiary, Neutral, Semantic (Success, Info, Warning, Error), Surface, Background
- **Theme:** Light & Dark mode support via CSS variables or ThemeProvider
- **Accessibility:** All colors tested for WCAG contrast compliance

---


## 🛠️ Development Scripts

- `npm run storybook` – Start Storybook for interactive docs
- `npm run build-storybook` – Build static Storybook for deployment
- `npm run lint` – Lint codebase

---

## 🌐 Deployment

- Deploy Storybook using [Chromatic](https://www.chromatic.com/) or [Vercel](https://vercel.com/).
- Share the **GitHub repo link** and **Storybook preview link** as part of your submission.

---


## 📬 Submission Checklist

- [ ] All components implemented with TypeScript, documented in Storybook
- [ ] Color system with tokens and theme support
- [ ] Accessibility and responsiveness verified
- [ ] Storybook deployed and link shared
- [ ] Repo pushed to GitHub with clear structure

---

## 📚 References

- [Storybook Documentation](https://storybook.js.org/docs/react/get-started/introduction)

---

## 📝 Steps to Run This Project

1. **Clone the repo**
2. **Install dependencies**: `npm install`
3. **Run Storybook**: `npm run storybook`
4. **View docs and components** at [http://localhost:6006](http://localhost:6006)
5. **Build for deployment**: `npm run build-storybook`

---

**Good luck! Build, document, and deliver your design system with confidence.**

