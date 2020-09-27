<template>
    <div class="comment">
        <!-- 标题 -->
        <div class="title">
            <span>用户评价 ({{ commentCount }})</span>
            <span>更多</span>
        </div>

        <!-- 用户评论内容 -->
        <div class="comment-info">
            <!-- 用户信息 -->
            <p class="user-info">
                <img :src="commentData.user && commentData.user.avatar" alt />
                <span>{{ commentData.user && commentData.user.uname }}</span>
            </p>
            <!-- 评论内容 -->
            <p class="comment-content">{{ commentData.content }}</p>
            <!-- 评论时间 -->
            <p class="comment-time">
                <!-- 需要对时间戳格式化，这里借助第三方包 -->
                <span>{{ commentData.created | showDate }}</span>
                <span>{{ commentData.style }}</span>
            </p>
        </div>
    </div>
</template>

<script>
// 引入格式化时间的包
import dateFormat from 'dateformat'

export default {
    data() {
        return {
            commentCount: '',  // 用户评价数量
            commentData: '',  // 用户评价数据
        }
    },
    props: {
        commentInfo: Object
    },
    watch: {
        commentInfo(val) {
            // 初始化数据
            this.commentCount = val.cRate
            this.commentData = val.list[0]
        }
    },
    filters: {
        showDate(date) {
            return dateFormat(date * 1000, 'yyyy-mm-dd HH:MM:ss')
        }
    }
};
</script>

<style scoped>
.comment {
    margin-top: 15px;
    padding: 10px;
    border-top: 5px solid rgb(100, 100, 100, 0.1);
}
.comment .title {
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    height: 40px;
    line-height: 40px;
    color: black;
    border-bottom: 1px solid rgb(100, 100, 100, 0.1);
}

.comment .comment-info .user-info {
    margin: 10px 0;
}

.comment .comment-info .user-info img {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    vertical-align: middle;
}

.comment .comment-info .user-info span {
    margin-left: 10px;
    font-size: 13px;
    color: black;
}

.comment-content,
.comment-time {
    font-size: 12px;
    margin-bottom: 10px;
}
.comment-time span {
    margin-right: 8px;
}
</style>
