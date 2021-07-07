<template>
  <Header :header="header"/>
  <Content :content="content"/>
</template>

<script>
import Header from '@/components/Header.vue';
import Content from '@/components/Content.vue';
import data from '@/assets/data.json';

export default {
  name: 'App',
  components: {
    Header,
    Content,
  },
  data() {
    return data;
  },
};
</script>

<style lang="scss">
body {
  max-width: 70rem;
  margin: auto;
  padding-left: $side-padding;
  padding-right: $side-padding;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
