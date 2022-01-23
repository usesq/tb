<template>
  <div class="ssk">
    <ssk v-slot:left>
      <span class="iconfont icon-saoyisao"></span>
      <form action="" id="ssl">
        <input class="s-k" type="text">
      </form>
    </ssk>
    <ssk v-slot:right>
      <span class="iconfont icon-xiangji"></span>
      <button type="submit" form="ssl" class="s-s">搜索</button>
    </ssk>
  </div>
</template>

<script>
import ssk from "@/views/Home/ssk";

export default {
  name: "ssk_subject",
  components:{
    ssk
  }
}
</script>

<style scoped>
.ssk {
  border-radius: 25px;
  height: 20px;
  width: 85%;
  border: 2px solid orange;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  line-height: 18px;
  font-size: 16px;
}

form,.s-k{
  border: none;
  display: inline-block;
  font-size: 14px;
  height: 14px;
}

input:focus{
  outline:none;
}

.icon-saoyisao{
  margin-left: 5px;
  padding-right: 10px;
  border-right: solid 1px rgba(0,0,0,0.1);
  margin-right: 10px;
}

.s-s{
  height: 18px;
  width: 60px;
  background: orange;
  color: white;
  padding: 0;
  margin: 1px 1px 0 5px;
  border: none;
  border-radius: 25px;
  font-size: 14px;
}
</style>