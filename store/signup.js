/* eslint-disable */
import * as firebase from 'firebase'
import fireDb from '~/plugins/firebase'

const state = () => ({
  user: {}
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
        let setuser = firebase.auth().currentUser
        if (setuser !== null && setuser !== undefined) {
          const newUser = {
            email: setuser.email,
            name: setuser.displayName,
            photoURL: setuser.photoURL,
            uid: setuser.uid
          }
          commit('setUser', newUser)
          const ref = fireDb
            .collection('users')
            .doc(newUser.uid)
            .set({
              email: newUser.email
            })
            .then(function() {
              window.alert('success')
            })
            .catch(function(error) {
              console.log(error)
            })
        }
      })
      .catch(function(error) {
        console.log(error)
      })
  },
  signUserIn({ commit }, payload) {
    firebase
      .auth()
      .signInWithEmailAndPassword(payload.email, payload.password)
      .then(function() {
        let setuser = firebase.auth().currentUser
        if (setuser !== null && setuser !== undefined) {
          const newUser = {
            email: setuser.email,
            name: setuser.displayName,
            photoURL: setuser.photoURL,
            uid: setuser.uid
          }
          commit('setUser', newUser)
        }
      })
      .catch(function(error) {
        console.log(error)
      })
  },
  createUserInDb({ commit }) {},
  signUserOut({ commit }) {
    firebase
      .auth()
      .signOut()
      .then(function() {
        const resetUser = {}
        commit('setUser', resetUser)
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
