# Bamboo Landing Page

A modern, responsive landing page built with React, TypeScript, and Tailwind CSS.

## Features

- ⚡️ Built with Vite for fast development
- 🎨 Styled with Tailwind CSS
- 📱 Fully responsive design
- 🔧 TypeScript for type safety
- 🚀 Modern React 18 with hooks

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Build

Build for production:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## Project Structure

```
bamboo-landing-page/
├── public/
│   └── fonts/          # Custom fonts
├── src/
│   ├── components/     # Reusable components
│   │   ├── Header.tsx
│   │   └── Card.tsx
│   ├── App.tsx         # Main application component
│   ├── main.tsx        # Application entry point
│   └── index.css       # Global styles with Tailwind
├── tailwind.config.js  # Tailwind CSS configuration
├── postcss.config.js   # PostCSS configuration
├── vite.config.ts      # Vite configuration
└── tsconfig.json       # TypeScript configuration
```

## Technologies Used

- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Build tool and dev server
- **PostCSS** - CSS processing

## Customization

### Colors
The color scheme can be customized in `tailwind.config.js`. The current theme uses green tones to match the bamboo theme.

### Components
Reusable components are located in `src/components/` and can be easily modified or extended.

## License

This project is open source and available under the [MIT License](LICENSE). 