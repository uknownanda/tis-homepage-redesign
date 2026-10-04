# React + Vite
# Tulas International School — Homepage Redesign

A modern, responsive redesign of the **Tulas International School (TIS)** homepage, focused on creating a premium school experience with strong visual hierarchy, smooth interactions, responsive layouts, and clear admission-focused calls to action.

## 🚀 Live Demo

- **Live Website:** (https://tis-homepage-redesign-taupe.vercel.app/)
- **GitHub Repository:** https://github.com/uknownanda/tis-homepage-redesign

---

## 📌 Project Overview

This project was developed as a homepage redesign assessment for **Tulas International School**.

The goal was to transform the existing school homepage into a modern, engaging, and conversion-focused single-page experience while retaining the school's core identity, information, and admission-focused messaging.

The redesign emphasizes:

- Premium visual presentation
- Clear information hierarchy
- Responsive design
- Smooth animations
- Accessible navigation
- Strong admission CTAs
- Modern school branding

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React.js | UI development |
| Vite | Development server and build tool |
| Tailwind CSS | Styling and responsive design |
| Framer Motion | Animations and scroll interactions |
| Lucide React | Interface icons |
| ESLint | Code quality and linting |
| Git & GitHub | Version control |
| Vercel | Deployment |

---

## ✨ Key Features

### 1. Responsive Navigation

A responsive navigation system with:

- Desktop navigation
- Mobile navigation menu
- Smooth anchor navigation
- Admission CTA
- Accessible menu controls

### 2. Premium Hero Section

The hero section introduces Tulas International School with:

- Large editorial-style typography
- School-focused imagery
- Primary and secondary CTAs
- Key school statistics
- Responsive layout

### 3. Scroll Progress Indicator

A fixed progress indicator at the top of the page visually represents the user's scroll position.

Implemented using Framer Motion's scroll utilities.

### 4. Custom Cursor

A custom cursor interaction is implemented for desktop devices.

The cursor:

- Follows the mouse position
- Changes appearance over interactive elements
- Is disabled on smaller screens to avoid interfering with touch interaction

### 5. Scroll-Triggered Animations

Content sections use subtle entrance animations when they enter the viewport.

Animations are intentionally kept short and subtle to avoid distracting from the content.

### 6. Responsive Design

The homepage is designed to work across:

- Mobile — 375px+
- Tablet — 768px+
- Desktop — 1280px+

Layouts, typography, spacing, navigation and image proportions adapt according to screen size.

### 7. School Statistics

Important TIS information is highlighted through visual statistics including:

- 22-acre campus
- 16+ sports
- 6:1 student-teacher ratio
- 24/7 medical assistance

### 8. Academics & Student Experience

Dedicated sections communicate:

- Academic excellence
- Beyond-classroom experiences
- Global outlook
- Campus life
- Sports and activities

### 9. Testimonials

A dedicated testimonial section provides social proof and reinforces the school's community-oriented experience.

### 10. Admissions CTA

The final CTA focuses on encouraging prospective families to begin their admission journey.

---

## 🧩 Page Structure

The homepage is organized into the following sections:

```text
Navbar
│
├── Hero
│
├── About TIS
│
├── Tulas Experience
│   ├── Academic Excellence
│   ├── Beyond the Classroom
│   └── Global Outlook
│
├── Campus Life
│
├── Sports & Activities
│
├── Testimonials
│
├── Admissions CTA
│
└── Footer
```

---

## 📁 Project Structure

```text
tis-homepage-redesign/
│
├── public/
│
├── src/
│   ├── components/
│   │   ├── animation/
│   │   │   └── CustomCursor.jsx
│   │   │
│   │   ├── layout/
│   │   │   └── Navbar.jsx
│   │   │
│   │   └── sections/
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

---

## 🎨 Design System

The redesign uses a premium academic visual language.

### Primary Colors

```text
Navy       #0B1F33
Gold       #C9A45C
Cream      #F7F4ED
White      #FFFFFF
```

### Typography

**DM Sans**

Used for:

- Navigation
- Body content
- Buttons
- Supporting information

**Playfair Display**

Used for:

- Hero headings
- Section headings
- Editorial statements

The combination creates a balance between a modern interface and an established educational institution aesthetic.

---

## 🎞️ Animation Approach

Animations are implemented using **Framer Motion**.

The project uses animations for:

- Hero entrance
- Section reveals
- Card reveals
- Image transitions
- Hover interactions
- Scroll progress

The animation approach prioritizes:

- Short durations
- Subtle movement
- `whileInView` interactions
- Minimal layout shifts
- Responsive performance

---

## ♿ Accessibility Considerations

The implementation includes:

- Semantic navigation elements
- Accessible button labels
- Keyboard focus states
- Descriptive image `alt` attributes
- Touch-friendly mobile controls
- Custom cursor disabled on smaller devices
- Sufficient contrast between text and backgrounds

---

## 📱 Responsive Testing

The interface was designed and tested around the following viewport sizes:

| Device | Width |
|---|---:|
| Mobile | 375px |
| Tablet | 768px |
| Desktop | 1280px+ |

---

## 💻 Getting Started

### Prerequisites

Make sure you have installed:

- Node.js
- npm
- Git

### 1. Clone the repository

```bash
git clone https://github.com/uknownanda/tis-homepage-redesign.git
```

### 2. Navigate to the project

```bash
cd tis-homepage-redesign
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

The application will be available at:

```text
http://localhost:5173
```

### 5. Create a production build

```bash
npm run build
```

### 6. Preview the production build

```bash
npm run preview
```

---

## 🔍 Code Quality

ESLint is included in the project to help maintain consistent and reliable code.

Run:

```bash
npm run lint
```

Before submission, the project should pass the linting and production build checks without errors.

---

## 🚀 Deployment

The project is deployed using **Vercel**.

For deployment:

1. Push the project to GitHub.
2. Import the repository into Vercel.
3. Vercel automatically detects the Vite configuration.
4. Use the following production settings:

```text
Framework: Vite
Build Command: npm run build
Output Directory: dist
```

---

## 📚 Information & Brand Reference

The redesign retains the core positioning and publicly available information of **Tulas International School**.

Official website:

https://tis.edu.in/

---

## 👨‍💻 Author

**Nanda Dileep Reddy**

Frontend Developer | React.js | JavaScript

GitHub:  
https://github.com/uknownanda

---

## 📄 License

This project was created as a frontend homepage redesign assessment for educational and evaluation purposes.
