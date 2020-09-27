<template>
    <div class="nav-bar">
        <slot>默认值</slot>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
};
</script>

<style scoped>
.nav-bar {
    height: 44px;
    line-height: 44px;
    text-align: center;
    box-shadow: 0 1px 1px rgba(100, 100, 100, 0.1);
    background-color: var(--color-tint);
    color: white;
}
</style>
