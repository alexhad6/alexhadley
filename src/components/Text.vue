<template>
  <p v-html="parseText"></p>
</template>

<script>
export default {
  name: 'Text',
  props: {
    text: {
      type: String,
      required: true,
    },
  },
  computed: {
    parseText() {
      return this.text
        .replaceAll(
          /\[(.*?)\]\((.*?)\)/g,
          '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>',
        ).replaceAll(
          /\*(.*?)\*/g,
          '<em>$1</em>',
        );
    },
  },
};
</script>

<style lang="scss">
p {
  margin-top: 0;
  margin-bottom: 0;
  font-family: $font;
  font-size: $font-size;

  a {
    text-decoration: underline;
    color: $link-blue;

    &:hover {
      text-decoration: none;
    }
  }
}
</style>
