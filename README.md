# Code Challenge – David

A responsive single-page web application built with **React**, **Zustand**, **Tailwind CSS**, and **Framer Motion**. The site is designed based on the UI design provided in the challenge brief.

### 🚀 Live Demo

👉 [code-challange-david.vercel.app](https://code-challange-david.vercel.app)

---

## 🧰 Tech Stack

- **React 19**
- **TypeScript** (I hope its not a problem I used TypeScript)
- **Tailwind CSS**
- **Framer Motion** (for smooth animations)
- **Zustand** (global state management)
- **Axios** (HTTP client)
- **Vitest** (unit testing framework)
- **Vite** (build and development tool)

---

## 📦 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/CodeChallangeDavid.git
cd CodeChallangeDavid
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

---

## 🧪 Running Unit Tests

This project uses **Vitest** for testing both the API service and the Zustand store logic.

Run all tests:

```bash
npx vitest
```

Or run with the UI for live feedback:

```bash
npx vitest --ui
```

Included test coverage:

- ✅ `fetchScholarshipData` (API service)
- ✅ `useScholarshipStore` (Zustand state logic)

---

## 🔗 Deployment

Deployed on **Vercel**  
Build command: `npm run build`  
Output directory: `dist/`

---

## 📄 Notes

- UI implementation is based on the provided design mockups.
- Some data like **testimonials** was not available in the API, so static dummy data was used instead.
- The **countdown timer** shows negative values because the API returns a scholarship start date in the past (2020).
- Tested and confirmed working on latest Chrome and Safari.
