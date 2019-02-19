<template>
  <div class="modal">
    <button></button>
    <component :is="renderedModal"></component>
  </div>
</template>

<script>
export default {
  name: 'Modal',

  props: {
    modalType: { type: String, required: true },
  },

  data() {
    return{
      modalContents: {},
    }
  },

  computed: {
    renderedModal() {
      return this.modalContents[this.modalType];
    }
  }
}
</script>

