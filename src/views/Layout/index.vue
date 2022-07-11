<template>
  <div>
    <van-nav-bar :title="$route.meta.title" />
    <router-view></router-view>
    <div style="margin-top: 50px">
      <van-tabbar route>
        <van-tabbar-item icon="home-o" to="/layout/home">首页</van-tabbar-item>
         
        <van-tabbar-item icon="search" to="/layout/search"
          >搜索</van-tabbar-item
        >
      </van-tabbar>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "",
    };
  },
  name: "VueMusicIndex",
};
</script>

<style></style>
