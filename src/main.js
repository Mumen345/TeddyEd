import 'mdb-vue-ui-kit/css/mdb.min.css'
import { createApp } from 'vue'
import { MotionPlugin } from '@vueuse/motion'
import App from './App.vue'
import router from './router'
//theme
import "primevue/resources/themes/lara-light-indigo/theme.css";

//core
import "primevue/resources/primevue.min.css";
import ToastService from 'primevue/toastservice';
// import Toasted from 'vue-toasted';
import store from './store'
import PrimeVue from 'primevue/config';
createApp(App).use(store).use(PrimeVue).use(ToastService).use(MotionPlugin).use(router).mount('#app')
