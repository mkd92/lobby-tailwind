import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      user : ''
    }),
    getters:() => ({
      user(state){
        return state.user
      }
    }),
    mutations: ({
      setUser(state, payload){
        state.user = payload
      }
    }),
    actions: ({
      signUserUp({commit},payload){
        this.$fireAuth.createUserWithEmailAndPassword(payload.email,payload.password).then(
          user => {
            const newUser = {
              id: user.uid,

            }
            commit('setUser',newUser)
          }
        ).catch(
          error => {
            console.log(error)
          }
        )
      }
    })
  })
}

export default createStore