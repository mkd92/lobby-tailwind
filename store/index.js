import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      isSignupOpen: false,
      isSigninOpen: false
    }),
    mutations: {
      invertIsSignupOpen (state) {
        state.isSignupOpen = !state.isSignupOpen
      },
      invertIsSigninOpen (state) {
        state.isSigninOpen = !state.isSigninOpen
      }
    }
  })
}

export default createStore