<template>
  <Section name="Skills">
    <p v-for="skill in skills" :key="skill">{{skill}}</p>
  </Section>
</template>

<script>
import Section from '@/components/Section.vue';

export default {
  name: 'Skills',
  components: {
    Section,
  },
  props: {
    skills: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss">
section#skills {
  span {
    margin-right: 1.5rem;
    font-size: 1.25rem;
  }
}
</style>
