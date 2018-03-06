import Index from '@module/home/index.vue';

export default [
    {
        path: '/',
        redirect: to => '/index'
    },
    {
        path: '/index',
        component: Index
    },
];