import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '*',
    name: 'NotFound',
    component: () => import(/* webpackChunkName: "about" */ '../views/NotFound.vue'),
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue'),
  },
  {
    path: '/signup',
    name: 'SignUp',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/SignUp.vue'),
  },
  {
    path: '/profile',
    name: 'Profile',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Profile.vue'),
  },
  {
    path: '/media/:id',
    name: 'Media',
    component: () => import(/* webpackChunkName: "about" */ '../views/Media.vue'),
  },
  {
    path: '/admin',
    name: 'Admin',
    // redirect: 'Home',
    component: () => import(/* webpackChunkName: "about" */ '../views/Admin.vue'),
    children: [
      {
        path: '',
        name: 'Dashboard',
        component: () => import(/* webpackChunkName: "about" */ '@/components/AdminComponents/Dashboard.vue'),
        children: [
          {
            path: 'media',
            name: 'MediaAdministration',
            component: () => import(/* webpackChunkName: "about" */ '@/components/AdminComponents/MediaAdmin/Main.vue'),
            children: [
              {
                path: 'create',
                name: 'MediaCreate',
                component: () => import(/* webpackChunkName: "about" */ '@/components/AdminComponents/MediaAdmin/Create.vue'),

              },
            ],
          },
          {
            path: 'users',
            name: 'UserAdministration',
          },
        ],
      },

    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
