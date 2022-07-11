<template>
  <div>
    <van-cell class="title" title="推荐歌单" />
    <van-grid :border="false" :column-num="3">
      <van-grid-item v-for="item in list" :key="item.id">
        <van-image width="100" height="100" :src="item.picUrl" />
        <p class="music-name van-multi-ellipsis--l2">{{ item.name }}</p>
      </van-grid-item>
    </van-grid>
    <van-cell title="最佳匹配" />

    <van-list finished-text="没有更多了">
      <van-cell
        :label="`${
          (item.song && item.song.artists[0] && item.song.artists[0].name) ||
          '未知公司'
        }-${item.name}`"
        center
        :title="item.name"
        v-for="item in NewList"
        :key="item.id"
      />
    </van-list>
    <!-- <template>
        <van-icon color="#000" name="chat-o" size="28" />
      </template> -->
  </div>
</template>
<script>
import { getRecommendListApi, getzuijiaListApi } from '@/api';
export default {
  data() {
    return {
      list: [],
      NewList: [],
    };
  },
  mounted() {
    this.getlist();
    this.getNewlist()
  },
  methods: {
    async getlist() {
      try {
        const res = await getRecommendListApi({
          limit: 6,
        });
        this.list = res.data.result;
        // console.log(res);
        // console.log(this.list);
      } catch (e) {
        // alert(e);
        console.log('111111', e);
      }
    },
    async getNewlist() {
      try {
        const res = await getzuijiaListApi();
        this.NewList = res.data.result;
      } catch (e) {
        console.log('111111', e);
      }
    },
  },
};
</script>

<style></style>
