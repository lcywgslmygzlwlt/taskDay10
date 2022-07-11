<template>
  <div>
    <van-search shape="round" placeholder="请输入搜索关键词" v-model="value" />
    <!-- 热门搜索 -->
    <template v-if="searchList.length == 0">
      <van-cell title="热门搜索" />
      <div style="padding: 10px 16px">
        <van-tag
          color="red"
          text-color="#000"
          size="large"
          plain
          round
          type="primary"
          v-for="(item, index) in tag"
          :key="index"
          style="margin-right: 6px"
          @click="clickFn(item.first)"
        >
          {{ item.first }}
        </van-tag>
      </div>
    </template>
    <template v-else>
      <van-cell title="最佳匹配" />

      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <van-cell
          v-for="item in searchList"
          :key="item.id"
          :title="item.name"
          :label="`${item.ar[0].name}-${item.name}`"
        />
      </van-list>
    </template>
  </div>
</template>
<script>
import { getSearchTag, getSearchListApi } from '@/api';
export default {
  data() {
    return {
      tag: [],
      value: '',
      searchList: [],
      loading: false,
      finished: false,
    };
  },
  methods: {
    async getTags() {
      try {
        const res = await getSearchTag();
        this.tag = res.data.result.hots;
      } catch (error) {}
    },
    async clickFn(val) {
      this.value = val;
      try {
        let res = await getSearchListApi({
          keywords: this.value,
        });
        console.log(res.data.result.songs);
        this.searchList = res.data.result.songs;
        this.$toast.success('成功文案');
      } catch (error) {
        this.$toast.fail('失败文案');
      }
    },
    onLoad() {},
  },
  created() {
    this.getTags();
  },
};
</script>
