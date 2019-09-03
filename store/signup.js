/* eslint-disable */
import * as firebase from 'firebase'
const state = () => ({
  user: null
})
const getters = () => ({
  user(state) {
    return state.user
  }
})
const mutations = {
  setUser(state, payload) {
    state.user = payload
  }
}
const actions = {
  signUserUp({ commit }, payload) {
    firebase
      .auth()
      .createUserWithEmailAndPassword(payload.email, payload.password)
      .then(function() {
        const newUser = { email: payload.email }
        commit('setUser', newUser)
      })
      .catch(function(error) {
        console.log(error)
      })
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
