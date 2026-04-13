<template>
    <div>
        <Post :post="p" v-for="(p, i) in Posts" :key="i" />
    </div>
</template>

<script>
import Post from './Post.vue';
export default {
    name: 'Container',
    components: {
        Post
    },
    props:{
        Posts : Array
    }
}
</script>