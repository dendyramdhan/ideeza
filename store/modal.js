export const state = () => ({
  signUpModal: false,
  userType: null,
  userTypeModal: false,
  creativeSignup: false,
  manufacturerSignup: false,
  manufacturerFormStep: 1,

})

export const mutations = {
  setSignUpModal(state, value) {
    state.signUpModal = value
  },
  setUserType(state, value) {
    state.userType = value
  },
  setUserTypeModal(state, value) {
    state.userTypeModal = value
  },
  setCreativeSignUp(state, value) {
    state.creativeSignup = value
  },
  setManufacturerSignUp(state, value) {
    state.manufacturerSignup = value
  },
  setManufacturerFormStep(state, value) {
    state.manufacturerFormStep = value
  },
}

export const getters = {
  getSignUpModal (state) {
    return state.signUpModal
  },
  getUserType (state) {
    return state.userType
  },
  getUserTypeModal (state) {
    return state.userTypeModal
  },
  getCreativeSignUp (state) {
    return state.creativeSignup
  },
  getManufacturerSignUp (state) {
    return state.manufacturerSignup
  },
  getManufacturerFormStep (state) {
    return state.manufacturerFormStep
  },
}
