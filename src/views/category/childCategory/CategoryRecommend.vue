<template>
    <div class="recommend" v-show="recommendList">
        <a :href="items.link" v-for="(items, index) in recommendList" :key="index">
            <img :src="items.image" @load="imgLoad" />
            <p>{{ items.title }}</p>
        </a>
    </div>
</template>

<script>
export default {
    props: {
        recommendList: Array
    },
    methods: {
        imgLoad() {
            this.$emit('imgLoad')
        }
    },
};
</script>

<style scoped>
.recommend {
    display: flex;
    flex-wrap: wrap;
}

.recommend a {
    padding: 14px 14px 7px;
}

.recommend a img {
    width: 65px;
    height: 65px;
}

.recommend a p {
    text-align: center;
    font-size: 14px;
    width: 65px;
}
</style>
