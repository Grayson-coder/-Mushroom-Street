<template>
    <div>
        <goods-list :goods="recommendGoods" @imgLoad="imgLoad"></goods-list>
    </div>
</template>

<script>
import GoodsList from '../../../components/content/goodList/GoodList'

export default {
    components: {
        GoodsList
    },
    props: {
        recommendGoods: Array
    },
    methods: {
        imgLoad() {
            this.$emit('imgLoad')
        }
    },
};
</script>

<style scoped>

</style>
