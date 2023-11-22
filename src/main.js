import { createApp } from 'vue';
import router from './router';
import './style.css';
import './assets/font/font.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import App from './App.vue';

const app = createApp(App);

app.config.globalProperties.asset = function(path) {
    return `src/assets/image/${path}`;
  };
  
app.use(router).mount('#app');

AOS.init({});
