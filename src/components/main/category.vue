<template>
  <div class="cate" > 
    <ul>
      <li v-for="(item,index) in data.slice(0,5)" :key='index' @click="getdata(item)">
        <div>
          <img :src="`http://i-r6.sosobook.cn/logo/group/${imgpng[index]}.png`" alt="">
        </div>
        <p>{{item.gname}}</p>
      </li>
      <li v-for="(item,index) in data.slice(5)" :key='index+"4"' @click="getdata(item)">
        <div>
          <img :src="`http://i-r6.sosobook.cn/logo/group/${imgjpg[index]}.jpg`" alt="">
        </div>
        <p>{{item.gname}}</p>
      </li>
    </ul>
  </div>
</template>
<script>

export default {
  data() {
    return {
      imgpng:['20160825145944_57be976063e36','20160825145948_57be9764d0c6e','20170103144735_586b49070de22',
      '20161013164354_57ff494a432b3','20190816161449_5d5665f91d339'],
      imgjpg:['20180404181853_5ac4a68d11f90','20181220163155_5c1b5378d36ae','20160314180045_56e68bcdc7193',
      '26-2','20151120172131_564ee61b425c6','20151013151320_561caf1078614','20160314180433_56e68cb162845',
      '20150909165607_55eff4276f9a7','20151109155620_564051a421997','20180503111547_5aea7ee2f167c',
      '20150925183521_56052368e6ef1','20171205113806_5a26149e71529','20150925183527_5605236f5c819',
      '20150925183530_56052372a8309','20150925183535_56052376e7e91','20150925183542_5605237e62da9',
      '20150925183546_5605238298cf1','20150925183549_56052385c6f39','20150925183557_5605238dab5d1',
      '20171201122512_5a20d9a7df135','20171201122517_5a20d9ad8522f','20180508131103_5af1316758c39'],
      textlist:['最近更新','今日热榜','已完结','高分精选','漫展周边','最近上新','等待免费','付费漫画','日韩',
      '经典','联合出品','条漫','百合','肥皂','玄幻','霸道总裁','恋爱','用户原创','游戏','治愈','科幻','搞笑',
      '鬼怪','励志','格斗','少女漫','少年漫','真人漫'],
      data:[{fun: 14,param: '',gname: '最近更新'},{fun: 1,param: 10018,gname: '今日热榜'},{fun: 1,param: 12022,gname: '已完结'},
      {fun: 1,param: 12064,gname: '高分精选'},{fun: 1,param: 12084,gname: '最近上新'},
      {fun: 1,param: 12114,gname: '等待免费'},{fun: 1,param: 12128,gname: '付费漫画'},{fun: 1,param: 12053,gname: '日韩'},
      {fun: 1,param: 303,gname: '经典'},{fun: 1,param: 12033,gname: '联合出品'},{fun: 1,param: 12036,gname: '条漫'},
      {fun: 1,param: 206,gname: '百合'},{fun: 1,param: 12009,gname: '肥皂'},{fun: 1,param: 12041,gname: '玄幻'},
      {fun: 1,param: 12116,gname: '霸道总裁'},{fun: 1,param: 404,gname: '恋爱'},{fun: 1,param: 12091,gname: '用户原创'},
      {fun: 1,param: 12018,gname: '游戏'},{fun: 1,param: 202,gname: '治愈'},{fun: 1,param: 403,gname: '科幻'},
      {fun: 1,param: 10008,gname: '搞笑'},{fun: 1,param: 211,gname: '鬼怪'},{fun: 1,param: 12023,gname: '励志'},
      {fun: 1,param: 410,gname: '格斗'},{fun: 1,param: 12103,gname: '少女漫'},{fun: 1,param: 12104,gname: '少年漫'},
      {fun: 1,param: 12117,gname: '真人漫'},
      ],
    };
  },
  computed: {
    
  },
  mounted() {
    
  },
  methods: {
   getdata(item){
     this.$router.push({path:'/catelist',query:{item}})
   }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.cate{
  margin-top: r(48);
  ul{
    padding: r(28) r(14) 0;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    li{
      margin-bottom: r(18);
      width: 30%;
      height: r(126);
      div{
        width: r(77);
        height: r(77);
        margin: 0 auto r(9);
        border-radius: 50%;
        overflow: hidden;
        img{
          width: 100%;
          height: auto;
        }
      }
      p{
        text-align: center;
        font-size:r(14);
        line-height: r(19)
      }
    }
  }
  
  
}
</style>
