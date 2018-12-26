import Login from '@module/login';
import Home from '@module/home';

export default [
    {
        path: '/',
        redirect: to => '/login'
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/',
        component: Home,
        name: 'home'
    },
];