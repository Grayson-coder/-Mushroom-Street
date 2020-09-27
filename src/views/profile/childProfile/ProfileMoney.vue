<template>
    <div class="user-money">
        <div>
            <span class="number">0.00</span>元
            <p>我的余额</p>
        </div>
        <div>
            <span class="number">0</span>个
            <p>我的优惠</p>
        </div>
        <div>
            <span class="number">0</span>分
            <p>我的积分</p>
        </div>
    </div>
</template>

<script>
export default {

};
</script>

<style scoped>
.user-money {
    display: flex;
    height: 90px;
    background-color: white;
    border-bottom: 12px solid rgba(100, 100, 100, .1);
}

.user-money>div {
    height: 100%;
    flex: 1;
    text-align: center;
    padding: 25px;
    border-right: 1px solid #eaeaea;
}

.number {
    color: red;
    font-size: 20px;
}

.user-money>div p {
    margin-top: 5px;
    font-size: 12px;
}

</style>
