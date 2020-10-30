<template>
    <div>
        <h1>Register</h1>
        <input type="email" name="email" placeholder="email" v-model="email">
        <input type="password" name="password" placeholder="password" v-model="password">
        <button @click="register">Register</button>
        <router-link to="/login" tag="button">Login</router-link>
    </div>
</template>
<script>
import AuthenticationService from '../services/AuthenticationService.js'
export default {
    data(){
        return{
            email:"",
            password:"",
            error:null
        }
    },
    watch:
    {
        email()
        {
            console.log("Email has changed its value.")
        }
    },
    methods:{
        async register()
        {
            try {
                await AuthenticationService.register({
                    email:this.email,
                    password:this.password
                })
            } catch (data) {
                console.log(data)
            }
        }
    }
}
</script>
<style scoped>

</style>