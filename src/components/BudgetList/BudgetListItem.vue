<template>
  <div class="row table-data" @click="viewOne()">
    <div class="cell budget-id">{{ identifier }}</div>
    <div class="cell budget-name">{{ name }}</div>
    <div class="cell budget-amount">{{ amount }}</div>
    <div class="cell budget-time">{{ readableTime }}</div>
  </div>
</template>

<script>
export default {
  props: {
    budget: { type: Object, required: true },
    identifier: { type: Number, required: true }
  },
  name: 'BudgetListItem',

  data() {
    const { budgetId, name, amount } = this.budget;
    return { budgetId, name, amount };
  },

  computed: {
    readableTime() {
      const { created: timeCreated } = this.budget;
      const time = timeCreated.toDate();
      return `${time}`.split(' ').slice(0, 4).join(' ');;
    },
  },

  async created() {  },

  methods: {
    viewOne() {
      this.$router.push({ name:'BudgetView', params: { id: this.budgetId }});
    },
  }
};
</script>
