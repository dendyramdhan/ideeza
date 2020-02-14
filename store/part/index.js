export const state = () => ({
    selected_part: null
})

export const mutations = {
    selectPart(state, payload) {
        state.selected_part = payload
    }
}

// export const actions = {
//     add ({ commit }) {
//         commit('add') 
//     }
// }