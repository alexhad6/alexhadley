<template>
  <Section name="About" :showHeader="false">
    <Text :text="text"/>
  </Section>
</template>

<script>
import Section from '@/components/Section.vue';
import Text from '@/components/Text.vue';

export default {
  name: 'About',
  components: {
    Section,
    Text,
  },
  props: {
    text: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss">
section#about {
  p {
    // font-size: $font-medium;
  }
}
</style>
