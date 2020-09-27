<template>
    <div>
        <!-- 尺码参数 -->
        <div class="good-params">
            <div v-for="(items, index) in params" :key="index" class="row">
                <span v-for="(items, index) in items" :key="index" class="item">
                    {{ items }}
                </span>
            </div>
        </div>

        <!-- 控制其他参数是否展示 -->
        <p class="all-params" @click="seeMore">{{ isShow ? '收起' : '查看全部参数'}}</p>

        <!-- 其他参数 -->
        <div class="other-params" v-if="isShow">
            <div v-for="(items, index) in otherParams" :key="index" class="row">
                <span class="key">{{ items.key }}</span>
                <span class="value">{{ items.value }}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            params: [], // 尺码参数数据
            otherParams: [],  // 其他参数数据
            isShow: false  // 控制其他参数是否展示
        }
    },
    props: {
        goodParams: Object
    },
    watch: {
        goodParams(val) {
            this.params = val.rule.tables[0]
            this.otherParams = val.info.set
        }
    },
    methods: {
        seeMore() {
            this.isShow = !this.isShow
            this.$emit('refresh')
        }
    },
};
</script>

<style scoped>
.good-params, .other-params {
    background-color: white;
    font-size: 14px;
    color: black;
}

.good-params .row {
    display: flex;
    height: 40px;
    line-height: 40px;
    padding-left: 15px;
    border-bottom: 1px solid rgb(100, 100, 100, .1);
}
.good-params .row .item {
    flex: 1;
}

.other-params .row {
    display: flex;
    line-height: 40px;
    padding-left: 15px;
    border-bottom: 1px solid rgb(100, 100, 100, .1);
}
.other-params .row .key {
    flex: 1.5;
    margin-right: 50px;
}

.other-params .row .value {
    flex: 4;
    line-height: 40px;
    color: deeppink;
    font-size: 12px;
}

.all-params {
    height: 40px;
    line-height: 40px;
    color: black;
    padding-left: 5px;
    border-bottom: 1px solid rgb(100, 100, 100, .1);
    background-color:rgb(100, 100, 100, .1) ;
    font-size: 14px;
}
</style>
