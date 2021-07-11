<template>
  <div class="project-card">
    <div class="project-card__title">
      <h3>{{title}}</h3>
      <div class="project-card__links">
        <a v-if="github !== null"
          :href="github"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon icon="github"/>
        </a>
        <a v-if="link !== null"
          :href="link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon icon="launch"/>
        </a>
      </div>
    </div>
    <Text :text="description"/>
  </div>
</template>

<script>
import Text from '@/components/Text.vue';
import Icon from '@/components/Icon.vue';

export default {
  name: 'ProjectCard',
  components: {
    Text,
    Icon,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: Array,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
    github: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.project-card {
  position: relative;
  padding-top: 0.9rem;
  padding-bottom: 3.5rem;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  border-radius: 0.25rem;
  background-color: $light-blue;

  h3 {
    margin-top: 0;
    margin-bottom: 0.25rem;
    font-family: $header-font;
    font-size: 1.5rem;
    font-weight: $header-font-weight;
  }

  p {
    font-size: 1.25rem;
    margin-bottom: 0.25rem;
  }

  &__title {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__links {
    display: flex;
    justify-content: flex-start;

    a:not(:first-of-type) {
      margin-left: 1rem;
    }

    svg {
      width: 1.5rem;
      height: 1.5rem;

      &:hover {
        fill: $link-blue;
      }
    }
  }
}
</style>
