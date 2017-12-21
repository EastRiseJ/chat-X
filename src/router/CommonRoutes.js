/**
 * Created by dsji on 2017/10/26 0026.
 */
// import Hello from '@/components/Hello'
import Home from '@/page/home/'
import Login from '@/page/Login/Login.vue'
import Signup from '@/page/Login/Signup.vue'

const routes = [{
  path: '/',
  name: 'Home',
  component: Home,
  meta: {
    requireAuth: true
  }
},
{
  path: '/login',
  component: Login
},
{
  path: '/signup',
  component: Signup
}]
export default routes
