<template>
  <Section name="Skills">
    <ul v-for="skill in skills" :key="skill.name">
      <li><h3>{{ skill.name }}:</h3></li>
      <li v-for="item in skill.data" :key="item">{{ item }}</li>
    </ul>
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
#skills > ul {
  display: flex;
  flex-flow: wrap;
  align-items: baseline;
  padding-left: 0;
  list-style-type: none;
  margin-top: 0.5rem;

  &:first-of-type {
    margin-top: -0.25rem;
  }

  li {
    margin-right: 1.5rem;
    margin-top: 0.25rem;
    font-family: $font;
    font-size: $font-size;
  }

  h3 {
    margin-top: 0;
    margin-bottom: 0;
    font-family: $header-font;
    font-size: 1.6rem;
    font-weight: $header-font-weight;
  }
}
</style>
