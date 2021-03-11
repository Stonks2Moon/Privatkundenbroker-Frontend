export function save (state, user) {
  state.firstName = user.firstName
  state.lastName = user.lastName
  state.gender = user.gender
  state.email = user.email
  state.passwordHash = user.passwordHash
  state.birthday = user.birthday
  state.isAuthenticated = true
}
export function authenticateUser(state, authenticated){
  state.isAuthenticated = authenticated
}
export function resetState (state){
  state.firstName = null
  state.lastName = null
  state.gender = null
  state.email = null
  state.passwordHash = null
  state.birthday = null
  state.isAuthenticated = false
}