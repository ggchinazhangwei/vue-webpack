import 'babel-polyfill';
import Vue from 'vue';
import VueRouter from 'vue-router';
import 'swiper/dist/css/swiper.min.css';
import '@asset/sass/style.scss';

import App from './App';

import routes from './route';

Vue.use(VueRouter);

const router = new VueRouter({ routes: routes, mode: 'history' });

new Vue({
    el:'#app',
    router,
    render: h => h(App)
});

