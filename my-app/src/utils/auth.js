import {router} from '../main';
import axios from 'axios'
import {ENTRYPOINT} from '../config/entrypoint';
import VueJWTDecode from 'vue-jwt-decode';

const LOGIN_URL = ENTRYPOINT + '/login_check';
const SIGNUP_URL = ENTRYPOINT + '/register';

export default {
    user: {
        authenticated: false,
        role: null,
        username: null,
    },

    login_or_signup(action, context, creds, redirect) {
        let url = ''
        switch (action) {
            case 'login':
                url = LOGIN_URL;
                break;
            case 'signup':
                url = SIGNUP_URL;
                break;
            default:
                url = LOGIN_URL;
        }
        axios.post(url, creds)
            .then((response) => {
                localStorage.setItem('token', response.data.token)
                if (url === LOGIN_URL) {
                    let userInfo = VueJWTDecode.decode(response.data.token);
                    this.user.authenticated = true;
                    this.user.role = userInfo.roles[0];
                    this.user.username = userInfo.username;
                    if (redirect) {
                        router.push(redirect)
                    }
                } else {
                    router.push('/login')
                }
            }).catch((err) => {
            context.error = err.response.data.message
        })
    }
    ,

    logout() {
        localStorage.removeItem('token')
        this.user.authenticated = false;
        this.user.role = null;
        this.user.username = null;
    }
    ,

    checkAuth() {
        let userInfo = localStorage.getItem('token') ? VueJWTDecode.decode(localStorage.getItem('token')) : null;
        if (userInfo) {
            this.user.authenticated = true;
            this.user.role = userInfo.roles[0];
            this.user.username = userInfo.username;
        } else {
            this.user.authenticated = false;
            this.user.role = null;
            this.user.username = null;
        }
    }
    ,

    getAuthHeader() {
        return 'Bearer ' + localStorage.getItem('token')

    }
}
