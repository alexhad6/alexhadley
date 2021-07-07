<template>
  <Section name="Contact">
    <Text :text="about"/>
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
    about: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss">
section#about {
  p {
    // max-width: 50rem;
    font-size: $font-medium;
  }
}
</style>
