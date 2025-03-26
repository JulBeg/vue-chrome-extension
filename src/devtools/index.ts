import '../assets/main.css'

import { createApp } from 'vue'
import DevTools from './DevTools.vue'

chrome.devtools.panels.create('VueCrx', '', 'src/devtools/devtools.html', function () {
  console.log('devtools panel create')
})

createApp(DevTools).mount('#app')
