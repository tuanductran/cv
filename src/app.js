import { createApp } from 'vue'
import galite from 'ga-lite';

galite('create', 'UA-175649416-2', 'auto')
galite('send', 'pageview')
import App from './App.vue'

import SectionContent from './components/SectionContent/index.vue'

import infos from '/public/data/infos.json'

const app = createApp(App)

// injeet the data in the app
app.provide('infos', infos)

// Global components
app.component('section-content', SectionContent)

// Mount the app
app.mount('#root')