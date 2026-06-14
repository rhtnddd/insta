import { createStore } from "vuex";
import posts from "./Post.js";
import axios from "axios";

const store = createStore({
  state() {
    return {
      posts: posts,
      moreCount: 0,
      age: 0,
    };
  },
  mutations: {
    likeToggle(state, index) {
      if (state.posts[index].liked == false) {
        state.posts[index].likes++;
        state.posts[index].liked = true;
      } else {
        state.posts[index].likes--;
        state.posts[index].liked = false;
      }
    },
    setMorePosts(state, data) {
      state.posts.push(...data);
    },
    publishPost(state, post) {
      state.posts.unshift(post);
    },
    나이(state) {
      state.age++;
    },
    나이넣기(state, input) {
      state.age = input;
    },
  },
  actions: {
    more(content) {
      const url = `https://qkrwpgus.github.io/vue/more${content.state.moreCount}.json`;
      axios.get(url).then((result) => {
        content.commit("setMorePosts", result.data);
        content.state.moreCount += 1;
      });
    },
  },
});

export default store;
