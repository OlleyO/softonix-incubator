import { createApp } from 'vue'
import App from '@/App.vue'

import router from '@/router/index'

import '@/assets/styles/main.scss'

const app = createApp(App)

app.use(router)
app.mount('#app')

export {
  app
}
