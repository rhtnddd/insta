import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      age: 0,
    };
  },
  mutations: {
    나이(state) {
      state.age++;
    },
    나이넣기(state, input) {
      state.age = input;
    },
  },
});

export default store;
