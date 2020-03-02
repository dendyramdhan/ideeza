export const state = () => ({
  cartStep: -1,
  manufacturers: [],
  checkedproducts: [],
  totalprice: 0,
});

export const mutations = {
  incrementStep(state) {
    if (state.cartStep < 7) {
      state.cartStep = state.cartStep + 1;
    }
  },
  decrementStep(state) {
    if (state.cartStep > 0) {
      state.cartStep = state.cartStep - 1;
    }
  },
  set(state, { position }) {
    state.cartStep = position;
  },
  checkedproduct(state, value) {

    state.checkedproducts = value;

  },

  checkedmanufacturers(state, value) {

    state.manufacturers = value;

  },

  totalPrice(state, value) {
    state.totalprice = value;
  }

};
