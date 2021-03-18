export function save (state, user) {
  state.ID = user.ID
  state.firstName = user.firstName
  state.lastName = user.lastName
  state.email = user.email
  state.passwordHash = user.passwordHash
  state.street = user.street,
  state.houseNumber = user.houseNumber,
  state.postalCode= user.postalCode,
  state.city =  user.city,
  state.isAuthenticated = true
}
export function authenticateUser(state, authenticated){
  state.isAuthenticated = authenticated
}
export function resetState (state){
  state.ID = null
  state.firstName = null
  state.lastName = null
  state.email = null
  state.passwordHash = null
  state.street = null,
  state.houseNumber = null,
  state.postalCode= null,
  state.city =  null,
  state.isAuthenticated = false
}