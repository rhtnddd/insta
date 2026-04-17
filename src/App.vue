<template>
  <div>
    <div class="header">
      <ul class="header-button-left">
        <li>Cancel</li>
      </ul>
      <ul class="header-button-right">
        <li v-if="step == 1" @click="step++">Next</li>
        <li v-if="step == 2" @click="publish">발행</li>
      </ul>
      <img src="./assets/logo.svg" class="logo" />
    </div>

    <Container :posts="posts" :step="step" :image="image" @publish="text = $event" @selectedFilter="selectedFilter = $event" />
    <button @click="more">더보기</button>

    <div class="footer">
      <ul class="footer-button-plus">
        <input @change="upload" type="file" id="file" class="inputfile" />
        <label for="file" class="input-plus">+</label>
      </ul>
    </div>
  </div>
</template>

<script>
import Container from './components/Container.vue';
import posts from './Post.js';
import axios from 'axios';

export default {
  name: 'App',
  components: {
    Container
  },
  data() {
    return {
      step: 0,
      moreCount: 0,
      posts,
      image: '',
      text: '',
      selectedFilter: '',
    };
  },
  methods: {
    more() {
      const url = `https://qkrwpgus.github.io/vue/more${this.moreCount}.json`;
      axios.get(url).then((result) => {
        this.posts.push(...result.data);
        this.moreCount += 1;
      });
    },
    upload(e) {
      let 파일 = e.target.files;
      console.log(파일);
      console.log(파일[0]);
      let url = URL.createObjectURL(파일[0]);
      console.log(url);
      this.image = url;
      this.step++;
    },
    publish() {
      var 내게시물 = {
        name: "Kim Hyun",
        userImage: "https://picsum.photos/100?random=3",
        postImage: this.image,
        likes: 36,
        date: "May 15",
        liked: false,
        content: this.text,
        filter: this.selectedFilter
      };
      this.posts.unshift(내게시물);
      this.step = 0;
    }
  }
};
</script>