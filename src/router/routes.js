
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      // { path: '', component: () => import('pages/IndexPage.vue') },
      { path: '/admin', component: () => import('pages/admin/Index'), meta: { requireLogin: true } }
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
    component: () => import('pages/profile.vue')
  },

  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
