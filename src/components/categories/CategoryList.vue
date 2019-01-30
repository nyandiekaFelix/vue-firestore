<template>
  <div class="category-list">
    This will be a category list
    <category-item></category-item>
  </div>
</template>

<script>
import CategoryItem from './CategoryItem';

export default {
  name: 'Category',
  components: { 'category-item': CategoryItem}
}
</script>
