import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue'
import ServicesTech from './pages/ServicesTech.vue'
import ServicesRisk from './pages/ServicesRisk.vue'
import ServicesAssurance from './pages/ServicesAssurance.vue'
import SignIn from './pages/SignIn.vue'
import SignUp from './pages/SignUp.vue'
import ResetPassword from './pages/ResetPassword.vue'

const routerHistory = createWebHistory()

const router = createRouter({
  scrollBehavior(to) {
    if (to.hash) {
      window.scroll({ top: 0 })
    } else {
      document.querySelector('html').style.scrollBehavior = 'auto'
      window.scroll({ top: 0 })
      document.querySelector('html').style.scrollBehavior = ''
    }
  },  
  history: routerHistory,
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/servicesTech',
      component: ServicesTech
    },
    {
      path: '/servicesRisk',
      component: ServicesRisk
    },
    {
      path: '/servicesAssurance',
      component: ServicesAssurance
    },          
    // {
    //   path: '/signin',
    //   component: SignIn
    // },
    {
      path: '/signup',
      component: SignUp
    },    
    {
      path: '/reset-password',
      component: ResetPassword
    }
  ]
})

export default router
