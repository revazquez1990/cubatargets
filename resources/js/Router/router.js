import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Parallax from '../components/parallax'
import Login from '../components/login/Login'
import Signup from '../components/login/Signup'
import Logout from '../components/login/Logout'
import Forum from '../components/forum/Forum'
import CreateCategory from '../components/category/createCategory'
import Read from '../components/forum/Read'
import Create from '../components/forum/create'
const routes = [
    { path: '/', component: Parallax },
    { path: '/login', component: Login },
    { path: '/signup', component: Signup },
    { path: '/logout', component: Logout },
    { path: '/category', component: CreateCategory },
    { path: '/forum', component: Forum, name: 'forum' },
    { path: '/ask', component: Create},
    { path: '/question/:slug', component: Read, name: 'read' }
]


const router = new VueRouter({
    routes, // short for `routes: routes`
    hashbang: false,
    mode: 'history'
})

export default router