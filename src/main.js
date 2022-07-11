import Vue from 'vue';
import App from './App.vue';

import router from '@/router';
import '@/styles/reset.css';
import '@/mobile/flexible';
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.config.productionTip = false;
Vue.use(Vant);
import { getRecommendListApi } from '@/apis';
async function fn() {
  try {
    const res = await getRecommendListApi();
    console.log(res);
    console.log(aa);
  } catch (e) {
    console.log('错误');
  }
}
fn();
new Vue({
  render: (h) => h(App),
  router,
}).$mount('#app');
