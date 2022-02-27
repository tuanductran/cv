import { createApp } from 'vue'
import App from './App.vue'
import SectionContent from './components/SectionContent/index.vue'
import infos from '../src/assets/data/infos.json'
import '../src/assets/styles/styles.css'
const app = createApp(App)
// injeet the data in the app
app.provide('infos', infos)

// Global components
app.component('section-content', SectionContent)

// Mount the app
app.mount('#root')