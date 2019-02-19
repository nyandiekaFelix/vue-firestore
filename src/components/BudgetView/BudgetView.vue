<template>
  <div>
    <button><router-link to="/budgets">Back to Budgets</router-link></button>

    View budget
  </div>
</template>

<script>
import { db } from '../../firebase';
import { firebaseQuery } from '../../helpers/api.js';

export default {
  name: 'BudgetView',
  data() {
    const{ params: { id: budgetId }} = this.$route;
    return {
      budgetId,
      items: [],
      itemsRef: db.collection('budgets').doc(`${budgetId}`).collection('items'),
    };
  },

  async created() { await this.getBudget(); },

  methods: {
    async getBudget() {
      const{ params: { id: budgetId }} = this.$route;
      this.items = await firebaseQuery(this.itemsRef);
    },
    async create() {},
  },
  computed: {}
};
</script>
