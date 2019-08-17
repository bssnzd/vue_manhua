<template>
    <div class="list" v-if="catedata.length>0">
      <div class="top">
        <div>
          <a href="javascript:history.back();" @click="drop">
            <span>
            </span>
          </a>
          <span>{{cate}}</span>
        </div>
      </div>
      <div class="main">
        <div v-for="(item,index) in catedata" :key="index" @click="$global.goDetails(item.mid)">
          <img :src='item.logo' alt="">
          <p>{{item.name}}</p>
          <p>{{item.author}}</p>
        </div>
      </div>
    </div>
</template>
<script>

export default {
  data() {
    return {
      catedata:[],
      cate:''
    };
  },
  computed: {
    
  },
  mounted() {
    if(this.$route.query.item.gname){
      this.getdata(this.$route.query.item)
    }
    // this.getdata(this.$route.query.item)
  },
  methods: {
   getdata(item){
      item.count=31;
      item.start=0;
      this.cate=item.gname;
      item=this.$global.getFromdata(item);
      this.$apis.postCate(item).then((res)=>{
        this.catedata=res.data.datas.items
      })
   },
   drop(){
     this.catedata=[];
   }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

  .list{
    z-index: 999;
    .top{
      position: fixed;
      top: r(48);
      left:0;
      width: r(375);
      div{
      width: r(375);
        height: 38px;
        line-height: 38px;
        color: #666;
        font-size: 15px!important;
        overflow: hidden;
        background: #fff;
        position: relative;
        border-bottom: 1px solid rgba(0,0,0,.18);
         a{
          position: absolute;
          top: 5px;
          width: 120px;
          height: 34px;
          span{
            width: 18px;
            height: 18px;
            position: absolute;
            left: r(17); 
            background: url('http://m.buka.cn/static/img/back_01.png') no-repeat;
            display: block;
            background-size: 18px 18px;
            float: left;
            margin-top: 7px;
          }
        }
        >span{
          display: block;
          width: 50%;
          position: absolute;
          left: 50%;
          top: 6px;
          margin-left: -25%;
          text-align: center;
          line-height: 28px;
        }
      }
     
    }
    .main{
        margin-top: r(90);
        color: #B5B5B5;
        padding: r(12) ;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        overflow: auto;
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
  }

</style>
