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

router.beforeEach((to, from, next) => {
    auth.checkAuth()
    if (to.matched.some(record => record.meta.role)) {
        let permission = to.matched[0].meta.role;

        if(permission === 'admin') {
            if(auth.user.role !== 'ROLE_ADMIN' || !auth.user.authenticated) {
                next({
                            path: '/login',
                            query: { redirect: to.fullPath }
                        })
            }
        }

        if(permission === 'user') {
            if(!auth.user.authenticated) {
                next({
                            path: '/login',
                            query: { redirect: to.fullPath }
                        })
            }
        }
        next()
    } else {
        next()
    }
})
new Vue({
    el: '#app',
    store,
    router,
    render: h => h(App)
});