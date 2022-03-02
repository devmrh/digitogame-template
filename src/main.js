import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/styles.scss'
import VueSweetalert2 from 'vue-sweetalert2';
import 'jquery/src/jquery.js';
import 'popper.js/dist/popper.min.js';
import VueApexCharts from "vue3-apexcharts";

import 'bootstrap';
import 'sweetalert2/dist/sweetalert2.min.css';
const app = createApp(App)
app.use(VueSweetalert2);
app.use(VueApexCharts);
app.use(router)
app.mount('#app')
