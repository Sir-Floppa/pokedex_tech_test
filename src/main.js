import { createApp } from 'vue'
import App from './App.vue'
import router from './routes'
import api from './api-service'

const app = createApp(App)

// Agrega el router de Vue
app.use(router);

// Agrega el servicio de API
app.config.globalProperties.$api = api;

app.mount('#app')
