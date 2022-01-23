<template>
  <div class="tab-bar">
    <tab-bar-item class="bar-bar" path="/home">
        <span class="iconfont icon-shouye"></span>
        <br>
        <span class="less">首页</span>
    </tab-bar-item>
    <tab-bar-item class="bar-bar" path="/go_walk">
      <span class="iconfont icon-a-shouyediqiu"></span>
      <br>
      <span class="less">逛逛</span>
    </tab-bar-item>
    <tab-bar-item class="bar-bar" path="/news">
      <span class="iconfont icon-xiaoxi"></span>
      <br>
      <span class="less">消息</span>
    </tab-bar-item>
    <tab-bar-item class="bar-bar" path="/shopping_cart">
      <span class="iconfont icon-gouwuche"></span>
      <br>
      <span class="less">购物车</span>
    </tab-bar-item>
    <tab-bar-item class="bar-bar" path="/personal">
      <span class="iconfont icon-wode"></span>
      <br>
      <span class="less">我的淘宝</span>
    </tab-bar-item>
  </div>
</template>

<script>
import TabBarItem from './tab-bar-item'

export default {
  name: "home",
  components: {
    TabBarItem
  }
}
</script>

<style scoped>
@import '../../../public/css/home/font-style.css';

.tab-bar {
  display: flex;
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  height: 53px;
  background: #ffffff;
}

.bar-bar{
  padding:5px 0;
}

.iconfont{
  font-size: 25px;
  /*color: red;*/
}

.less{
  font-size: 13px;
}
</style>