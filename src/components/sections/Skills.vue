<template>
  <Section name="Skills">
    <div class="skills-list">
      <span v-for="skill in skills" :key="skill">{{ skill }}</span>
    </div>
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
.skills-list {
  display: grid;
  grid: auto-flow / repeat(auto-fit, 7rem);

  span {
    font-family: $font;
    font-size: $font-size;
  }
}
</style>
