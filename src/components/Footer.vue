<template>
  <footer class="footer">
    <div>
      <a
        href="https://www.facebook.com/whysoseriousproductions/"
        target="_blank"
      >
        <FacebookIcon />
      </a>
      <a href="https://vimeo.com/user79434106" target="_blank">
        <VimeoIcon />
      </a>
    </div>
    <a
      href="mailto:contact@whyoseriousproductions.fr"
      target="_blank"
      class="mail"
    >
      contact@whyoseriousproductions.fr
    </a>
  </footer>
</template>

<script>
import FacebookIcon from 'vue-material-design-icons/Facebook.vue'
import VimeoIcon from 'vue-material-design-icons/Vimeo.vue'

export default {
  components: {
    FacebookIcon,
    VimeoIcon,
  },
}
</script>

<style lang="scss" scoped>
@import '../assets/_variables';

.footer {
  height: 20vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  span {
    width: 60px;
    height: 60px;
    margin: 0 30px;
    svg {
      width: 60px;
      height: 60px;
      color: $accent;
    }
  }
  .mail {
    margin-top: 20px;
    font-family: 'Oswald', sans-serif;
    font-size: 1em;
    font-weight: 200;
  }
}
</style>
