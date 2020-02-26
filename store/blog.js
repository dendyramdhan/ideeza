import axios from "axios";

export const state = () => ({
  blog: null,
  blogs: []

});

export const mutations = {
  cacheBlog(state, blog) {
    state.blog = blog;
  },
  setBlogs(state, payload) {
    state.blogs = payload;
  }
};

export const actions = {
  // getActivities({ commit }, payload) {
  //   commit("setProjects", payload);
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

  // addBlog({ commit }, payload) {
    //   return new Promise((resolve, reject) => {
    //     let authToken = window.$nuxt.$cookies.get("authToken");

    //     axios.post(process.env.base_url + "/blog/", { item: item }, { headers: { 'Authorization': `Bearer ${authToken}` } })
    //       .then((response) => {
    //         commit('setBlogs', Object.assign(item, { id: response.data.id }))
    //         resolve(response)
    //       })
    //       .catch((error) => { reject(error) })
    //   })
    // },

  // fetchProjects({ commit }) {
  //   return new Promise((resolve, reject) => {
  //     let authToken = window.$nuxt.$cookies.get("authToken");
  //     axios.get(process.env.base_url + "/project/", { headers: { Authorization: `Bearer ${authToken}` } })
  //       .then((response) => {
  //         commit('setProjects', response.data)
  //         resolve(response)
  //       })
  //       .catch((error) => { reject(error) })
  //   })
  // },

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
  getProjects(state) {
    return state.projects;
  },
};
