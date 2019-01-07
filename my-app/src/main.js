import Vue from 'vue'
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import App from './App.vue';

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

const router = new VueRouter({
    mode: 'history',
    routes: [
        ...projectRoutes,
        ...userRoutes
    ]
});

new Vue({
    el: '#app',
    store,
    router,
    render: h => h(App)
});