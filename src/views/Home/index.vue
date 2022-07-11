<template>
  <div class="home-container">
    <!-- 推荐歌单 -->
    <van-cell class="title" title="推荐歌单" />
    <van-grid :border="false" :column-num="3">
      <van-grid-item v-for="obj in list" :key="obj.id">
        <van-image width="100" height="100" :src="obj.picUrl" />
        <p class="music-name van-multi-ellipsis--l2">{{ obj.name }}</p>
      </van-grid-item>
    </van-grid>

    <van-cell title="最佳匹配" class="title" />
    <van-cell
      :label="obj.song.artists[0].name"
      :title="obj.name"
      v-for="obj in songList"
      :key="obj.id"
    >
      <template>
        <van-icon color="#000" name="play-circle-o" size="28" />
      </template>
    </van-cell>
  </div>
</template>

<script>
import { getCommendListApi, getSongListApi } from '@/apis'
export default {
  data() {
    return {
      list: [],
      songList: [],
    }
  },
  methods: {
    async getList() {
      try {
        const res = await getCommendListApi({ limit: 6 })
        console.log(res)
        this.list = res.data.result
      } catch (e) {
        console.log(e.message)
      }
    },
    async getSong() {
      try {
        const res = await getSongListApi()
        console.log(res)
        this.songList = res.data.result
      } catch (e) {
        console.log(e.message)
      }
    },
  },
  created() {
    this.getList()
    this.getSong()
  },
}
</script>

<style lang="less" scoped>
.home-container {
  .title {
    background-color: #999;
    color: #fff;
  }

  .music-name {
    font-size: 12px;
    text-align: left;
    line-height: 20px;
    width: 100%;
    padding: 0 5px;
    box-sizing: border-box;
    height: 37px;
  }

  /deep/.van-grid-item__content {
    padding: 10px 0px;
  }
  .van-cell__value {
    padding-top: 10px;
    flex: 0 0 30px;
  }
}
</style>
