<template>
    <div class="toast" v-show="isShow">{{ msg }}</div>
</template>

<script>
export default {
    data() {
        return {
            msg: '',
            isShow: false,  // 默认不显示
            timerId: '',  // 记录定时器
        }
    },
    methods: {
        show(msg, time) {
            this.msg = msg
            this.isShow = true

            clearTimeout(this.timerId) // 关闭上一次未完成的定时器

            this.timerId = setTimeout(() => {
                this.isShow = false
            }, time);
        }
    },

};
</script>

<style scoped>
.toast {
    position: fixed;
    top: 50%;
    left: 50%;
    z-index: 500;
    transform: translate(-50%);
    width: 200px;
    text-align: center;
    height: 25px;
    line-height: 25px;
    color: white;
    background-color: rgb(100, 100, 100, 0.7);
}
</style>
