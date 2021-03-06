
const routes = [
  /*{
    path: '/login',
    component: () => import('layouts/LoginLayoutHello.vue'),
    children: [
      { path: '', component: () => import('pages/LoginHello.vue') }
    ]
  },*/
  {
    path: '/login',
    component: () => import('layouts/LoginLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Login.vue') },
      { path: '/register', component: () => import('pages/Register.vue') },
      { path: '/passwordReset', component: () => import('pages/PasswordForget.vue') },
    ]
  },
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    meta: {requiresAuth: true},
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'profile', component: () => import('pages/Profile.vue') },
      { path: 'home', component: () => import('pages/Home.vue') },
      { path: 'transactions', component: () => import('pages/Transactions.vue') },
      { path: 'order', component: () => import('pages/Order.vue') },
      { path: 'order/stock/ID=:stockID', component: () => import('pages/StockOrder.vue') },
      { path: 'invoices', component: () => import('pages/Invoices.vue') },
      { path: 'invoices/ID=:invoiceID', component: () => import('pages/SpecificInvoice.vue') }
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
