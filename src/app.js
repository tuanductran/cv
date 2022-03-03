import { createApp } from 'vue'
import App from './App.vue'
import SectionContent from './components/SectionContent/index.vue'

// create app
const app = createApp(App)

// create promise and get infomation from file infos.json from server
const getInfos = () => new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()
    xhr.open('GET', 'https://frontend.tuanducdesign.com/api/v2/cv/infos.json')
    xhr.onload = () => {
        if (xhr.status === 200) {
            resolve(JSON.parse(xhr.response))
        } else {
            reject(new Error(xhr.statusText))
        }
    }
    xhr.onerror = () => {
        reject(new Error('Network Error'))
    }
    xhr.send()
})
// get data from file infos.json
getInfos().then(infos => {
    app.provide('infos', infos)
}
).catch(error => {
    console.log(error)
}
)

// Global components
app.component('section-content', SectionContent)

// Mount the app
app.mount('#root')

// localStorage check prefers-color-scheme and set the theme light or dark
if (localStorage.getItem('prefers-color-scheme') === 'dark') {
    document.documentElement.classList.add('dark')
} else {
    document.documentElement.classList.remove('dark')
}
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