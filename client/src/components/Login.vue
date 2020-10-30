<template>
    <div>
        <h1>Login</h1>
        <input type="email" name="email" placeholder="email" v-model="email" autocomplete="true">
        <input type="password" name="password" placeholder="password" v-model="password">
        <button @click="login">Login</button>
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
        async login()
        {
            try {
                await AuthenticationService.login({
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