<template>
  <div class="header">
    <ul class="header-button-left">
      <li>Cancel</li>
    </ul>
    <ul class="header-button-right">
      <li>Next</li>
    </ul>
    <img src="./assets/logo.svg" class="logo" />
  </div>

  <Container :Posts="Posts" />

  <button @click="more">더보기</button>

  <div class="footer">
    <ul class="footer-button-plus">
      <input type="file" id="file" class="inputfile" />
      <label for="file" class="input-plus">+</label>
    </ul>
  </div>
</template>
<script>
import Container from "./components/Container.vue";
import PostData from "./Post";
import axios from 'axios';

export default {
  name: "App",
  components: {
    Container,
  },
  data() {
    return {
      Posts: PostData,
      moreCount: 0,
    };
  },
  methods: {
    more() {
      axios.get(`https://qkrwpgus.github.io/vue/more${this.moreCount}.json`)
        .then((result) => {
          this.Posts.push(...result.data);
          this.moreCount++;
        })
        .catch((error) => {
          console.error("게시물을 가져오는데 실패했습니다.", error);
        });
    }
  }
};
</script>
