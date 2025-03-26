# Vue Chrome Extension

A modern Chrome extension starter built with Vite + Vue 3, Tailwind v4 and Manifest v3.

## Features

- 🚀 **Modern Stack**
  - TypeScript
  - Vite 6
  - Vue 3
  - Tailwind 4
  - Manifest V3
- 🛠️ **Development Tools**
  - Vue DevTools integration
  - Hot Module Replacement (HMR)
  - TypeScript support
- 📦 **Extension Components**
  - Background script
  - Content script
  - Injected content script with Vue app
  - DevTools tab
  - New tab override
  - Options page
  - Popup
  - Sidepanel
- 📦 **Build & Package**
  - CRXSJ for extension packaging
  - Zip packaging for distribution

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/JulBeg/vue-chrome-extension
cd vue-chrome-extension
```

2. Install dependencies:

```bash
npm install
```

3. Start development server:

```bash
npm run dev
```

4. Load the extension in Chrome:
   - Open Chrome and navigate to `chrome://extensions/`
   - Enable "Developer mode"
   - Click "Load unpacked"
   - Select the `build` directory from the project

## Building for Production

To build and package your extension:

```bash
npm run zip
```

This will create a zip file in the `package` directory ready for distribution.

## Project Structure

```
vue-chrome-extension/
├── src/
│   ├── background/     # Background script
│   ├── content/        # Content scripts
│   ├── devtools/       # DevTools panel
│   ├── newtab/         # New tab page
│   ├── options/        # Options page
│   ├── popup/          # Extension popup
│   └── sidepanel/      # Sidepanel
├── public/             # Static assets
└── manifest.json       # Extension manifest
```

## License

MIT
