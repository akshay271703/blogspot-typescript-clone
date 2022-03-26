import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/admin/cover',
    name: 'Cover',
    component: () => import('../views/Covers/Cover.admin.vue'),
  },
  // User View
  {
    path: '/article',
    name: 'Article',
    component: () => import('../views/Article.vue'),
  },
  {
    path: '/covers/:coverId',
    name: 'CoverItems',
    component: () => import('../views/Covers/CoverItems.vue'),
    params: true,
  },
  {
    path: '/post/:postId',
    name: 'Post',
    component: () => import('../views/Post/Post.vue'),
    params: true,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
