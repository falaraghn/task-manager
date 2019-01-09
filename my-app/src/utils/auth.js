import { router } from '../main';
import axios from 'axios'
import  {ENTRYPOINT} from  '../config/entrypoint';
import VueJWTDecode from 'vue-jwt-decode';
const LOGIN_URL = ENTRYPOINT + '/login_check';

export default {
    user: {
        authenticated: false,
        role: null,
        username: null,
    },

    login(context, creds, redirect) {

        axios.post(LOGIN_URL, creds)
            .then((response) => {
                localStorage.setItem('id_token', response.data.token)
                let userInfo = VueJWTDecode.decode(response.data.token);
                this.user.authenticated = true;
                this.user.role = userInfo.roles[0];
                this.user.username = userInfo.username;
                console.log(userInfo);

                if(redirect) {
                    router.push(redirect)
                }
            }).catch((err) => {
            context.error = err.response.data.message
        })
    },

    logout() {
        localStorage.removeItem('id_token')
        this.user.authenticated = false;
        this.user.role = null;
        this.user.username = null;
    },

    checkAuth() {
        var jwt = localStorage.getItem('id_token')
        if(jwt) {
            this.user.authenticated = true
        } else {
            this.user.authenticated = false
        }
    },

    getAuthHeader() {
        return {
            'Authorization': 'Bearer ' + localStorage.getItem('id_token')
        }
    }
}
