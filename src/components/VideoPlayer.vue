<template>
  <iframe
    v-if="isYoutube()"
    :src="
      'https://www.youtube-nocookie.com/embed/' +
        getYoutubeId(url) +
        '?rel=0&modestbranding=1&iv_load_policy=3&showinfo=0'
    "
    frameborder="0"
    allow="autoplay; encrypted-media"
    allowfullscreen
  ></iframe>
  <iframe
    v-else
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
    isYoutube() {
      return this.url.includes('youtube')
    },
    getVimeoId() {
      return this.url.substr(this.url.lastIndexOf('/') + 1)
    },
    getYoutubeId() {
      const start = this.url.lastIndexOf('watch?v=')
      const end = this.url.includes('&t=')
        ? this.url.lastIndexOf('&t=')
        : this.url.length
      const id = this.url.substring(start + 8, end)
      return id
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
