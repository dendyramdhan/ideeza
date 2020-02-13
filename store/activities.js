import axios from "axios";
export const state = () => ({
  activities: [],

});

export const mutations = {
  setActivities(state, payload) {
    state.activities = payload
  },
};

export const actions = {
  // getActivities({ commit }, payload) {
  //   commit("setActivities", payload);
  // },

  // async createCompanyData({ commit }, payload) {
  //   const checkToken = localStorage.getItem('token');
  //   if (checkToken) {
  //     const authToken = 'Bearer '.concat(checkToken);
  //     const response = await Axios.post(`${process.env.apiUrl}/api/companyData`, payload, {
  //       headers: {
  //         Authorization: authToken,
  //       }
  //     });
  //   }
  // }

  // addItem({ commit }, item) {
  //   return new Promise((resolve, reject) => {
  //     axios.post("/api/data-list/products/", { item: item })
  //       .then((response) => {
  //         commit('ADD_ITEM', Object.assign(item, { id: response.data.id }))
  //         resolve(response)
  //       })
  //       .catch((error) => { reject(error) })
  //   })
  // },
  fetchActivities({ commit }) {
    return new Promise((resolve, reject) => {
      axios.get("/api/data-list/products")
        .then((response) => {
          commit('setActivities', response.data)
          resolve(response)
        })
        .catch((error) => { reject(error) })
    })
  },

  // updateItem({ commit }, item) {
  //   return new Promise((resolve, reject) => {
  //     axios.post(`/api/data-list/products/${item.id}`, { item: item })
  //       .then((response) => {
  //         commit('UPDATE_PRODUCT', response.data)
  //         resolve(response)
  //       })
  //       .catch((error) => { reject(error) })
  //   })
  // },
  // removeItem({ commit }, itemId) {
  //   return new Promise((resolve, reject) => {
  //     axios.delete(`/api/data-list/products/${itemId}`)
  //       .then((response) => {
  //         commit('REMOVE_ITEM', itemId)
  //         resolve(response)
  //       })
  //       .catch((error) => { reject(error) })
  //   })
  // },
};

export const getters = {
  getActivities(state) {
    return state.activities;
  },
};
