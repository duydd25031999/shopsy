import { createApp } from 'vue'
import { createPinia } from 'pinia';

import './style.css'
import App from './App.vue'
import router from './routes';

// Init Pinia
const pinia = createPinia()

createApp(App).use(router).use(pinia).mount('#app');
