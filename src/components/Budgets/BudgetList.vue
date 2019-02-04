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
      <table>
        <thead>
          <tr class="table-headers">
            <th id="budget-id">#</th>
            <th id="budget-name">Name</th>
            <th id="budget-amount">Amount</th>
            <th id="budget-items">No. Items</th>
          </tr>
        </thead>
        <tbody>
          <budget-item 
            v-bind:key="budget.budgetId" 
            v-for="budget in mocks" 
            v-bind:budget="budget">
          </budget-item>
        </tbody>
      </table>
    </div>
  </div>
</template>


<style>

.budget-list {
  margin-right: 20px;
}

.budget-header{
  height: 58px;
  background-color: #34495E;
  color: #fff;
  text-align: left;
  padding: 7px;
}

.budget-title {
  color: #41B883;
  margin-top: 8px;
  text-transform: uppercase;
  font-size: 20px;
}

.new-budget{
  background: #41B883;
  border: none;
  outline: none;
  cursor: pointer;
  color: #34495E;
  padding: 10px;
  width: 100%;
}

.budget-table{
  width: 925px;
  background: rgba(52, 73, 94, 0.5);
  margin-left: -15px;
  padding: 5px 20px;
  text-align: left;
}

#budget-id{
  width: 10%;
}

#budget-name{
  width: 56%;
}

#budget-amount{
  width: 25%;
}

#budget-items{
  width: 10%;
}
</style>


<script>
import BudgetItem from './BudgetItem';
import mocks from '../../mocks.js';

export default {
  name: 'Budget',
  components: { 'budget-item': BudgetItem },
  data() { return { mocks } }
}
</script>



