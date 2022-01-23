<template>
  <div>
    <div class="home">
      <Navigation @btnClick="nopts"/>
    </div>
    <ssk_subject/>
    <div v-if="this.$store.state.colr==1">
      <Recommend/>
    </div>
    <div v-else>
      <Subscribe/>
    </div>
  </div>
</template>

<script>
import Navigation from "@/views/Home/Navigation";
import ssk_subject from "@/views/Home/ssk_subject";
import Recommend from "@/views/Home/Recommend/Recommend";
import Subscribe from "@/views/Home/Subscribe/Subscribe";

export default {
  name: "Home",
  components: {
    Navigation,
    ssk_subject,
    Recommend,
    Subscribe
  },
  methods:{
    nopts(x){
      if(x==2){
        console.log(x)
      }else{
        console.log(x);
      }
    }
  }
}
</script>

<style scoped>

.home {
  text-align: center;
  height: 50px;
}

</style>