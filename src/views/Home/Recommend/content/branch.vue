<template>
  <div class="xmfl">
    <div class="x-f-l" v-for="item in list1">
      <a href="#">
        <img :src="item.url" :alt=item.name>
        <br>
        <span>{{item.name}}</span>
      </a>
    </div>
    <br>
    <div class="x-f-l" v-for="item in list2">
      <a href="#">
        <img :src="item.url" :alt=item.name>
        <br>
        <span>{{item.name}}</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "branch",
  data(){
    return{
      list1:[
        {
          url:'/img/Recommend/天猫优选LOGO.png',
          name:'天猫U先'
        },
        {
          url:'/img/Recommend/火爆.png',
          name:'今日爆款'
        },
        {
          url:'/img/Recommend/飞猪.png',
          name:'飞猪旅行'
        },
        {
          url:'/img/Recommend/农场.png',
          name:'芭芭农场'
        },
        {
          url:'/img/Recommend/天猫超市.png',
          name:'天猫超市'
        },
        {
          url:'/img/Recommend/global.png',
          name:'天猫国际'
        },
        {
          url:'/img/Recommend/C1_吃货天堂.png',
          name:'吃货天堂'
        },
        {
          url:'/img/Recommend/咸鱼.png',
          name:'闲鱼'
        },
        {
          url:'/img/Recommend/药丸.png',
          name:'天猫好药'
        },
        {
          url:'/img/Recommend/汽车.png',
          name:'天猫汽车'
        }
      ],
      list2:[
        {
          url:'/img/Recommend/手机充值.png',
          name:'充值中心'
        },
        {
          url:'/img/Recommend/新鲜食材.png',
          name:'淘鲜达'
        },
        {
          url:'/img/Recommend/币种管理.png',
          name:'领淘金币'
        },
        {
          url:'/img/Recommend/捡漏.png',
          name:'阿里拍卖'
        },
        {
          url:'/img/Recommend/分类.png',
          name:'分类'
        },
        {
          url:'/img/Recommend/ic_饿了么.png',
          name:'饿了么'
        },
        {
          url:'/img/Recommend/熊猫.png',
          name:'冬奥公益'
        },
        {
          url:'/img/Recommend/淘票票.png',
          name:'淘票票'
        },
        {
          url:'/img/Recommend/生鲜超市.png',
          name:'土货鲜食'
        },
        {
          url:'/img/Recommend/更多.png',
          name:'更多频道'
        }
      ]
    }
  }
}
</script>

<style scoped>
.xmfl{
  /*height: 200px;*/
  width: 85%;
  background: #42b983;
  margin: 1.5% auto;
  padding-top: 10px;
  padding-bottom: 15px;
  border-radius: 25px;
  /*display: flex;*/
  overflow-x: auto;
  white-space: nowrap;
}

.xmfl a{
  color: black;
  text-decoration: none;
}

/* 滚动条整体 */
.xmfl::-webkit-scrollbar{
  width: 10px;
  height: 5px;
}

/* 滚动滑块 */
.xmfl::-webkit-scrollbar-thumb{
  background: orange;
  border-radius: 25px;
}

/* 内层滚动条 */
.xmfl::-webkit-scrollbar-track-piece{
  background: silver;
  width: 5px;
  height: 500px;
  border-radius: 25px;
}

.xmfl img{
  width: 50px;
  margin: 0 auto;
}

.x-f-l{
  width: 50px;
  display: inline-block;
  font-size: 12px;
  text-align: center;
  margin: 5px 2.5% 0 2.5%;
}

</style>