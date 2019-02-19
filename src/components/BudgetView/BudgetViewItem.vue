<template>
  <div>
    <div class="row table-data">
      <div class="b-cell">{{ index }}</div>
      <div class="b-cell">{{ itemName }}</div>
      <div class="b-cell">{{ itemCost }}</div>
      <div class="b-cell">{{ }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BudgetItem',
  props: {},
  data() {},
  methods: {
    async edit() {},
    async delete() {},
  },
}
</script>
