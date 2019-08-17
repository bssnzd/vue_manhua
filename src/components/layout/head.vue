<template>
  <div class="footer wrap">
      <ul>
        <li v-for="(item,index) in routerList" :key="index" :class="{'active':aindex==index}" @click="active(index)">
          {{item.name}}
        </li>
        <li :class="{'active':aindex==3}" @click="search">
          <img src="@/assets/search.png" alt="">
        </li>
      </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      routerList: [
        { path: "/index", name: "推荐" },
        { path: "/rank", name: "排行" },
        { path: "/category", name: "分类"}
      ],
      aindex:0
    };
  },
  created(){
    // this.bool=true;
  },
  methods:{
    active(index){
      this.aindex=index;
      this.$router.push(this.routerList[index].path);
    },
    search(){
      this.$router.push({path:'/search',query:{index:this.aindex}})
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.footer{
  @include top;
  z-index: 100;
  background: #fff;
  ul{
    width: 100%;
    display:flex;
    height:r(48);
    position: relative;
    line-height: r(48);
    text-align: center;
    li{
      width: 25%;
      font-size: r(20);
      border-bottom: r(1) solid #b5b5b5;
      img{
        width: 25%;
        height:auto;
      }
    }
    .active{
      color: #fe960e;
    }
  }
}  
 
</style>
