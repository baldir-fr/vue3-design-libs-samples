import {createApp} from 'vue';
import App from './App.vue';
import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/lara-light-indigo/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'
import './assets/main.css'
import Toast from "primevue/toast";
import Button from "primevue/button";
import ToastService from 'primevue/toastservice'

import Dialog from "primevue/dialog";
import InputText from "primevue/inputtext";


const app = createApp(App);

app.use(PrimeVue)
    .use(ToastService)
    .component("Dialog", Dialog)
    .component("Button", Button)
    .component("Toast", Toast)
    .component("InputText", InputText)
    .mount('#app');

