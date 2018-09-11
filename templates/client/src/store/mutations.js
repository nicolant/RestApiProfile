export const setJWT = (state, jwt) => {
  state.jwt = jwt
}

export const clearJWT = (state) => {
  state.jwt = null
}
