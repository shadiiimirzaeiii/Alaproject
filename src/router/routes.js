import auth from 'src/store/auth'
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/admin', component: () => import('pages/admin/Index'), }
    ]
  },
  {
    name: 'LoginIn',
    path: '',
    component: () => import('pages/Login.vue')
  },
  {
    name: 'profile',
    path: '/profile',
    component: () => import('pages/profile.vue'), meta: { requireLogin: true },
    beforEnter(to,from,next) {
      if(!auth.getters[auth/isAuthenticated] ){
        return next({
          name: 'login'
        })

      }

    }
  },

  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
