<template>
    <div class="container">
        <nav>
            <span v-if="user.authenticated">Logged as {{user.username}} ({{user.role}})</span>
            <ul class="nav nav-justified">
                <!-- Replace Foo with your resource name -->
                <li v-if="user.authenticated">
                    <router-link :to="{ name: 'ProjectList' }">Projects</router-link>
                </li>
                <li v-if="user.authenticated">
                    <router-link :to="{ name: 'ProjectScheduler' }">Scheduler</router-link>
                </li>
                <li v-if="user.authenticated">
                    <router-link :to="{ name: 'UserList' }">Users</router-link>
                </li>
                <li v-if="!user.authenticated">
                    <router-link :to="{ name: 'Login' }">Login</router-link>
                </li>
                <li v-if="!user.authenticated">
                    <router-link :to="{ name: 'Signup' }">Sign up</router-link>
                </li>
                <li v-if="user.authenticated" @click="logout()">
                    <router-link to="/login">Logout</router-link>
                </li>
            </ul>
        </nav>
        <div>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import auth from './utils/auth'

    export default {
        data() {
            return {
                user: auth.user
            }
        },
        methods: {
            logout() {
                auth.logout()
            }
        }
    }
</script>


<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }

    h1, h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
