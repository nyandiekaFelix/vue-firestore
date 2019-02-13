<template>
  <div>
    <button><router-link to="/budgets">Back to Budgets</router-link></button>

    View budget
  </div>
</template>

<script>
// import budgets from '../../mocks.js';

export default {
  name: 'BudgetView',
  async created() {
  //  this.getBudget();
  },
  methods: {
    // getBudget() {
    //   const{ params: { id }} = this.$route;
    //   console.log('id', id);
    //   const budget = budgets.filter(budgeti => budgeti.budgetId === id)[0];
    //   this.budget = budget;
    //   console.log('this', JSON.stringify(this.budget));
    // },
  },
  computed: {}
};
</script>
