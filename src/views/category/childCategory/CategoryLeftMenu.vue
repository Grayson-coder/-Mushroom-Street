<template>
    <div class="left-menu">
        <scroll class="scroll" ref="scroll">
            <ul>
                <li
                    v-for="(items, index) in category"
                    :key="index"
                    @click="itemClick(index)"
                    :class="{active: currentIndex === index}"
                >{{ items.title }}</li>
            </ul>
        </scroll>
        
    </div>
</template>

<script>
import Scroll from 'components/common/scroll/Scroll'
export default {
    data() {
        return {
            currentIndex: 0
        }
    },
    props: {
        category: Array,
    },
    mounted() {
        // 延迟刷新
        setTimeout(() => {
            this.$refs.scroll.BScroll.refresh()
        }, 500);
    },

    components: {
        Scroll
    },
    methods: {
        itemClick(index) {
            this.currentIndex = index
            this.$emit('menuClick', index)
        }
    },
};
</script>

<style scoped>
.left-menu {
    position: fixed;
    left: 0;
    height: 100vh;
    width: 25vw;
    background-color: whitesmoke;
}

.left-menu ul li {
    width: 100px;
    height: 45px;
    line-height: 45px;
    text-align: center;
    font-size: 14px;
}

.left-menu ul li.active {
    border-left: 3px solid deeppink;
    background-color: white;
    color: deeppink;
}

.left-menu .scroll {
    height: calc(100vh - 49px - 44px);
}
</style>
