import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import SvgSprite from 'vue-svg-sprite';


createApp(App)
    .use(store)
    .use(SvgSprite,  {
        url: './svg-sprites/main.svg',
        class: 'icon',
    })
    .use(router)
    .mount('#app')
