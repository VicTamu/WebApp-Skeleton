# 🚀 Vite.js + React + shadcn/ui Starter Template

A modern, production-ready web application starter template built with Vite, React, and shadcn/ui components. This template provides a solid foundation for building scalable web applications with best practices and modern tooling.

## ✨ Features

- **⚡ Vite 7** - Lightning-fast build tool and development server
- **⚛️ React 19** - Latest React with modern features and performance improvements
- **🎨 shadcn/ui** - Beautiful, accessible, and customizable UI components
- **🎯 Tailwind CSS 4** - Utility-first CSS framework with modern features
- **🔧 ESLint 9** - Code quality and consistency
- **📱 Responsive Design** - Mobile-first approach with modern UI patterns
- **🌙 Dark Mode Support** - Built-in dark/light theme switching
- **♿ Accessibility** - WCAG compliant components and best practices
- **📦 Modern Tooling** - PostCSS, Autoprefixer, and optimized build process

## 🏗️ Project Structure

```
vite.js/
├── public/                 # Static assets
│   └── vite.svg           # Vite logo
├── src/                    # Source code
│   ├── assets/            # Images and static files
│   │   └── react.svg      # React logo
│   ├── components/        # React components
│   │   └── ui/           # shadcn/ui components
│   │       └── button.jsx # Button component with variants
│   ├── lib/               # Utility functions
│   │   └── utils.js       # CSS class merging utilities
│   ├── App.jsx            # Main application component
│   ├── index.css          # Global styles and Tailwind imports
│   └── main.jsx           # Application entry point
├── .eslintrc.js           # ESLint configuration
├── components.json         # shadcn/ui configuration
├── index.html              # HTML template
├── jsconfig.json           # JavaScript configuration
├── package.json            # Dependencies and scripts
├── tailwind.config.js      # Tailwind CSS configuration
└── vite.config.js          # Vite build configuration
```

## 🚀 Quick Start

### Prerequisites

- **Node.js** 18+ (recommended: 20+)
- **npm** or **yarn** or **pnpm**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/VicTamu/WebApp-Skeleton.git
   cd WebApp-Skeleton
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to see your application.

## 📜 Available Scripts

- **`npm run dev`** - Start development server with hot reload
- **`npm run build`** - Build for production
- **`npm run preview`** - Preview production build locally
- **`npm run lint`** - Run ESLint for code quality checks

## 🎨 UI Components

This template includes a comprehensive set of shadcn/ui components:

### Button Component
- **Variants**: default, destructive, outline, secondary, ghost, link
- **Sizes**: default, sm, lg, icon
- **Features**: Accessible, keyboard navigation, focus management

### Styling System
- **CSS Variables**: Customizable design tokens
- **Dark Mode**: Automatic theme switching
- **Responsive**: Mobile-first responsive design
- **Accessibility**: High contrast ratios and proper focus states

## 🛠️ Configuration

### Vite Configuration
- React plugin for JSX support
- Tailwind CSS integration
- Path aliases (`@/` points to `src/`)
- Optimized build settings

### Tailwind CSS
- **Version 4** with latest features
- Custom color palette and design tokens
- Responsive breakpoints
- Custom animations and transitions

### ESLint
- React Hooks rules
- React Refresh support
- Modern JavaScript features
- Customizable rule set

### shadcn/ui
- **Style**: New York design system
- **Base Color**: Stone color palette
- **Icons**: Lucide React icon library
- **TypeScript**: JavaScript support (configurable)

## 🎯 Key Features

### Performance
- **Fast Refresh**: Instant updates during development
- **Tree Shaking**: Unused code elimination
- **Code Splitting**: Automatic bundle optimization
- **Lazy Loading**: Component-level code splitting support

### Developer Experience
- **Hot Module Replacement**: Instant updates without page refresh
- **Source Maps**: Easy debugging and development
- **Type Checking**: JavaScript with JSDoc support
- **Modern Syntax**: Latest ECMAScript features

### Production Ready
- **Optimized Builds**: Minified and compressed output
- **Asset Optimization**: Automatic image and font optimization
- **Caching**: Efficient static asset caching
- **CDN Ready**: Easy deployment to CDN services

## 🌐 Browser Support

- **Modern Browsers**: Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
- **Mobile**: iOS Safari 14+, Chrome Mobile 90+
- **Progressive Enhancement**: Graceful degradation for older browsers

## 📱 Responsive Design

- **Mobile First**: Designed for mobile devices first
- **Breakpoints**: Tailwind's responsive breakpoint system
- **Touch Friendly**: Optimized for touch interactions
- **Performance**: Optimized for mobile performance

## 🔒 Security Features

- **Content Security Policy**: Configurable CSP headers
- **XSS Protection**: Built-in XSS prevention
- **HTTPS Ready**: Secure by default
- **Dependency Scanning**: Regular security updates

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy Options
- **Vercel**: Zero-config deployment
- **Netlify**: Drag and drop deployment
- **GitHub Pages**: Automatic deployment from repository
- **AWS S3**: Static hosting with CloudFront
- **Any Static Host**: Compatible with any static hosting service

### Environment Variables
Create a `.env` file in the root directory:
```env
VITE_API_URL=your_api_url_here
VITE_APP_TITLE=Your App Title
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Vite](https://vitejs.dev/) - Next generation frontend tooling
- [React](https://react.dev/) - A JavaScript library for building user interfaces
- [shadcn/ui](https://ui.shadcn.com/) - Beautiful and accessible UI components
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework
- [Lucide](https://lucide.dev/) - Beautiful & consistent icon toolkit

## 📞 Support

- **Documentation**: [Project Wiki](https://github.com/VicTamu/WebApp-Skeleton/wiki)

---

**Built with ❤️ by [VicTamu](https://github.com/VicTamu)**

*This template is designed to get you up and running quickly with a modern web development stack. Happy coding! 🎉*
