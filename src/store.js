import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    text: 'stored text',
    num: 1
  },
  getters: {
    getText: state => state.text,
    getNum: state => state.num
  },
  mutations: {
    changeText(state, payload) {
      state.text = payload
    },
    plusNum(state) {
      state.num++
    },
    addNum(state, payload) {
      state.num = state.num + payload
    } 
  },
  actions: {
    changeTextAsync({ commit }, { text }) {
      setTimeout(() => {
        commit('changeText', text)
      }, 1000)
    },
    plusNumAsync({ commit }) {
      setTimeout(() => {
        commit('plusNum')
      }, 1000)
    },
    addNumAsync({ commit }, { num }) {
      setTimeout(() => {
        commit('addNum', num)
      }, 1000)
    }
  }
})
