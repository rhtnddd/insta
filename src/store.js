import { createStore } from "vuex";
import posts from "./Post.js";

const store = createStore({
  state() {
    return {
      posts: posts,
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
});

export default store;
