<template>
  <!-- <iframe
    src="https://player.vimeo.com/video/252334051?color=ff4d4d&title=0&byline=0&portrait=0"
    width="640"
    height="360"
    frameborder="0"
    allow="autoplay; fullscreen"
    allowfullscreen
  ></iframe> -->
  <iframe
    :src="
      'https://player.vimeo.com/video/' +
        getVimeoId(url) +
        '?color=ff4d4d' +
        '&title=0&byline=0&portrait=0&dnt=1'
    "
    frameborder="0"
    webkitallowfullscreen
    mozallowfullscreen
    allowfullscreen
  ></iframe>
</template>

<script>
export default {
  props: {
    url: String,
  },
  methods: {
    getVimeoId() {
      return this.url.substr(this.url.lastIndexOf('/') + 1)
    },
  },
}
</script>

<style scoped lang="scss">
@import '../assets/_variables';

iframe {
  width: 50vw;
  height: 45vh;
  object-fit: cover;
  @media (max-width: 768px) {
    width: 100%;
    height: 35vh;
  }
}
</style>
