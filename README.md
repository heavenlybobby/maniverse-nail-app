
# 💅 Maniverse Nail Design App

A responsive, mobile-first web app that lets users customize nail shapes and colors, preview their design, and view a summary of their selection. Built with **React**, **Tailwind CSS**, and animated using **Framer Motion**.

## ✨ Features

- 📱 Mobile-first responsive design
- 🎨 Select from 3 nail shapes: Almond, Stiletto, Square
- 🌈 Choose from 5 color swatches
- 👋 Preview selected shape and color on a mock hand image
- 📝 Summary screen displaying final selections
- 💾 Uses `localStorage` to temporarily save user choices
- 🎛 Smooth animations with **Framer Motion**
- ⚡ Clean, reusable React component structure

## 📸 Screenshots

| Shape & Color Select | Preview Page | Summary Page |
|:--------------------|:-------------|:--------------|
| ![Shape & Color Select](./screenshots/select.png) | ![Preview](./screenshots/preview.png) | ![Summary](./screenshots/summary.png) |

## 🛠 Tech Stack

- **React** (Vite)
- **Tailwind CSS**
- **Framer Motion**
- **LocalStorage API**

## 🚀 Getting Started

### 1️⃣ Clone the repository:
```bash
git clone https://github.com/yourusername/maniverse-nail-app.git
cd maniverse-nail-app
```

### 2️⃣ Install dependencies:
```bash
npm install
```

### 3️⃣ Start the development server:
```bash
npm run dev
```

## 🎨 Thought Process & Assumptions

- Focused on a clean, feminine, minimal UI to match Maniverse branding.
- Used placeholder images for nail preview to simulate design visualization.
- Assumed no backend was needed — selections saved temporarily in browser `localStorage`.
- Component-based structure to keep code scalable and organized.

## ⏳ Limitations

- No real-time backend or persistent user accounts.
- Limited to predefined colors and shapes.
- Preview image is static — no dynamic rendering on the actual nails.

## 🌱 Improvements with More Time

- Add more shapes and color options.
- Upload and preview custom nail patterns.
- Animate transitions for preview changes.
- Integrate a backend to save user designs.
- Optimize for larger screen sizes with refined layouts.

## 📬 Contact

If you’d like to connect or have feedback:
**Your Name** | [your.email@example.com](mailto:your.email@example.com)
