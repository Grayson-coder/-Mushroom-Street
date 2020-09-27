<template>
    <div class="tab-control">
        <div
            v-for="(items, index) in titles" :key="items"
            class="tab-control-item" :class="{active: currentIndex === index}"
            @click="itemClick(index)"
        >
            <span>{{ items }}</span>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            currentIndex: 0
        }
    },
    props: {
        titles: {
            type: Array,
            default() {
                return ['默认值1', '默认值2', '默认值3']
            }
        }
    },
    methods: {
        itemClick(index) {
            this.currentIndex = index
            this.$emit('itemClick', index)
        }
    },
};
</script>

<style scoped>
.tab-control {
    display: flex;
    height: 40px;
    line-height: 40px;
    background-color: white;
}

.tab-control .tab-control-item {
    flex: 1;
    text-align: center;
    font-size: 15px;
}

.tab-control .active {
    color: var(--color-high-text);
}

.tab-control .active span {
    padding-bottom: 5px;
    border-bottom: 3px solid var(--color-tint);
}
</style>
