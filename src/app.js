import { createApp } from 'vue'
import App from './App.vue'
import SectionContent from './components/SectionContent/index.vue'
import infos from '../src/assets/data/infos.json'
import 'tailwindcss/tailwind.css'
import 'font-awesome/css/font-awesome.css'
import '../src/assets/styles/custom.css'
const app = createApp(App)
// injeet the data in the app
app.provide('infos', infos)

// Global components
app.component('section-content', SectionContent)

// Mount the app
app.mount('#root')

// On page load or when changing themes, best to add inline in `head` to avoid FOUC
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
} else {
    document.documentElement.classList.remove('dark')
}

// Whenever the user explicitly chooses light mode
localStorage.theme = 'light'

// Whenever the user explicitly chooses dark mode
localStorage.theme = 'dark'

// Whenever the user explicitly chooses to respect the OS preference
localStorage.removeItem('theme')

document.addEventListener("DOMContentLoaded", function(event) {
		var hash = window.decodeURI(location.hash.replace('#', ''))
		if (hash !== '') {
			var element = document.getElementById(hash)
				if (element) {
					var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
					var clientTop = document.documentElement.clientTop || document.body.clientTop || 0
					var offset = element.getBoundingClientRect().top + scrollTop - clientTop
					// Wait for the browser to finish rendering before scrolling.
					setTimeout((function() {
						window.scrollTo(0, offset - 0)
					}), 0)
				}
		}
})