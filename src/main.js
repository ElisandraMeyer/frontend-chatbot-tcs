import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config';
import '@/plugins/axios.js'
import ToastService from 'primevue/toastservice';



//in main.js
import 'primevue/resources/themes/lara-light-blue/theme.css'
import 'primeflex/themes/primeone-light.css'


import 'primeicons/primeicons.css'






const app = createApp(App)

app.use(PrimeVue, {
    locale: {
        monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
    },
});

app.use(router)
app.use(PrimeVue);
app.use(ToastService);


app.mount('#app')





