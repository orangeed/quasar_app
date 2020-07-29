import homeImg from './homeImg.vue'
import headImg from './headImg.vue';
import baseView from './baseView.vue'
import Notify from './Notify.vue'
import aside from './aside.vue'
import articleImg from './articleImg.vue'
import asideTip from './asideTip.vue'

const componentList = [
    headImg,
    baseView,
    homeImg,
    Notify,
    aside,
    articleImg,
    asideTip
]

// 添加install方法 （插件方法）
const myCom = {
    install: function (Vue) {
        componentList.forEach(component => {
            Vue.component(component.name, component);
        })
    }
}

// 导出插件
export default myCom