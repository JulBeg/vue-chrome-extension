// ⚠ css will leak into the host page
import '../../assets/main.css'

import { createApp } from 'vue'
import ContentModal from './ContentModal.vue'

const root = document.createElement('div')
root.id = 'crx-root'
document.body.prepend(root)

const app = createApp(ContentModal)
app.mount(root)
