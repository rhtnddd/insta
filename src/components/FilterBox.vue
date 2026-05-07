<template>
    <div class="filter-item upload-image" :class="filter" :style="{ backgroundImage: `url(${image})` }"
        @click="filterbox">
    </div>
</template>

<script>
export default {
    name: 'FilterBox',
    props: {
        image: String,
        filter: String,
    },
    methods: {
        filterbox() {
            this.emitter.emit('filterbox', this.filter);
        }
    }
};
</script>