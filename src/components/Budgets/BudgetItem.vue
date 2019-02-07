<template>
  <div class="row table-data" @click="viewOne()">
    <div class="cell budget-id">{{ budgetId }}</div>
    <div class="cell budget-name">{{ name }}</div>
    <div class="cell budget-amount">{{ amount }}</div>
    <div class="cell budget-items">{{ items.length }}</div>
  </div>
</template>

<script>
export default {
  props: ['budget'],
  name: 'BudgetItem',
  data() {
    const { budgetId, name, amount, items } = this.budget;
    return { budgetId, name, amount, items };
  },
  methods: {
    viewOne() {
      this.$router.push({ name:'BudgetView', params: { id: this.budgetId }});
    }
  }
};
</script>
