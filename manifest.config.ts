import { defineManifest } from '@crxjs/vite-plugin'
import packageData from './package.json'

export default defineManifest((env) => ({
  name: `${packageData.displayName || packageData.name}${env.mode === 'development' ? ` ➡️ Dev` : ''}`,
  description: packageData.description,
  version: packageData.version,
  manifest_version: 3,
  icons: {
    16: 'icons/icon16.png',
    32: 'icons/icon32.png',
    48: 'icons/icon48.png',
    128: 'icons/icon128.png',
  },
  action: {
    default_popup: 'src/popup/popup.html',
    default_icon: 'icons/icon48.png',
  },
  options_page: 'src/options/options.html',
  devtools_page: 'src/devtools/devtools.html',
  background: {
    service_worker: 'src/background/index.ts',
    type: 'module',
  },
  content_scripts: [
    {
      matches: ['http://*/*', 'https://*/*'],
      js: ['src/contentScript/index.ts', 'src/contentScript/modal/index.ts'],
    },
  ],
  side_panel: {
    default_path: 'src/sidepanel/sidepanel.html',
  },
  web_accessible_resources: [
    {
      resources: ['icons/icon16.png', 'icons/icon32.png', 'icons/icon48.png', 'icons/icon128.png'],
      matches: [],
    },
  ],
  permissions: ['sidePanel', 'storage', 'tabs'],
  host_permissions: ['<all_urls>'],
  chrome_url_overrides: {
    newtab: 'src/newtab/newtab.html',
  },
}))
