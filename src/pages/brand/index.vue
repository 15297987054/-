<template>
   <div v-show="bool">
    <div id="head">
      <router-link :to="path" class="backBtn" tag="div">
        <img src="../../../public/img/backBtn.png" alt />
      </router-link>
      <p>品牌优选</p>

      <div class="list" @click="clickhandle">
        <img src="../../../public/img/list.png" alt />
        <transition name="nav">
          <ul class="rightList" v-show="flag">
            <router-link :to="item.path" v-for="(item,index) in rightList" :key="index" tag="li">
              <span class="rightList-img">
                <img src="../../../public/img/shouye.png" alt />
              </span>
              <span class="text">{{item.text}}</span>
            </router-link>
          </ul>
        </transition>
      </div>
    </div>
    <div class="header">
      <h3>品牌优选</h3>
    </div>
     <Bscroll ref="scroll">
    <ul class="goodsList" @click="clickHide">
      <router-link 
      :to="'/more?name='+item.brandEnName"
      
      tag="li" v-for="(item,index) in goodslist" 
      :key="index"
     
      >
        <img :src="item.imgUrl" alt  @click="chooseOnetypeGoods(item.brandEnName)"/>
        <div class="afterImg">
          <div class="goodsName">{{item.brandEnName}}</div>
          <div class="more">
            <p>查看更多</p>
          </div>
        </div>
      </router-link>
     
    </ul>
     </Bscroll>
   </div>
</template>




  
 <!-- <router-view></router-view> -->


<script>
import {mapState,mapActions} from "vuex";
export default {
  name:"Brand",
    mounted(){
    //下拉刷新
    this.$refs.scroll.handlepullingDown(async ()=>{
      //下拉刷新的事情
      sessionStorage.removeItem("goodslist"),
      this.handleGetgoods();  
           this.$refs.scroll.handlefinishPullDown();
         })
         this.$refs.scroll.handlepullingUp(async ()=>{
    })
     },
   created(){
        this.handleGetgoods();  
        this.chooseOnetypeGoods();
    },
  data() {
    return {
      path: "/home",
      flag: false,
      bool: true,
      rightList: [
        {
          src: "../../../public/img/shouye.png",
          text: "首页",
          path: "/home"
        },
        {
          src: "../../../public/img/gouwudai.png",
          text: "购物袋",
          path: "/home"
        },
        {
          src: "../../../public/img/wode.png",
          text: "我的",
          path: "/home"
        }
      ]
    };
  },
  computed:{
    ...mapState({
      goodslist:state=>state.more.goodslist,
    })
  },
  methods: {
    ...mapActions({
        handleGetgoods:"more/handleGetgoods",
        chooseOnetypeGoods:"more/chooseOnetypeGoods"
    }),
    clickhandle() {
      this.flag = !this.flag;
    },
    clickHide() {
      this.bool = !this.bool;
    }
  }
};
</script>



<style scoped>

#head {
  width: 100%;
  height: 0.3667rem;
  position: fixed;
  display: flex;
  top: 0rem;
  padding-bottom:0.3667rem;
  background:white;
  /* background:rgb(109, 105, 105); */
}
.backBtn {
  width: 0.4583rem;
  height: 0.3667rem;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
}
.backBtn img {
  width: 0.1917rem;
  height: 0.1917rem;
}
#head p {
  width: 2.2083rem;
  height: 0.3667rem;
  text-align: center;
  font-size: 0.1417rem;
  line-height: 0.3667rem;
  color: black;
  font-family: STHeiti, Helvetica Neue;
}
.list {
  width: 0.4583rem;
  height: 0.3667rem;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
}
.list img {
  width: 0.1917rem;
  height: 0.1917rem;
}
.rightList {
  width: 1.1083rem;
  height: 1.225rem;
  background: white;
  position: absolute;
  top: 0.3583rem;
  right: 0rem;
  
}
.rightList li {
  width: 100%;
  height: 0.4083rem;
  border-bottom: 0.0083rem solid #e1e1e1;
  display: flex;
  justify-content: baseline;
  align-items: center;
  font-size: 0.1167rem;
  color: black;
  font-family: Helvetica Neue;
  z-index:1;
}
/* .nav-enter, .nav-leave-to{
    height:0rem;
    }
    .nav-leave-active, .nav-enter-active{
             transition: all .3s;
    } */
.rightList-img {
  width: 0.4167rem;
  height: 0.135rem;
  padding-left: 0.1667rem;
  padding-right: 0.0833rem;
}
.text {
  margin-top: 0.1017rem;
  margin-left:0.0833rem;
}
.header {
  width: 2.875rem;
  height: 0.5917rem;
  margin-left: 0.125rem;
  margin-right: 0.125rem;
  margin-top:0.3667rem;
  padding-top: 0.1875rem;
  padding-bottom: 0.1875rem;
  font-size: 0.1667rem;
  text-align: center;
}
.goodsList {
  width: 2.875rem;

  height: 100%;

  height: auto;

  padding-bottom: 0.4167rem;
  margin-left: 0.125rem;
  margin-right: 0.125rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.goodsList li {
  width: 49%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  float: left;
  margin-bottom: 0.0417rem;
}
.goodsList img {
  width: 1.4167rem;
  height: 1.725rem;
}
.afterImg {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 1.4167rem;
  height: 0.5917rem;
  background: #f7f7f7;
}
.goodsName {
  width: 1.3083rem;
  margin-left: 0.0542rem;
  margin-right: 0.0542rem;
  height: 0.1667rem;
  margin-bottom: 0.0708rem;
  font-size: 0.125rem;
  text-align: center;
  color: black;
}
.more {
  width: 1.4167rem;
  height: 0.1833rem;
  padding-bottom: 0.0667rem;
}
.more p {
  width: 0.6667rem;
  height: 0.1667rem;
  margin-left: 0.3583rem;
  margin-right: 0.3583rem;
  border: 0.0083rem solid #000;
  text-align: center;
  line-height: 0.1667rem;
}
</style>

