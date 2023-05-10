import 'mdb-vue-ui-kit/css/mdb.min.css'
import { createApp } from 'vue'
import { MotionPlugin } from '@vueuse/motion'
import App from './App.vue'
import router from './router'
import store from './store'
createApp(App).use(store).use(MotionPlugin).use(router).mount('#app')
