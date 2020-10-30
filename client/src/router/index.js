
import Register from '../components/Register.vue'
import HelloWorld from '../components/HelloWorld.vue'
import Login  from '../components/Login.vue'
import p2 from '../components/p2.vue'

export default{
    routes:[
        {
            path:'/',
            component:HelloWorld,
            name:'Hello'
        },
        {
            path:'/register',
            component:Register,
            name:"register"      
        },
        {
            path:'/login',
            component:Login,
            name:"login"      
        },
        {
            path:'/xyz',
            component:p2,
            
        }
    ]
}