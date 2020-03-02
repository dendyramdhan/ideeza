export const state = () => ({
  loaderFlag: true,
})

export const mutations = {
  loader_flag_change1(state) {
    state.loaderFlag = false ;
  },
  loader_flag_change2(state) {
    state.loaderFlag = true ;
  },
  selectedkeyChange(state, value) {
    console.log('current key:=>', value)
    state.offset = value
  },
}

// export const actions = {
//   add ({ commit }) {
//     commit('add') 
//   }
// }