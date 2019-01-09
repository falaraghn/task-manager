import Vue from 'vue'
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import App from './App.vue';


import Login from './components/login/Login';
import Signup from './components/login/Signup';
import auth from './utils/auth';

import axios from 'axios';

import project from './store/modules/project/';
import user from './store/modules/user/';
import projectRoutes from './router/project';
import userRoutes from './router/user';

Vue.use(Vuex);
Vue.use(VueRouter);

const store = new Vuex.Store({
    modules: {
        project,
        user
    }
});

export const router = new VueRouter({
    mode: 'history',
    routes: [
        ...projectRoutes,
        ...userRoutes,
        { name: 'Login',path: '/login', component: Login },
        { name: 'Signup',path: '/signup', component: Signup },
        // // { name: 'Home',path: '/'},
    ]
});

new Vue({
    el: '#app',
    store,
    router,
    render: h => h(App)
});