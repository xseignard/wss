<template>
  <a
    class="scroll"
    @click.prevent="scroll()"
    v-ov="{
      callback: toggleVisible,
      threshold: 1,
      throttle: 600,
    }"
  ></a>
</template>

<script>
export default {
  props: {
    target: String,
  },
  methods: {
    toggleVisible(isVisible, entry) {
      if (isVisible) entry.target.classList.add('visible')
    },
    scroll() {
      document.querySelector(this.target).scrollIntoView({ behavior: 'smooth' })
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../assets/_variables';

.scroll {
  cursor: pointer;
  position: absolute;
  bottom: 20px;
  transition: 0.4s;
  height: 52px;
  width: 32px;
  padding: 10px 14px;
  opacity: 0;
  &::after {
    display: block;
    content: '';
    width: 100%;
    height: 100%;
    background-color: $grey;
  }
  &.visible {
    opacity: 0.5;
  }
  &:hover {
    opacity: 1;
    bottom: 10px;
  }
}
</style>
