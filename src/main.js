import Vue from 'vue';
import App from './App.vue';
import '@/assets/mobile/flexible';
import '@/assets/styles/reset.css';
import router from '@/router';
Vue.config.productionTip = false;
// import { recommendMusicAPI } from '@/api/index';

import {
  Tabbar,
  TabbarItem,
  NavBar,
  Icon,
  Image as VanImage,
  Cell,
  CellGroup,
  Grid,
  GridItem,
  List,
} from 'vant';
Vue.use(List);
Vue.use(Grid);
Vue.use(GridItem);
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(NavBar);
Vue.use(VanImage);
Vue.use(Icon);
Vue.use(Cell);
Vue.use(CellGroup);
// async function fn() {
//   const res = await recommendMusicAPI({ limit: 6 });
//   console.log(res);
// }
// fn();
new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
