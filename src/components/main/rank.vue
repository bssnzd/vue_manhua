<template>
  
  <div class="rank wrap" v-if="rankList.length>0">
        <div v-for="(item,index) in rankList" :key="index" @click="$global.goDetails(item.mid)">
          <img :src='item.logo' alt="">
          <p>{{index+1+'. '}}{{item.name}}</p>
          <p>{{item.author}}</p>
        </div>
  </div>
  
</template>
<script>

export default {
  data() {
    return {
      rankList:[]
    };
  },
  computed: {
    
  },
  mounted() {
    this.$apis.postRank().then((res)=>{
      this.rankList=res.data.datas.items;
    })
  },
  methods: {
   
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.rank{
  padding: 2% ;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  overflow: auto;
  margin-top: r(50);
  padding-top: r(12);
  box-sizing: border-box;
  div{
    width: 30%;
    margin-bottom: r(15);
    img{
      width: 100%;
      height: auto;
    }
    p:nth-child(2){
      padding-top: r(8);
      font-size: r(14);
      line-height: r(19);
      color: #000;
    }
    p:nth-child(3){
      padding-top: r(2);
      font-size: r(13);
      line-height: r(16);
      color: #999;
    }
  }
}
</style>
