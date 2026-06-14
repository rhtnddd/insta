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
    <button @click="나이()">{{ age }}</button>
    <button @click="나이넣기(message)">버튼2</button>
    <input v-model="message" />
    <Container :posts="posts" :step="step" :image="image" :filter="filterbox" />
    <button @click="more()">더보기</button>

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
import { mapState, mapMutations, mapActions } from 'vuex';

export default {
  name: 'App',
  components: {
    Container
  },
  data() {
    return {
      step: 0,
      image: '',
      content: '',
      filterbox: '',
    };
  },
  mounted() {
    this.emitter.on('filterbox', (filterbox) => {
      this.filterbox = filterbox;
    });

    this.emitter.on('write', (content) => {
      this.content = content;
    })
  },
  computed: {
    ...mapState(['posts', 'age']),
  },
  methods: {
    ...mapMutations(['나이', '나이넣기', 'publishPost']),
    ...mapActions(['more']),
    upload(e) {
      let 파일 = e.target.files;
      let url = URL.createObjectURL(파일[0]);
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
        content: this.content,
        filter: this.filterbox
      };
      this.publishPost(내게시물);
      this.step = 0;
    }
  }
};
</script>
