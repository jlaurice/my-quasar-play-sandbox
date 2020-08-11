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
      {
        path: '/HelloWorld',
        component: () => import('pages/HelloWorld.vue')
      },
      {
        path: '/ListViewExample',
        component: () => import('pages/examples/ListViewExample.vue')
      },
      {
        path: '/Exercise1',
        component: () => import('pages/examples/Exercise1.vue')
      },
      {
        path: '/Exercise2',
        component: () => import('pages/examples/Exercise2.vue')
      },
      {
        name: 'users',
        path: '/users',
        component: () => import('pages/examples/Users.vue')
      },
      {
        name: 'user',
        path: '/users/:id',
        component: () => import('pages/examples/User.vue')
      },
      {
        path: '/KnowledgeAssists',
        component: () => import('pages/KnowledgeAssistsMain.vue')
      },
      {
        path: '/PatientServices',
        component: () => import('pages/PatientServicesMain.vue')
      },
      {
        path: '/Contact',
        component: () => import('pages/ContactMain.vue')
      },
      {
        path: '/ENTSearch',
        component: () => import('pages/ENTSearchMain.vue')
      },
      {
        path: '/AllergistSearch',
        component: () => import('pages/AllergistSearchMain.vue')
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
        path: '/ApptByDoctor',
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
