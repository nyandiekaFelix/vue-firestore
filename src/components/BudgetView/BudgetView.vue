<template>
  <div>
    <button><router-link to="/budgets">Back to Budgets</router-link></button>

    View budget
  </div>
</template>

<script>
export default {
  name: 'BudgetView',
  data() {

  },

  async created() {
   this.getBudget();
  },

  methods: {
    getBudget() {
      const{ params: { id }} = this.$route;
      console.log('id', id);
    },
  },
  computed: {}
};
</script>
