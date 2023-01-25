// Import our custom CSS
import './assets/scss/styles.scss'

// Import all of Bootstrap's JS
// @ts-ignore
import * as bootstrap from 'bootstrap'

import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')
