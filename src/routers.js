/**
 * Created by lihui on 2017/6/15.
 */
const routes = [
  {
    path: '/home',
    redirect: 'home/content',
    component: (resolve) => require(['./components/home.vue'], resolve),
    children: [
      {
        path: 'content',
        component: (resolve) => require(['./components/content.vue'], resolve)
      },
      {
        path: 'video',
        component: (resolve) => require(['./components/video.vue'], resolve)
      },
      {
        path: 'pic',
        component: (resolve) => require(['./components/pic.vue'], resolve)
      }
    ]
  },
  {
    path: '/',
    redirect: '/home',
    component: (resolve) => require(['./components/home.vue'], resolve)
  }
]

export default routes
