import vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

export default ({ app, router, Vue }) => {
  Vue.use(vuex)
  const store = new vuex.Store({
    plugins: [createPersistedState({
      //getState: (key) => Cookies.getJSON(key),
      //setState: (key,state) => Cookies.set(key, state, { expires: 3, secure: true }),
      storage: window.sessionStorage,
    })],
    state: {
      firstName: null,
      lastName: null,
      email: null,
      passwordHash: null,
      birthday: null,
    },
    mutations: {
      save (state, user) {
        state.firstName = user.firstName
        state.lastName = user.lastName
        state.email = user.email
        state.passwordHash = user.passwordHash
        state.birthday = user.birthday
        console.log(state)
      }
    }
  })
  Vue.prototype.$store = store
}
