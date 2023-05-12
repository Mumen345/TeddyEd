import 'mdb-vue-ui-kit/css/mdb.min.css'
import { createApp } from 'vue'
import { MotionPlugin } from '@vueuse/motion'
import App from './App.vue'
import router from './router'
import Toaster from "@meforma/vue-toaster";
import store from './store'
createApp(App).use(store).use(Toaster, { position: "top", duration: 3000 }).use(MotionPlugin).use(router).mount('#app')
