import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import SvgSprite from 'vue-svg-sprite';
import axios from 'axios'
import VueAxios from 'vue-axios'

axios.defaults.baseURL = process.env.VUE_APP_API_URL;

createApp(App)
    .use(store)
    .use(SvgSprite,  {
        url: './svg-sprites/main.svg',
        class: 'icon',
    })
    .use(VueAxios, axios)
    .use(router)
    .mount('#app')