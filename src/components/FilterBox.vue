<template>
    <div class="filter-item upload-image" :class="filter" :style="{ backgroundImage: `url(${image})` }"
        @click="$emit('filterbox', filter)">{{ filter }}</div>
</template>

<script>
export default {
    name: 'FilterBox',
    props: {
        image: String,
        filter: String,
    }
};
</script>