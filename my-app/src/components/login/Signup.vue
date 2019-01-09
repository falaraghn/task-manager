<template>
    <div class="col-sm-4 col-sm-offset-4">
        <h2>Sign Up</h2>
        <p>Please Sign Up</p>
        <div class="alert alert-danger" v-if="error">
            <p>{{ error }}</p>
        </div>
        <div class="form-group">
            <input
                    required
                    type="text"
                    class="form-control"
                    placeholder="Enter your username"
                    v-model="credentials.username"
            >
        </div>
        <div class="form-group">
            <input
                    required
                    type="password"
                    class="form-control"
                    placeholder="Enter your password"
                    v-model="credentials.password"
            >
        </div>
        <div class="form-group">
            <select
                    required
                    class="form-control"
                    v-model="credentials.roles"
            >
                <option value="">...</option>
                <option value="ROLE_ADMIN">Administrator</option>
                <option value="ROLE_USER">Ordinary user</option>
            </select>
        </div>
        <button class="btn btn-primary" @click="submit()">Access</button>
    </div>
</template>

<script>
    import auth from '../../utils/auth'
    export default {
        data() {
            return {
                credentials: {
                    username: '',
                    password: '',
                    roles:''
                },
                error: ''
            }
        },
        methods: {
            submit() {
                var credentials = {
                    username: this.credentials.username,
                    password: this.credentials.password,
                    roles: this.credentials.roles
                }

                auth.login_or_signup('signup', this, credentials, './')
            }
        }
    }
</script>
