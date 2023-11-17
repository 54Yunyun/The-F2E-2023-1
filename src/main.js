import { createApp } from 'vue';
import router from './router';
import './style.css';
import './assets/font/font.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import App from './App.vue';

createApp(App).use(router).mount('#app');

AOS.init({});
