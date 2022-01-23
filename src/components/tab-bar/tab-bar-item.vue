<template>
  <div class="tab-bar-item" @click="btnClick" :class="{mos:isAction}">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "tab-bar-item",
  props:{
    path:String
  },
  data(){
    return {
      los:false
    }
  },
  computed:{
    // 判断当前路径是否和传过来的一致，如果一致则变为橙色
    isAction(){
      return this.path == this.$route.path
    }
  },
  methods:{
    // 点击事件，替换路径
    btnClick(){
      if(this.$route.path!=this.path){
        this.$router.replace(this.path)
      }
    }
  }
}
</script>

<style scoped>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
}

.mos {
  color: orange;
}
</style>