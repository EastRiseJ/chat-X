/**
 * Created by dsji on 2017/10/26 0026.
 */
// import Hello from '@/components/Hello'
import Home from '@/components/HelloFromVux'
import Login from '@/page/Login/Login.vue'
import Signup from '@/page/Login/Signup.vue'
import Home from '@/page/Home/Index.vue'

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
  path: '/signup',
  component: Signup
},
{
  path: '/home',
  name: 'Home',
  component: Home,
  meta: {
      requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
  }
}]
export default routes
