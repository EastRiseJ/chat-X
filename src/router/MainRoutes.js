/**
 * Created by dsji on 2017/11/27 0027.
 */
import Home from '@/page/home/'
import Chats from '@/page/Contents/Chats'
import Directories from '@/page/Contents/Directories'
import User from '@/page/Contents/User'
import ChatOne from '@/page/Contents/Chats/ChatOne'
import DirectorieInfo from '@/page/Contents/Directories/DirectorieInfo'
import DirectorieAddlist from '@/page/Contents/Directories/DirectorieAddlist'

const routes = [{
  path: '/home',
  name: 'Home',
  component: Home,
  meta: {
    requireAuth: true  // 添加该字段，表示进入这个路由是需要登录的
  },
  children: [
    {
      path: '',
      component: Chats
    },
    {
      path: 'chats',
      name: 'Chats',
      component: Chats
    },
    {
      path: 'directories',
      name: 'Directories',
      component: Directories
    },
    {
      path: 'user',
      name: 'User',
      component: User
    }
  ]
},
{
  path: '/chat_one/:id',
  name: 'ChatOne',
  component: ChatOne
},
{
  path: '/directorie_info',
  name: 'DirectorieInfo',
  component: DirectorieInfo,
  props: true
},
{
  path: '/directorie_addlist',
  name: 'DirectorieAddlist',
  component: DirectorieAddlist
}]
export default routes
