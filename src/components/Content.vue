<template>
  <main>
    <About :text="content.about"/>
    <Skills :skills="content.skills"/>
    <Projects :projects="content.projects"/>
    <Experience :experience="content.experience"/>
  </main>
</template>

<script>
import About from '@/components/sections/About.vue';
import Skills from '@/components/sections/Skills.vue';
import Projects from '@/components/sections/Projects.vue';
import Experience from '@/components/sections/Experience.vue';

export default {
  name: 'Content',
  components: {
    About,
    Skills,
    Projects,
    Experience,
  },
  props: {
    content: {
      type: Object,
      required: true,
    },
  },
};
</script>
