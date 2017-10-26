/**
 * Created by dsji on 2017/10/26 0026.
 */
import Hello from '@/components/Hello'
import Home from '@/components/HelloFromVux'

const routes = [{
  path: '/',
  name: 'Hello',
  component: Hello
},
{
  path: '/home',
  name: 'Home',
  component: Home
}]
export default routes
