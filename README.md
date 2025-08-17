# Vite + React + shadcn/ui Skeleton

A modern, production-ready skeleton for building React applications with Vite, Tailwind CSS, and shadcn/ui components.

## 🚀 Features

- **Vite 7.1.2** - Lightning-fast build tool with instant HMR
- **React 19.1.1** - Latest React with modern features and hooks
- **Tailwind CSS v4** - Utility-first CSS framework with CSS variables
- **shadcn/ui** - Professional, accessible UI components
- **ESLint 9** - Modern linting with React-specific rules
- **Hot Module Replacement** - See changes instantly
- **TypeScript Ready** - Easy to add TypeScript later

## 🛠️ Tech Stack

- **Build Tool**: Vite
- **Framework**: React 19
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Package Manager**: npm
- **Linting**: ESLint 9

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd vite-react-skeleton
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173/`

## 🎯 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎨 Adding shadcn/ui Components

Add new components using the CLI:
```bash
npx shadcn@latest add [component-name]
```

**Popular components:**
- `npx shadcn@latest add button` - Button component
- `npx shadcn@latest add card` - Card component
- `npx shadcn@latest add input` - Input component
- `npx shadcn@latest add dialog` - Modal dialog
- `npx shadcn@latest add dropdown-menu` - Dropdown menu

## 🔧 Configuration Files

- **`vite.config.js`** - Vite configuration with Tailwind CSS plugin
- **`tailwind.config.js`** - Tailwind CSS configuration
- **`jsconfig.json`** - JavaScript path resolution
- **`components.json`** - shadcn/ui configuration

## 📁 Project Structure

```
vite-react-skeleton/
├── public/                 # Static assets
├── src/
│   ├── components/         # shadcn/ui components
│   │   └── ui/            # UI component library
│   ├── lib/               # Utility functions
│   ├── App.jsx            # Main application component
│   ├── main.jsx           # Application entry point
│   └── index.css          # Global styles with Tailwind
├── index.html              # HTML template
├── package.json            # Dependencies and scripts
└── README.md               # This file
```

## 🎨 Design System

This skeleton includes:
- **CSS Variables** - Automatic dark/light mode support
- **Consistent Spacing** - Tailwind's spacing scale
- **Color Palette** - Professional color scheme
- **Typography** - Consistent font sizing and weights
- **Component Library** - Pre-built, accessible UI components

## 🚀 Getting Started

1. **Customize the theme** - Modify colors in `src/index.css`
2. **Add components** - Use shadcn/ui CLI to add new components
3. **Build your app** - Start with `App.jsx` and build from there
4. **Add routing** - Install `react-router-dom` for navigation
5. **Add state management** - Install `zustand` or `@reduxjs/toolkit`

## 🔌 Easy Extensions

- **TypeScript**: `npm install -D typescript @types/react`
- **Routing**: `npm install react-router-dom`
- **State Management**: `npm install zustand` or `npm install @reduxjs/toolkit react-redux`
- **Forms**: `npm install react-hook-form`
- **API Calls**: `npm install axios` or `npm install @tanstack/react-query`

## 📱 Perfect For Building

- Single Page Applications (SPAs)
- Landing Pages
- Admin Dashboards
- E-commerce Sites
- Portfolio Websites
- Web Applications
- Progressive Web Apps (PWAs)

## 🤝 Contributing

This is a skeleton repository. Feel free to:
- Fork and customize for your projects
- Submit issues for improvements
- Create pull requests for enhancements

## 📄 License

MIT License - feel free to use this skeleton for any project!

---

**Built with ❤️ using Vite, React, Tailwind CSS, and shadcn/ui**
