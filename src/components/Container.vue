<template>
    <div class="container">
        <div v-if="step == 0">
            <Post v-for="(post, index) in posts" :key="index" :post="post" />
        </div>

        <!-- 필터선택페이지 -->
        <div v-if="step == 1">
            <div class="upload-image" :class="filter" :style="{ backgroundImage: `url(${image})` }"></div>
            <div class="filters">
                <FilterBox :image="image" v-for="i, j in 필터들" :key="i" :filter="i" @filterbox="filter = $event; $emit('selectedFilter', $event)">
                </FilterBox>
            </div>
        </div>

        <!-- 글작성페이지 -->
        <div v-if="step == 2">
            <div class="upload-image" :class="filter" :style="{ backgroundImage: `url(${image})` }"></div>
            <div class="write">
                <textarea class="write-box" @input="$emit('publish', $event.target.value)"> write!</textarea>
            </div>
        </div>
    </div>

</template>

<script>
import Post from './Post.vue';
import FilterBox from './FilterBox.vue';

export default {
    name: 'Container',
    components: {
        Post,
        FilterBox
    },
    props: {
        step: Number,
        posts: Array,
        image: String,
    },
    data() {
        return {
            필터들: ["aden", "_1977", "brannan", "brooklyn", "clarendon", "earlybird", "gingham", "hudson",
                "inkwell", "kelvin", "lark", "lofi", "maven", "mayfair", "moon", "nashville", "perpetua",
                "reyes", "rise", "slumber", "stinson", "toaster", "valencia", "walden", "willow", "xpro2"],
            filter: "",
        };
    },
    filterbox() {

    }
};
</script>