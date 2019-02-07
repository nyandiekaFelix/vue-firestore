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
        <div class="cell budget-items"><strong>No. Items</strong></div>
      </div>
      <div class="table-body">
        <budget-item
          v-for="budget in budgets"
          :key="budget.budgetId"
          :budget="budget">
        </budget-item>
      </div>
    </div>
  </div>
</template>

<script>
import BudgetItem from './BudgetItem';
import budgets from '../../mocks.js';
import './budgets.scss';

export default {
  name: 'Budget',
  components: { 'budget-item': BudgetItem },
  data() { return { budgets } },
}
</script>



