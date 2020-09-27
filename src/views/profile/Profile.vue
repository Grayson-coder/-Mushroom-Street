<template>
    <div>
        <nav-bar>购物商城</nav-bar>
        <!-- 用户信息 -->
        <profile-user-info />
        <!-- 用户余额、优惠、积分等数据 -->
        <profile-money />
        <!-- 个人中心列表 --> 
        <profile-list />
    </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'

import ProfileUserInfo from './childProfile/ProfileUserInfo'
import ProfileMoney from './childProfile/ProfileMoney'
import ProfileList from './childProfile/ProfileList'

export default {
    components: {
        NavBar,
        ProfileUserInfo,
        ProfileMoney,
        ProfileList
    },
    
};
</script>

<style scoped>

</style>
