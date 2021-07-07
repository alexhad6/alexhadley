<template>
  <section :id="id">
    <h2 v-if="showHeader">{{ name }}</h2>
    <slot></slot>
  </section>
</template>

<script>
export default {
  name: 'Section',
  props: {
    name: {
      text: String,
      required: true,
    },
    showHeader: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    id() {
      return this.name.toLowerCase().replace(' ', '-');
    },
  },
};
</script>

<style lang="scss">
section {
  margin-bottom: 1.5rem;

  h2 {
    margin-top: 0;
    margin-bottom: 1rem;
    font-family: $header-font;
    font-size: 2rem;
    font-weight: $header-font-weight;
  }
}
</style>
