<template>
  <Section name="Projects">
    <div class="container">
      <ProjectCard v-for="project in projects"
        :key="project.title"
        :title="project.title"
        :description="project.description"
        :link="project.link"
        :github="project.github"
      />
    </div>
  </Section>
</template>

<script>
import Section from '@/components/Section.vue';
import ProjectCard from '@/components/ProjectCard.vue';

export default {
  name: 'Projects',
  components: {
    Section,
    ProjectCard,
  },
  props: {
    projects: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

@media only screen and (max-width: 850px) {
    .container {
      grid-template-columns: repeat(2, 1fr);
    }

    @media only screen and (max-width: 600px) {
    .container {
      grid-template-columns: repeat(1, 1fr);
    }
  }
}

</style>
