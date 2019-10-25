export const state = () => ({
  cartStep: 0
});

export const mutations = {
  incrementStep (state) {
    if(state.cartStep < 6){
      state.cartStep = state.cartStep + 1;
    }
  },
  decrementStep (state) {
    if(state.cartStep > 0){
      state.cartStep = state.cartStep - 1;
    }
  }
};
