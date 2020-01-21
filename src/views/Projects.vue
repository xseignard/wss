<template>
  <div class="page projects">
    <Nav />
    <div class="list">
      <h1>{{ getTitle() }}</h1>
      <div v-for="p in projects" class="project" :key="p.id">
        <div class="card">
          <Reveal tag="h2" :content="p.title" />
          <Reveal tag="p" :content="p.date" :throttle="600" class="date" />
          <Reveal tag="p" :content="p.description" :throttle="600" />
        </div>
        <VimeoPlayer :url="p.video" />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import compareDesc from 'date-fns/compareDesc'
import parse from 'date-fns/parse'

import Nav from '@/components/Nav.vue'
import Reveal from '@/components/Reveal.vue'
import Footer from '@/components/Footer.vue'
import VimeoPlayer from '@/components/VimeoPlayer.vue'

export default {
  name: 'projects',
  components: {
    Nav,
    Reveal,
    Footer,
    VimeoPlayer,
  },
  computed: {
    ...mapState({
      projects(state) {
        const route = this.$route.name
        const result = state.projects
          .filter(p => p.type.toLowerCase() === route.toLowerCase())
          .sort((a, b) => {
            const dateA = parse(a.date, 'dd/MM/yyyy', new Date())
            const dateB = parse(b.date, 'dd/MM/yyyy', new Date())
            return compareDesc(dateA, dateB)
          })
        return result
      },
    }),
  },
  methods: {
    getTitle() {
      return this.$route.name.toUpperCase().replace('_', ' ')
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../assets/_variables';

.projects {
  flex-direction: column;
  .list {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 80vh;
    h1 {
      @media (max-width: 768px) {
        align-self: flex-start;
        margin: 20px 0 0 20px;
      }
    }
    .project {
      display: flex;
      margin-top: 120px;
      width: 90vw;
      @media (max-width: 768px) {
        margin-top: 0px;
        flex-direction: column;
        width: 100vw;
      }
      &:nth-child(odd) {
        flex-direction: row-reverse;
        @media (max-width: 768px) {
          flex-direction: column;
          .card {
            align-self: flex-end;
            text-align: right;
          }
        }
      }
      iframe {
        flex: 1;
        @media (max-width: 768px) {
          flex: unset;
        }
      }
      .card {
        margin: 0 20px;
        // max-width: 30vw;
        flex: 1;
        @media (max-width: 768px) {
          align-self: flex-start;
          margin-top: 30px;
          max-width: 100vw;
        }
        h2 {
          color: $accent;
          font-size: 2em;
          margin-bottom: 10px;
          transform: translateY(20px);
          opacity: 0;
          transition: transform 0.4s, opacity 0.4s;
          &.visible {
            transform: translateY(0);
            opacity: 1;
          }
        }
        p {
          transform: translateY(20px);
          opacity: 0;
          transition: transform 0.4s, opacity 0.4s;
          &.visible {
            transform: translateY(0);
            opacity: 1;
          }
        }
        /deep/ p,
        /deep/ a {
          font-size: 1.1em;
          line-height: 1.5em;
        }
        .date {
          margin-bottom: 20px;
          transform: translateY(20px);
          opacity: 0;
          transition: transform 0.4s, opacity 0.4s;
          &.visible {
            transform: translateY(0);
            opacity: 1;
          }
        }
      }
      &::after {
        @media (max-width: 768px) {
          display: block;
          content: '';
          width: 40%;
          height: 4px;
          background-color: $white;
        }
      }
    }
  }
}
</style>
