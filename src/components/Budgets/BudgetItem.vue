<template>
  <tr>
    <td>{{ budget.budgetId }}</td>
    <td>{{ budget.name }}</td>
    <td>{{ budget.amount }}</td>
    <td>{{ budget.items.length }}</td>
  </tr>
</template>

<script>
export default {
  props: ['budget'],
  name: 'BudgetItem'
}
</script>
