import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

import store from './store'


const app = createApp(App)
console.log(app)
console.log(app.use)
app.provide('key', {key: 111})
app.use(store)
app.mount('#app')


