<template>
  <div class="row table-data" @click="viewOne()">
    <div class="cell budget-id">{{ identifier }}</div>
    <div class="cell budget-name">{{ name }}</div>
    <div class="cell budget-amount">{{ amount }}</div>
    <div class="cell budget-items">{{ items.length }}</div>
  </div>
</template>

<script>
import { db } from '../../firebase';

export default {
  props: {
    budget: { type: Object, required: true },
    identifier: { type: Number, required: true }
  },
  name: 'BudgetItem',

  data() {
    const { budgetId, name, amount } = this.budget;
    return {
      budgetId, name, amount,
      items: [],
      itemsRef: db.collection('budgets').doc(`${budgetId}`).collection('items'),
    };
  },

  async created() { await this.getItems(); },

  methods: {
    viewOne() {
      this.$router.push({ name:'BudgetView', params: { id: this.budgetId }});
    },
    async getItems(budget) {
      const items = await this.itemsRef.get();
      items.forEach(item => {
        this.items.push({
          itemId: item.id,
          ...item.data()
        });
      });
    }
  }
};
</script>
