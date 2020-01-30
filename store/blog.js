export const state = () => ({
    blog: null
  });
  
  export const mutations = {
    cacheBlog(state,blog){
        state.blog = blog
    }
  };
  