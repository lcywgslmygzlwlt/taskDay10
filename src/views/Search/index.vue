<template>
  <div>
    <van-search shape="round" placeholder="请输入搜索关键词" />
    <!-- 热门搜索 -->
    <van-cell title="热门搜索" />
    <div style="padding: 10px 16px">
      <van-tag
        color="red"
        size="large"
        plain
        round
        type="primary"
        v-for="(obj, index) in hotList"
        :key="index"
        style="margin-right: 15px; padding-left: 15px; padding-right: 15px"
      >
        {{ obj.first }}
      </van-tag>
    </div>
  </div>
</template>
<script>
import { getSearchTagApi } from '@/apis'
export default {
  data() {
    return {
      hotList: [],
    }
  },
  methods: {
    async getHotList() {
      try {
        const res = await getSearchTagApi()
        // console.log(res)
        this.hotList = res.data.result.hots
        // console.log(this.hotList)
      } catch (e) {
        console.log(e.message)
      }
    },
  },
  created() {
    this.getHotList()
  },
}
</script>
