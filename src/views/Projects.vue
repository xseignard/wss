<template>
  <div class="page projects">
    <Nav />
    <div class="list">
      <h1>{{ $route.name.toUpperCase() }}</h1>
      <div v-for="p in projects" class="project" :key="p.id">
        <div class="card">
          <h2 v-html="p.title" />
          <p class="date" v-html="p.date" />
          <p v-html="p.description" />
        </div>
        <VimeoPlayer :url="p.video" />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import { mapState } from 'vuex'

import Nav from '@/components/Nav.vue'
import Footer from '@/components/Footer.vue'
import VimeoPlayer from '@/components/VimeoPlayer.vue'

export default {
  name: 'projects',
  components: {
    Nav,
    Footer,
    VimeoPlayer,
  },
  mounted() {
    console.log(this.projects)
  },
  computed: {
    ...mapState({
      projects(state) {
        const route = this.$route.name
        return state.projects.filter(
          p => p.type.toLowerCase() === route.toLowerCase()
        )
      },
    }),
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
      align-items: center;
      margin-top: 30px;
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
      .card {
        margin: 0 20px;
        max-width: 30vw;
        @media (max-width: 768px) {
          align-self: flex-start;
          margin-top: 30px;
          max-width: 100vw;
        }
        h2 {
          font-size: 2em;
          margin-bottom: 10px;
        }
        /deep/ p {
          font-size: 1.2em;
        }
        .date {
          margin-bottom: 20px;
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
