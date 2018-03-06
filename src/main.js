import Vue from 'vue';
import VueRouter from 'vue-router';
import 'animate.css/animate.css';
import '@asset/sass/style.scss';
import '@asset/js/wow.js';

import App from './App';

import routes from './route';

Vue.use(VueRouter);

const router = new VueRouter({ routes: routes });

new Vue({
    el:'#app',
    router,
    render: h => h(App)
});

