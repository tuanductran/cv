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
// Create element script
const gajs = document.createElement('script')
gajs.src = 'https://www.googletagmanager.com/gtag/js?id=UA-175649416-2'
gajs.async = true
// append elements
document.head.appendChild(gajs)
// event google analytics
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'UA-175649416-2');
// Create handlesubmit form
var form = document.getElementById("send__job");
    
    async function handleSubmit(event) {
      event.preventDefault();
      var status = document.getElementById("send__job__status");
      var data = new FormData(event.target);
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
        if (response.ok) {
          status.className = "text-success";
          status.innerHTML = "Thank you for the information about this job, I have received your e-mail!";
          form.reset()
        } else {
          response.json().then(data => {
            if (Object.hasOwn(data, 'errors')) {
              status.className = "text-errors";
              status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
            } else {
              status.className = "text-errors";
              status.innerHTML = "Sorry! An error occurred when you submitted information about this job, please try reloading the page to try again!"
            }
          })
        }
      }).catch(error => {
        status.innerHTML = "Sorry! An error occurred when you submitted information about this job, please try reloading the page to try again!"
      });
    }
    form.addEventListener("submit", handleSubmit)
// Create show modal
let modal = document.getElementById("view_coverletter");
let showModal = document.getElementById("show__modal");
let hideModal = document.getElementById("hide__modal");
// Show when click
showModal.onclick = function() {
    modal.className = "modal-open";
}
// Hide when click
hideModal.onclick = function() {
    modal.className = ""; // white
}
