<template>
  <div v-if="homedata.length>0" class="wrap main">
      <mt-swipe :auto="4000" class="swipe">
        <mt-swipe-item v-for="(item,index) in homedata[0].items" :key="index">
          <a :href="item.ctrlparam">
            <img :src="item.pic_url" alt="">
          </a>
        </mt-swipe-item>
      </mt-swipe>
      <div v-for="(item,index) in homedata.slice(1)" :key="index">
        <p>
          <span></span>
          <span>{{item.title}}</span>
        </p>
        <div>
            <div v-for="(ite,inde) in item.items" :key="inde" @click="$global.goDetails(ite.ctrlparam)">
              <div>
                <img v-lazy="ite.pic_url" alt="" :style="{'width':ite.pic_width/112.5+'rem','height':ite.pic_height/112.5+'rem'}">
              </div>
              <p :style="{'width':ite.pic_width/112.5+'rem'}">{{ite.title}}</p>
              <p :style="{'width':ite.pic_width/112.5+'rem'}">{{ite.subtitle}}</p>
            </div>
          </div>
      </div>
      <div id="to-top-btn" @click="intotop" class="fa fa-arrow-up">
        
      </div>
  </div>
</template>
<script>
import swiper from '@/components/commonTemp/swiper'
export default {
  data() {
    return {
      homedata:[]
    };
  },
  computed: {
  
  },
  mounted() {
    this.$apis.getHomeData({"page": "1"}).then((res)=>{
      this.homedata=res.data.datas.items;
      this.$apis.getHomeData({"page": "2"}).then((item)=>{
        this.homedata.push(item.data.datas.items[0])
      })
    }) 
    setTimeout(()=>{
      window.addEventListener('scroll', this.scrollToTop)
    },1000)
  },
  methods: {
   scrollToTop(el) {
      let topBtn = document.getElementById('to-top-btn');
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      let browserHeight = window.outerHeight;
      if (scrollTop > browserHeight) {
            topBtn.style.display = 'block';
      } else {
            topBtn.style.display = 'none';
      }
    },
    intotop(){
      document.documentElement.scrollTop = document.body.scrollTop = 0;
    }
  },
  components:{
    swiper:swiper
  },
  destroyed () {
    window.removeEventListener('scroll', this.scrollToTop); 
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.main{
    margin-top: r(48);
    padding: 2%;
    box-sizing: border-box;
  .swipe{
    height: r(240);
    div{
      width: r(360);
      height: r(240);
      img{
        width: 100%;
        height:auto;
      }
    }
  }
  >div{
    width: 100%;
    margin-bottom: r(18);
    >p{
      margin: 0;
      font-size: r(15);
      height: r(17);
      line-height: r(17);
      span:nth-child(1){
        float: left;
        border-radius: 3px;
        margin-top: 1px;
        width: 3px;
        height: 15px;
        background: #fe960e;
        margin-right: 10px;  
      }
      span:nth-child(2){
        float: left;
      }
    }
    >div{
      width: 100%;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      >div{
        margin-top: 12px;
        >div{
          img{
            border-radius: 3px;
          }
        }
        p:nth-child(2){
          font-size: 14px;
          color: #333;
          margin: 5px 0;
          max-height: 38px;
          text-overflow: ellipsis;
          line-height: r(19);
          overflow: hidden;
        }
        p:nth-child(3){
          font-size: 12px;
          color: #999;
          line-height: r(16);
        }
      }
    }
  }
  >div:nth-child(4){
    >div{
      >div:nth-child(1){
        img{
          width: r(360)!important;
          height: r(180)!important;
        }
      }
    }
  }
  #to-top-btn{
    display: none;
    position: fixed;
    font-size: r(25);
    bottom: r(15);
    width: r(30);
    height: r(30);
    right: r(15);
    text-align: center;
    line-height: r(30);
    z-index: 999;
    color: #fff;
    border-radius: 50%;
    background: #fe960e;
    padding: r(5);
    opacity: .8;
  }
}
</style>
