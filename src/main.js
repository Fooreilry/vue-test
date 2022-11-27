import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import UIcomponents from '@/components/UI'
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css"

const app = createApp(App);

UIcomponents.forEach(component => {
    app.component(component.name, component);
})

const toastOption = {
    position: "top-right",
    timeout: 1000,
    closeOnClick: false,
    pauseOnFocusLoss: false,
    pauseOnHover: false,
    draggable: false,
    draggablePercent: 0.6,
    showCloseButtonOnHover: false,
    hideProgressBar: true,
    closeButton: "button",
    icon: true,
    rtl: false
}

app.use(router).use(Toast, toastOption).mount('#app');
