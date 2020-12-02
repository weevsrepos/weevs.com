import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import SvgSprite from 'vue-svg-sprite';
import axios from 'axios'
import VueAxios from 'vue-axios'
const VueScrollTo = require('vue-scrollto');

axios.defaults.baseURL = process.env.VUE_APP_API_URL;

createApp(App)
    .use(store)
    .use(SvgSprite,  {
        url: './svg-sprites/main.svg',
        class: 'icon',
    })
    .use(VueScrollTo, {
        container: "body",
        duration: 500,
        easing: "ease",
        offset: 0,
        force: true,
        cancelable: true,
        onStart: false,
        onDone: false,
        onCancel: false,
        x: false,
        y: true
    })
    .use(VueAxios, axios)
    .use(router)
    .mount('#app')