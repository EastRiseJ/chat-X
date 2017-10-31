/**
 * Created by dsji on 2017/10/26 0026.
 */
// import Hello from '@/components/Hello'
import Home from '@/components/HelloFromVux'
import Login from '@/page/Login/Login.vue'

const routes = [{
  path: '/',
  name: 'Login',
  component: Login
},
{
  path: '/login',
  component: Login
},
{
  path: '/home',
  name: 'Home',
  component: Home
}]
export default routes
