<template>
    <div class="recommend">
        <!--遍历推荐区相关数据-->
        <div v-for="(items, index) in recommend" :key="index" class="recommend-item">
            <a :href="items.link">
                <img :src="items.image"  />
                <p>{{ items.title }}</p>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        recommend: Array
    },
};
</script>

<style scoped>
.recommend {
    display: flex;
    padding: 10px 0 20px;
    background-color: white;

    border-bottom: 8px solid #eee;
}

.recommend .recommend-item {
    flex: 1;
    text-align: center;
}

.recommend .recommend-item img {
    width: 65px;
    height: 65px;
}

.recommend .recommend-item p {
    margin-top: 8px;
    font-size: 12px;
}
</style>
