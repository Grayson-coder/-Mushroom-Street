<template>
    <div>
        <swiper class="detail-swiper">
            <swiper-item v-for="items in banner" :key="items">
                <img :src="items" alt="">
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
    }
};
</script>

<style scoped>
.detail-swiper {
    height: 300px;
    overflow: hidden;
}
</style>
