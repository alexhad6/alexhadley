<template>
  <Section name="Experience">
    <Text :text="experience"/>
  </Section>
</template>

<script>
import Section from '@/components/Section.vue';
import Text from '@/components/Text.vue';

export default {
  name: 'Experience',
  components: {
    Section,
    Text,
  },
  props: {
    experience: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss">

</style>
