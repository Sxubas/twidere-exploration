import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Design from '@/views/Design.vue';
import Features from '@/views/Features.vue';
import Connectivity from '@/views/Connectivity.vue';
import Performance from '@/views/Performance.vue';
import Security from '@/views/Security.vue';
import Stats from '@/views/Stats.vue';
import Content from '@/views/Content.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    alias: '/home',
    name: 'home',
    component: Home,
  },
  {
    path: '/design',
    name: 'design',
    component: Design,
  },
  {
    path: '/features',
    name: 'features',
    component: Features,
  },
  {
    path: '/connectivity',
    name: 'connectivity',
    component: Connectivity,
  },
  {
    path: '/performance',
    name: 'performance',
    component: Performance,
  },
  {
    path: '/security',
    name: 'security',
    component: Security,
  },
  {
    path: '/stats',
    name: 'stats',
    component: Stats,
  },
  {
    path: '/content',
    name: 'content',
    component: Content,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
