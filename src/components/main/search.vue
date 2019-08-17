<template>
  <div class="search wrap">
      <div class="top">
        <a class="a1" @click="back">
          <i class="fa fa-angle-left"></i>
        </a>
        <div>
          <i class="fa fa-search"></i>
          <input type="text" placeholder="漫画 | 作者 | 资讯 | 漫展" v-model="val">
          <div v-if="tips.length>0">
            <ul>
              <li v-for="(item,index) in tips" :key="index" @click="searcho(item)">
                <i class="fa fa-search"></i>
                {{item}}
              </li>
            </ul>
          </div>
          <span v-if="tips.length>0 || searchlist.length>0 || bool">
            <i class="fa fa-times" @click="clear"></i>
          </span>
        </div>
        <a class="a2" @click="search">搜索</a>
      </div>
      <div class="main" v-if="hot.length>0 && searchlist.length<=0">
        <div class="d1">
          <p class="p1">热门搜索</p>
          <p class="p2">
            <span v-for="(item,index) in hot" :key="index" @click="searcho(item)">{{item}}</span>
          </p>
        </div>
        <div v-if="his.length>0" class="d2">
          <p class="p1">搜索历史</p>
          <p v-for="(item,index) in his" :key="index" class="p2">
            <i class="fa fa-clock-o"></i>
            <span>{{item}}</span>
          </p>
        </div>
      </div>
      <div class="sea" v-if="searchlist.length>0">
        <div v-for="(item,index) in searchlist" :key="index" @click="$global.goDetails(item.mid)">
          <img :src='item.logo' alt="">
          <p>{{item.name}}</p>
        </div>
      </div>
  </div>
</template>
<script>

export default {
  data() {
    return {
      hot:[],
      bool:false,
      his:[],
      val:'',
      tips:[],
      searchlist:[]
    };
  },
  computed: {
    
  },
  mounted() {
    this.$apis.getHotWord().then((res)=>{
      this.hot=res.data.datas
    })
  },
  methods: {
    search(){
      let data={
        key:this.val,
        start:'0',
        count:'15'
      }
      this.tips=[];
      data=this.$global.getFromdata(data);
      this.$apis.postSearch(data).then((res)=>{
        if(!res.data.datas.items){
          this.searchlist=[]
        }else{
          this.searchlist=res.data.datas.items
        }
        console.log(this.searchlist)
      })
      this.bool=true;
      let bool=true;
      this.his.map((item)=>{
        if(item==this.val){
          bool=false;
        }
      })
      if(bool){
      this.his.push(this.val);
      }
      if(this.his.length>6){
        this.his.shift();
      }
    },
    searcho(item){
      this.val=item;
      this.search();
    },
    clear(){
      this.val='';
      this.tips=[];
      this.searchlist=[],
      this.bool=false
    },
    back(){
      console.log(this.$route.query.index)
      this.$router.push(['index','rank','category'][this.$route.query.index])
    }
  },
  watch:{
    val(){
      if(this.val==''||this.bool){
        this.tips=[];
        return;
      }
      let data={
        key:this.val
      }
      data=this.$global.getFromdata(data);
      this.$apis.postTips(data).then((res)=>{
        this.tips=res.data.datas
      })
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.search{
  position: fixed;
  top:0;
  bottom: 0;
  left: 0;
  right: 0;
  background: #fff;
  z-index:150;
  font-size: r(14);
  overflow: auto;
  .top{
    height: r(40);
    line-height: r(40);
    padding: 2%;
    border-bottom: r(1) solid #f1f1f1;
    .a1{
      color: #999;
      font-size: r(25);
      width: 9%;
      text-align: center;
      border-radius: r(3);
      height: r(40);
      line-height: r(40);
      float: left;
    }
    >div{
      position: relative;
      background: #e4e5e7;
      height: r(40);
      width: 71%;
      float: left;
      border-radius: r(3);
      >i{
        display: inline-block;
        width: 12%;
        text-align: center;
        font-size: r(18);
        color: #999;
      }
      input{
        width: 86%;
        display: inline-block;
        border: none;
        font-size: r(15);
        background: #e4e5e7;
        height: r(40);
        padding: 0 r(5);
        box-sizing: border-box;
        border-radius: r(3);
        line-height: r(40);
      }
      div{
        position: absolute;
        top: r(45);
        background: #fff;
        box-shadow: 3px 5px 10px rgba(0,0,0,.3);
        left: 0;
        width: 100%;
        z-index: 99;
        color: #999;
        ul{
          li{
            padding: 0 3%;
            i{
              width: 12%;
              text-align: center;
              font-size: 0.38rem;
            }
          }
        }
      }
      span{
        position: absolute;
        display: block;
        width: 15%;
        top: 2px;
        text-align: center;
        line-height: 35px;
        right: 0;
        font-size: 20px;
        color: #fe960e;
      }
    }
    .a2{
      font-size: r(15);
      background: #fe960e;
      color: #fff;
      width: 18%;
      float: right;
      text-align: center;
      border-radius: r(3);
      height: r(40);
      line-height: r(40);
    }
  }
  .main{
    padding: 2%;
    .d1{
      .p1{
        color: #999;
        padding: r(10) 0;
      }
      .p2{
        span{
          display: inline-block;
          color: #666;
          border: r(1) solid #ccc;
          border-radius: r(20);
          padding: r(5) r(12);
          margin: r(5);
          line-height: r(19);
        }
      }
    }
    .d2{
      margin-top: r(30);
      .p1{
        color: #999;
        margin-bottom: r(10);
      }
      .p2{
        overflow: hidden;
        color: #999;
        font-size: r(15);
        padding: r(10) 0;
        i{
          float: left;
          width: 8%;
          text-align: center;
        }
        span{
          float: left;
        }
      }
    }
  }
  .sea{
    padding: 2% ;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    overflow: auto;
    div{
      width: 30.6%;
      margin-bottom: r(15);
      img{
        width: 100%;
        height: auto;
      }
      p{
        padding-top: r(8);
        font-size: r(16)
      }
    }
  }
}
</style>
