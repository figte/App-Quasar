
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      // { path: '', component: () => import('pages/Index.vue') }
      { path: '', component: () => import('pages/Todo.vue') },
      { path: '/listado2', component: () => import('pages/Todo2.vue') },
      { path: '/nuevo', component: () => import('pages/Nuevo.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
