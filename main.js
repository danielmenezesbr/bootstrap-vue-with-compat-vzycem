import Vue, { createApp } from '@vue/compat';
import BootstrapVue from 'bootstrap-vue';
import HelloBootstrap from './components/HelloBootstrap.vue';
import ToastPage from './components/ToastPage.vue';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(BootstrapVue);
const app = createApp(ToastPage);
app.mount('#app');
