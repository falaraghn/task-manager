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
console.log(action);
        axios.post(url, creds)
            .then((response) => {
                localStorage.setItem('id_token', response.data.token)
                let userInfo = VueJWTDecode.decode(response.data.token);
                this.user.authenticated = true;
                this.user.role = userInfo.roles[0];
                this.user.username = userInfo.username;
                console.log(userInfo);

                if (redirect) {
                    router.push(redirect)
                }
            }).catch((err) => {
                console.log(err);
            context.error = err.response.data.message
        })
    }
    ,

    logout() {
        localStorage.removeItem('id_token')
        this.user.authenticated = false;
        this.user.role = null;
        this.user.username = null;
    }
    ,

    checkAuth() {
        var jwt = localStorage.getItem('id_token')
        if (jwt) {
            this.user.authenticated = true
        } else {
            this.user.authenticated = false
        }
    }
    ,

    getAuthHeader() {
        return {
            'Authorization': 'Bearer ' + localStorage.getItem('id_token')
        }
    }
}
