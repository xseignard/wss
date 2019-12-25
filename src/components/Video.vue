<template>
  <div class="wrapper">
    <video
      :src="url"
      autoplay
      loop
      frameborder="0"
      webkitallowfullscreen
      mozallowfullscreen
      allowfullscreen
      muted
    ></video>
    <div></div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      url: state => state.home.showreel,
    }),
  },
}
</script>

<style lang="scss" scoped>
.wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  pointer-events: none;
  overflow: hidden;
  video {
    min-height: 100vh;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  div {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba($color: #000000, $alpha: 0.7);
  }
}
</style>
