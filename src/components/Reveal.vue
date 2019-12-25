<template>
  <component
    :is="tag"
    v-ov="{
      callback: toggleVisible,
      threshold: 1,
      throttle,
    }"
    v-html="content"
  />
</template>

<script>
export default {
  props: {
    tag: String,
    content: String,
    throttle: {
      type: Number,
      default: 500,
    },
  },
  methods: {
    toggleVisible(isVisible, entry) {
      if (isVisible) entry.target.classList.add('visible')
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../assets/_variables';
</style>
