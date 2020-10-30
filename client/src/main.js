import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import Register from './components/Register.vue'
import Login  from './components/Login.vue'
import p2 from './components/p2.vue'
// import routes from './router/index.js'


const router =new VueRouter({
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
      name:'login'
  },
  {
      path:'/p2',
      component:p2,
      name:"p2"      
  },

],
  // mode:history
  mode:'history'
})


// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.config.productionTip = false
Vue.use(VueRouter)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
