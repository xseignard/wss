import Vue from 'vue'
import Vuex from 'vuex'

const API = 'https://wp.whysoseriousproductions.fr/wp-json/wp/v2'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    projects: [],
    loading: true,
    home: {},
  },
  mutations: {
    GET_PROJECTS(state, projects) {
      state.projects = projects
    },
    GET_HOME(state, home) {
      state.home = home
    },
    SET_LOADING(state, loading) {
      state.loading = loading
    },
  },
  actions: {
    async getProjects({ commit }) {
      const res = await fetch(`${API}/project?per_page=100`)
      const projects = await res.json()
      commit(
        'GET_PROJECTS',
        projects
          .map(project => {
            return {
              id: project.id,
              title: project.title.rendered,
              ...project.acf,
            }
          })
          .sort((a, b) => {
            const d = new Date(a.date)
            const t = new Date(b.date)
            return t - d
          })
      )
    },
    async getHome({ commit }) {
      const res = await fetch(`${API}/pages?slug=home`)
      const home = await res.json()
      commit('GET_HOME', {
        ...home[0].acf,
      })
    },
    async getData({ commit }) {
      commit('SET_LOADING', true)
      await Promise.all([
        this.dispatch('getProjects'),
        this.dispatch('getHome'),
      ])
      setTimeout(() => commit('SET_LOADING', false), 2500)
    },
  },
})
