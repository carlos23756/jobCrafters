import './assets/main.css'
import { useCoverLetterStyleDoc } from './stores/coverLetterStyleDoc'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

const pinia = createPinia();
app.use(pinia);

const coverLetterStyleStore = useCoverLetterStyleDoc(pinia);

app.config.globalProperties.$coverLetterStyleStore = coverLetterStyleStore;

app.use(router)
app.mount('#app')
