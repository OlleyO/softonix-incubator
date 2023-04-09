import { createApp } from 'vue'
import App from '@/App.vue'

import task1 from '@/homework/homework-1-promises.js'
import { memoize } from '@/homework/homework-2-memoize.js'

import '@/assets/styles/main.scss'

const app = createApp(App)

app.mount('#app')

export {
  app
}
