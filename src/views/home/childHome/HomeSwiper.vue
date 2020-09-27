<template>
    <div class="home-swiper">
        <swiper>
            <!-- swiper-item 用于存放每一张轮播图轮播的素材 -->
            <swiper-item v-for="(item, index) in banner" :key="index">
                <a :href="item.link">
                    <img :src="item.image"  />
                </a>
            </swiper-item>
        </swiper>
    </div>
</template>

<script>
import { Swiper, SwiperItem } from '../../../components/common/swiper/index'

export default {
    props: {
        banner: Array
    },
    components: {
        Swiper,
        SwiperItem
    },
};
</script>

<style scoped>
</style>
