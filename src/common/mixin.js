import BackTop from 'components/common/backTop/BackTop'

// 定义一个混入对象 该对象中可以包含任意的Vue配置选项
const backTop = {
    components: {
        BackTop
    },
    methods: {
        backTop() {
            // this.detailBScroll.scrollTo(0, this.detailBScroll.maxScrollY, 300)
            this.detailBScroll.scrollTo(0, 0, 800)
        },
    },
}

// 导出混入对象
export {
    backTop
}


