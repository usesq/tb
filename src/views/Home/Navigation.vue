<template>
  <div class="home-top">
    <Top v-slot:left class="top-div">
      <div class="br">
        <span class="iconfont icon-hongbao"></span>
        <span>签到</span>
      </div>
    </Top>
    <Top v-slot:center>
      <div class="wz">
        <span @click="_oneS(2)" :class="{'pop':colr2}">订阅</span><span :class="{'pop':colr}" @click="_oneS(1)" class="div-right">推荐</span>
      </div>
    </Top>
    <Top v-slot:right class="top-div">
      <div class="br">
        <span class="iconfont icon-huiyuanma"></span>
        <span>会员码</span>
      </div>
    </Top>
  </div>
</template>

<script>
import Top from '@/components/top/Top'

export default {
  name: "Navigation",
  data(){
    return {
      x : 2,
      colr:this.$store.state.colr,
      colr2:this.$store.state.colr2
    }
  },
  components: {
    Top
  },
  computed:{
  
  },
  methods:{
    _oneS(m){
      this.x=m
      // console.log(this.x);
      this.$emit('btnClick',this.x)
      // console.log(this.$store.state.colr2);
      
      // 记录状态，是订阅，还是推荐
      if(m==1){
        this.$store.state.colr2=false
        this.$store.state.colr=true
        this.colr=this.$store.state.colr
        this.colr2=this.$store.state.colr2
      }else{
        this.$store.state.colr=false
        this.$store.state.colr2=true
        this.colr=this.$store.state.colr
        this.colr2=this.$store.state.colr2
      }
    }
  }
}
</script>

<style scoped>


.home-top {
  display: flex;
  position: fixed;
  width: 100%;
  height: 50px;
}

.div-right {
  margin-left: 20px;
}

.home-top div {
  flex: 1;
  text-align: center;
}

.br {
  width: 75px;
  height: 21px;
  border-radius: 25px;
  margin: 15px auto 0 auto;
  background: orange;
  color: black;
  text-align: center;
}

.wz {
  line-height: 50px;
  color: #666666;
}

.pop{
  font-weight: bold;
  color: rgba(0,0,0,1);
  font-size: 19px;
}
</style>