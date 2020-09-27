<template>
    <div class="user-list">
        <div class="top">
            <div>
                <img src="../../../assets/img/profile/message.svg" />
                <span>我的消息</span>
            </div>
            <div>
                <img src="../../../assets/img/profile/shopping.svg" />
                <span>积分商城</span>
            </div>
            <div>
                <img src="../../../assets/img/profile/vip.svg" />
                <span>会员卡</span>
            </div>
        </div>
        <div class="bottom">
            <div>
                <img src="../../../assets/img/profile/cart.svg" />
                <span>我的购物车</span>
            </div>
            <div>
                <img src="../../../assets/img/profile/pointer.svg" />
                <span>下载购物车APP</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {

};
</script>

<style scoped>
.user-list .top {
    border-bottom: 13px solid #eaeaea;
}

.user-list .top div,  .user-list .bottom div{
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid #eaeaea;
    padding-left: 30px;
}

.user-list img {
    width: 25px;
    height: 25px;
    vertical-align: middle;
    margin-right: 12px;
}
</style>
