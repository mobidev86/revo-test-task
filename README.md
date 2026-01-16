# Setup Instructions

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js** 18.0.0 or higher
- **npm** 9.0.0 or higher (comes with Node.js) or **yarn** 1.22.0 or higher

You can check your versions by running:
```bash
node --version
npm --version
```

## Installation

1. **Clone the repository** (if applicable) or navigate to the project directory:
   ```bash
   cd revo-test-task
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```
   
   This will install all required dependencies listed in `package.json`, including:
   - React and React DOM
   - TypeScript
   - Vite (build tool)
   - Tailwind CSS
   - TanStack Query
   - Recharts
   - Radix UI components
   - And other dependencies

3. **Start the development server**:
   ```bash
   npm run dev
   ```
   
   The development server will start and you should see output like:
   ```
   VITE v7.x.x  ready in xxx ms
   
   ➜  Local:   http://localhost:5173/
   ➜  Network: use --host to expose
   ```
   
   Open your browser and navigate to `http://localhost:5173/` to view the application.

## Available Scripts

- **`npm run dev`** - Starts the development server with hot module replacement (HMR)
- **`npm run build`** - Builds the application for production (runs TypeScript compiler and Vite build)
- **`npm run preview`** - Previews the production build locally
- **`npm run lint`** - Runs ESLint to check for code quality issues

## Building for Production

To create an optimized production build:

```bash
npm run build
```

This will:
1. Run TypeScript type checking (`tsc -b`)
2. Build the application with Vite
3. Output the production files to the `dist/` directory

The production build will be optimized, minified, and ready for deployment.

To preview the production build locally:

```bash
npm run preview
```