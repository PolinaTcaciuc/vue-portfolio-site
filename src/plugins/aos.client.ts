import AOS from 'aos'
import 'aos/dist/aos.css'

export default defineNuxtPlugin((nuxtApp) => {
    if (typeof window !== 'undefined') {
        nuxtApp.AOS = AOS.init({once: false, duration: 1000, disable: window.innerWidth < 750 })
    }
})