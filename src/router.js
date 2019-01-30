import Vue from 'vue';
import Router from 'vue-router';

import CategoryList from './components/categories/CategoryList.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    { path: '/categories', name: 'Categories', component: CategoryList },
  ],
});
