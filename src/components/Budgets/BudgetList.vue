<template>
  <div class="budget-list container">
    <div class="row col-md-10 budget-header">
      <div class="col-md-10 budget-title">
        <strong> Budgets </strong>
      </div>
      <div class="col-md-2">
        <button class="new-budget">Add New</button>
      </div>
    </div>
    <div class="budget-table">
      <div class="row table-headers">
        <div class="cell budget-id"><strong>#</strong></div>
        <div class="cell budget-name"><strong>Name</strong></div>
        <div class="cell budget-amount"><strong>Amount</strong></div>
        <div class="cell budget-time"><strong>Created</strong></div>
      </div>
      <div class="table-body">
        <budget-item
          v-for="(budget, index) in budgets"
          :key="index"
          :identifier="index + 1"
          :budget="budget">
        </budget-item>
      </div>
    </div>
  </div>
</template>

<script>
import BudgetListItem from './BudgetListItem';
import { db } from '../../firebase';
import './budgets.scss';

export default {
  name: 'Budget',
  components: { 'budget-item': BudgetListItem },

  data() {
    return {
      budgets: [],
      budgetsRef: db.collection('budgets'),
    };
  },

  async created() { await this.getBudgets(); },

  methods: {
    async getBudgets() {
      const data = await this.budgetsRef.get();
      data.forEach(budget => {
        this.budgets.push({
          budgetId: budget.id,
          ...budget.data(),
        });
      });
    },
  },
}
</script>



