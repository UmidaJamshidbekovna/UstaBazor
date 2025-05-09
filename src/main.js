import './assets/main.css'
import 'primeicons/primeicons.css'


import { createApp } from 'vue'
import App from './App.vue'
import router from './routes'

const app = createApp(App)

app.use(router)   // 🔥 Routerni bu yerda ulaymiz
app.mount('#app')
