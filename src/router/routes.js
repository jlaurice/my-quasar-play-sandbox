// Inside this file is where we assign URLs to Vue components which will be the pages of the app ...

const routes = [
  {
    path: '/',

    // We point it to our component where we defined our QLayout
    component: () => import('layouts/MainLayout.vue'),

    // Now we define the sub-routes.
    // These are getting injected into
    // layout (from above) automatically
    // by using <router-view> placeholder
    // (need to specify it in layout)
    children: [
      // route: /
      { path: '', component: () => import('pages/Index.vue') },
      // route: /HelloWorld
      { path: 'HelloWorld', component: () => import('pages/HelloWorld.vue') },
      // route: /ListView
      {
        path: 'ListViewExample',
        component: () => import('pages/examples/ListViewExample.vue')
      },
      // route: /Exercise1
      {
        path: 'Exercise1',
        component: () => import('pages/examples/Exercise1.vue')
      }
    ]
  },

  {
    path: '/appointment',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      // route: /appointment/
      { path: '', component: () => import('pages/ApptMain.vue') },
      // route: /appointment/ApptByDoctor
      {
        path: 'ApptByDoctor',
        component: () => import('pages/ApptByDoctor.vue')
      }
    ]
  },

  // Always leave this as last one
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
