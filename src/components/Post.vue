<template>
  <div class="post">
    <div class="post-header">
      <div class="profile" :style="{ backgroundImage: `url(${post.userImage})` }"></div>
      <span class="profile-name">{{ post.name }}</span>
    </div>

    <div class="post-body">
      <div @click="likeToggle(index)" class="post-image" :class="post.filter"
        :style="{ backgroundImage: `url(${post.postImage})` }"></div>
    </div>

    <div class="post-content">
      <p>{{ post.likes }} Likes</p>
      <p>
        <strong>{{ post.name }}</strong>
        {{ post.content }}
      </p>
      <p class="date">{{ post.date }}</p>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
  name: 'Post',
  props: {
    post: Object,
    index: Number,
  },
  methods: {
    ...mapMutations(['likeToggle', 'setMore'])
  }
};
</script>
