import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import { Image as VanImage } from 'vant'

import {
  Tabbar,
  TabbarItem,
  NavBar,
  Cell,
  CellGroup,
  Grid,
  GridItem,
  Icon,
  Tag,
  Search,
  List,
  Toast,
} from 'vant'
Vue.use(VanImage)
Vue.use(GridItem)
Vue.use(Grid)
Vue.use(Cell)
Vue.use(CellGroup)
Vue.use(Tabbar)
Vue.use(TabbarItem)
Vue.use(NavBar)
Vue.use(Icon)
Vue.use(Tag)
Vue.use(Search)
Vue.use(List)
Vue.use(Toast)

Vue.config.productionTip = false

// 演示接口的用法
import { getRecommendListApi } from '@/apis'
async function fn() {
  try {
    const res = await getRecommendListApi()
    console.log(res)
    // console.log(aa)
  } catch (e) {
    console.log('错了')
  }
}
fn()

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app')
