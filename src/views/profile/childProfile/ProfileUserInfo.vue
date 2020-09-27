<template>
    <div class="user-info">
        <div class="user-logo">
            
        </div>

        <div class="user-login">
            <span>登录/注册</span>
            <p>
                <img src="../../../assets/img/profile/phone.svg" alt="">
                <span>暂无绑定手机号</span>
            </p>
        </div>
    </div>
</template>

<script>
export default {

};
</script>

<style scoped>
.user-info {
    display: flex;
    height: 90px;
    padding: 10px;
    background-color: rgb(255,129,152);
}

.user-info .user-logo {
    align-self: center;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: white;
}

.user-info .user-login {
    align-self: center;
    color: white;
    margin-left: 10px;
}

.user-info .user-login p {
    margin-top: 5px;
    padding-left: 13px;
    font-size: 13px;
}

.user-info .user-login p img {
    width: 20px;
    height: 20px;
    vertical-align: middle;
}

</style>
