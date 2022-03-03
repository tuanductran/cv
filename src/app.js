import { createApp } from 'vue'
import App from './App.vue'
import SectionContent from './components/SectionContent/index.vue'
import infos from '../src/assets/data/infos.json'

const app = createApp(App)
// injeet the data in the app
app.provide('infos', infos)

// Global components
app.component('section-content', SectionContent)

// Mount the app
app.mount('#root')

// dark mode
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
} else {
    document.documentElement.classList.remove('dark')
}
localStorage.theme = 'light'
localStorage.theme = 'dark'
localStorage.removeItem('theme')
// perform animated scrolling by getting top-position of target-element and set it as scroll target
const scrollTo = (element) => {
    const targetPosition = element.offsetTop
    window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
    })
}
// add eventlistener to all anchors and perform scrollTo on click
const anchors = document.querySelectorAll('a[href^="#"]')
anchors.forEach(anchor => {
    anchor.addEventListener('click', (event) => {
        event.preventDefault()
        const targetElement = document.querySelector(anchor.getAttribute('href'))
        scrollTo(targetElement)
    })
}
)
// block hashchange on scroll
const handleScroll = () => {
    if (window.pageYOffset > 0) {
        window.history.pushState(null, null, ' ')
    }
}
window.addEventListener('scroll', handleScroll)