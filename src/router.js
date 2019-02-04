import Vue from 'vue';
import Router from 'vue-router';

import BudgetList from './components/Budgets/BudgetList.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    { path: '/budgets', name: 'Budgets', component: BudgetList },
  ],
});
