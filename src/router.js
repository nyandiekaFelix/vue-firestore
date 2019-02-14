import Vue from 'vue';
import Router from 'vue-router';

import BudgetList from './components/BudgetList/BudgetList.vue';
import BudgetView from './components/BudgetView/BudgetView.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/budgets',
      name: 'Budgets',
      component: BudgetList,
    },
    {
      path: '/view/:id',
      name: 'BudgetView',
      component: BudgetView,
    },
  ],
});
