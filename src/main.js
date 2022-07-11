import Vue from 'vue'
import App from './App.vue'
import '@/assets/mobile/flexible'
import '@/assets/styles/reset.css'

import router from '@/router'

import {
  Tabbar,
  TabbarItem,
  NavBar,
  Cell,
  CellGroup,
  Grid,
  GridItem,
  Image as VanImage,
  Icon,
  Search,
  Tag,
} from 'vant'

Vue.use(Tag)
Vue.use(Icon)
Vue.use(Grid)
Vue.use(Cell)
Vue.use(Search)
Vue.use(NavBar)
Vue.use(Tabbar)
Vue.use(GridItem)
Vue.use(VanImage)
Vue.use(CellGroup)
Vue.use(TabbarItem)

Vue.config.productionTip = false

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app')
