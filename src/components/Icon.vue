<template>
  <div class="icon">
    <svg xmlns="http://www.w3.org/2000/svg" :viewBox="viewBox">
      <path :d="path"/>
    </svg>
  </div>
</template>

<script>
import icons from '@/assets/icons.json';

export default {
  name: 'Icon',
  props: {
    icon: {
      text: String,
      required: true,
    },
  },
  data() {
    return icons[this.icon];
  },
};
</script>
