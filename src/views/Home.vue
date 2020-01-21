<template>
  <div class="page home">
    <Nav />
    <section class="header">
      <Video />
      <Reveal tag="h1" :content="home.title" ref="title" />
      <Reveal tag="p" :content="home.tagline" :throttle="600" />
      <Scroll target=".about" />
    </section>
    <section class="about">
      <Reveal tag="div" :content="home.description" :throttle="600" />
      <VimeoPlayer :url="home.showreel" />
      <Scroll target=".projects" />
    </section>
    <section class="projects">
      <div class="row">
        <router-link
          to="documentary"
          class="cell"
          :style="{ backgroundImage: `url(${home.type_of_work.documentary})` }"
        >
          <div class="layer">
            <h2>Documentary</h2>
          </div>
        </router-link>
        <router-link
          to="brand_content"
          class="cell"
          :style="{ backgroundImage: `url(${home.type_of_work.commercial})` }"
        >
          <div class="layer">
            <h2>Brand content</h2>
          </div>
        </router-link>
      </div>
      <div class="row">
        <router-link
          to="music"
          class="cell"
          :style="{ backgroundImage: `url(${home.type_of_work.music})` }"
        >
          <div class="layer">
            <h2>Music</h2>
          </div>
        </router-link>
        <router-link
          to="art"
          class="cell"
          :style="{ backgroundImage: `url(${home.type_of_work.art})` }"
        >
          <div class="layer">
            <h2>Art</h2>
          </div>
        </router-link>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import charming from 'charming'

import Nav from '@/components/Nav.vue'
import Reveal from '@/components/Reveal.vue'
import Video from '@/components/Video.vue'
import Footer from '@/components/Footer.vue'
import Scroll from '@/components/Scroll.vue'
import VimeoPlayer from '@/components/VimeoPlayer.vue'

export default {
  name: 'home',
  components: {
    Nav,
    Reveal,
    Video,
    Footer,
    Scroll,
    VimeoPlayer,
  },
  mounted() {
    const el = this.$refs.title.$el
    charming(el)
    setTimeout(() => {
      el.querySelector('.char12').classList.add('colored')
    }, 1000)
  },
  computed: {
    ...mapState({
      home: state => state.home,
    }),
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

.home {
  flex-direction: column;
  .header,
  .about,
  .projects {
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    min-height: calc(var(--vh, 1vh) * 100);
  }
  .header {
    z-index: 1;
    h1,
    p {
      transform: translateY(20px);
      opacity: 0;
      transition: transform 0.4s, opacity 0.4s;
      &.visible {
        transform: translateY(0);
        opacity: 1;
      }
    }
    /deep/ span {
      transition: color 0.4s 0.7s;
      &.colored {
        color: $accent;
      }
    }
  }
  .about {
    div {
      width: 70%;
      @media (max-width: 768px) {
        width: 90%;
      }
      /deep/ p {
        transform: translateY(20px);
        opacity: 0;
        transition: transform 0.4s, opacity 0.4s;
        margin-bottom: 30px;
        @media (max-width: 768px) {
          margin-bottom: 0;
        }
        &:nth-child(2) {
          transition-delay: 0.2s;
        }
        &:nth-child(3) {
          transition-delay: 0.4s;
        }
        &:nth-child(4) {
          transition-delay: 0.6s;
        }
        &:nth-child(5) {
          transition-delay: 0.8s;
        }
        &:nth-child(6) {
          transition-delay: 1s;
        }
      }
      &.visible {
        /deep/ p {
          transform: translateY(0);
          opacity: 1;
        }
      }
    }
  }
  .projects {
    padding: 88px 0 0 0;
    flex-direction: column;
    min-height: 80vh;
    .row {
      display: flex;
      width: 100%;
      flex: 1;
      @media (max-width: 768px) {
        flex-direction: column;
      }
    }
    .cell {
      position: relative;
      flex: 1;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      opacity: 1;
      &:hover {
        opacity: 1;
      }
      @media (max-width: 768px) {
        min-height: 30vh;
      }
      .layer {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
        background-color: rgba($color: #000000, $alpha: 0.5);
        opacity: 0;
        transition: opacity 0.4s;
        display: flex;
        justify-content: center;
        align-items: center;
        &:hover {
          opacity: 1;
        }
        @media (max-width: 768px) {
          opacity: 1;
        }
      }
    }
  }
}
</style>
