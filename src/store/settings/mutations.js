export function acceptCookie(state, acceptedCookie){
  state.acceptedCookie = acceptedCookie
}

export function changeLanguage(state, language){
  state.language = language
}

export function changeToDarkMode(state, darkMode){
  state.darkMode = darkMode
}

export function save (state, settings) {
  state.acceptedCookie = settings.acceptedCookie
  state.language = settings.language
  state.darkMode = settings.darkMode
}

export function resetSettings (state) {
    state.acceptedCookie = false,
    state.darkMode = false,
    state.language = null
}