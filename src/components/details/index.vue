<template>
  <div class="shop_body">  
    <div class="nav-wrap">
      <div class="nav">
        <div @click="detailsBack" class="backBtn">
          <img src="../../../public/img/backBtn.png" alt />
        </div>
        <ul class="nav-ul">
          <v-touch 
          tag="li"
          @tap="handleto(index)"
          v-for="(item,index) in nav" 
          :key="index">{{item}}</v-touch>
        </ul>
        <div class="list" @click="clickhandle">
          <img src="../../../public/img/list.png" alt />
          <transition name="nav">
            <ul id="rightList" v-show="flag">
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
    </div>
    <Bscroll ref="scroll">
   <div class="scroll_Top"  ref="list">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img
            class="imgBanner"
            :src="info.imgUrl"
            alt
          />
        </div>
        <div class="swiper-slide">
          <img
            class="imgBanner"
            src="https://pic12.secooimg.com/product/750/750/2019/0525/bb5bd27d102b474f963c0680b3ae4c9d.png"
            alt
          />
        </div>
        <div class="swiper-slide">
          <img
            class="imgBanner"
            src="https://pic12.secooimg.com/product/750/750/2019/0525/30366c2d910641b1a5a14ddb042652ea.png"
            alt
          />
        </div>
        <div class="swiper-slide">
          <img
            class="imgBanner"
            src="https://pic12.secooimg.com/product/750/750/2019/0525/b0d8472ec6a44dc2a8acf9faae12ba61.png"
            alt
          />
        </div>
        <div class="swiper-slide">
          <img
            class="imgBanner"
            src="https://pic12.secooimg.com/product/750/750/2019/0525/602b547de42c478ca12a54d6f37702c2.png"
            alt
          />
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>
    
    <div class="priceContain">
      <span>￥13,702</span>
    </div>
    <div class="goodsName">
      <p class="goodsNmae-name">
        <span>{{info.brandEnName}}/{{info.brandCname}}</span>
        {{info.name}}
      </p>
    </div>
    <div class="carrige">
      <span class="carrige-img">
        <i>
          <img src="https://mpic.secooimg.com/images/2017/02/09/hongkong@2x.png" alt />
          香港货源
        </i>
        <span>预计5-10个工作日内送达</span>
      </span>

      <p class="text-nowrap">此商品为特例品，不支持使用优惠券且不参与会员折扣</p>
    </div>
    <p class="fenqi">
      <span>库支票分支</span>
      <span>月供￥1141.83 × 12期</span>
    </p>
    <div class="col">
      <p>颜色</p>
      <ul>
        <li>黑色系</li>
        <li>红色系</li>
      </ul>
    </div>
    <div class="server">
      <ul>
        <li>
          <img src="https://mpic.secooimg.com/images/2017/08/14/zhengpindetail@2x.png" alt />
          <p>假一赔十</p>
        </li>
        <li>
          <img src="https://mpic.secooimg.com/images/2017/02/09/no_deliver_fee@2x.png" alt />
          <p>会员包邮</p>
        </li>
        <li>
          <img src="https://mpic.secooimg.com/images/2017/02/09/identity@2x.png" alt />
          <p>专业鉴定</p>
        </li>
        <li>
          <img src="https://mpic.secooimg.com/images/2017/02/09/not_exchange@2x.png" alt />
          <p>不支持七天退换</p>
        </li>
      </ul>
    </div>
    
    <div class="bottom">
      <h2>商品信息</h2>
      <table class="product-info p">
        <tbody>
          <tr>
            <td>商品编号</td>
            <td class="select-text">51408074</td>
          </tr>
          <tr>
            <td>图案</td>
            <td class="select-text">格纹,几何,拼色,字母/数字/文字,品牌logo</td>
          </tr>
          <tr>
            <td>适用场景</td>
            <td class="select-text">旅行,宴会,婚礼,休闲,通勤/日常,约会,聚会</td>
          </tr>
          <tr>
            <td>产地</td>
            <td class="select-text">批次不同，产地不同</td>
          </tr>
          <tr>
            <td>适用季节</td>
            <td class="select-text">春季,夏季,秋季,冬季</td>
          </tr>
          <tr>
            <td>适用性别</td>
            <td class="select-text">女性</td>
          </tr>
          <tr>
            <td>流行元素</td>
            <td class="select-text">金属,其它</td>
          </tr>
          <tr>
            <td>风格</td>
            <td class="select-text">优雅,经典,简约,欧美,复古,英伦</td>
          </tr>
          <tr>
            <td>适用人群</td>
            <td class="select-text">女士</td>
          </tr>
          <tr>
            <td>尺寸</td>
            <td class="select-text">26.0 x 26.0 x 17.5 cm</td>
          </tr>
          <tr>
            <td>颜色</td>
            <td class="select-text">黑色，红色</td>
          </tr>
          <tr>
            <td>材质</td>
            <td class="select-text">小牛皮</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="goodspic">
      <h2>商品详情</h2>
      <img src="http://pic12.secooimg.com/imgextra/1/0/53/56/1ZbJzW58d390d87e6843d98f4360476597dd55.jpg" alt="">
      <img src="http://pic12.secooimg.com/imgextra/1/0/10/98/1ZbJzWeb17c386d0c14813a80c7ada9e7506a9.jpg" alt="">
      <img src="http://pic12.secooimg.com/imgextra/1/0/53/49/1ZbJzW51e4320979bb48189b64df0ed63f4283.jpg" alt="">
      <img src="http://pic12.secooimg.com/imgextra/1/0/56/98/1ZbJzW8b52c2d8b6ef4152ba5df2fbea58117f.jpg" alt="">
      <img src="http://pic12.secooimg.com/imgextra/1/0/50/54/1ZbJzW26ce1309e4a54f418deb511cbaf01f79.jpg" alt="">
      <img src="http://pic12.secooimg.com/imgextra/1/0/98/10/1ZbJzWbe459096ae8f426cbb4e6bcb9e0807a8.jpg" alt="">
      <img class="explain" src="http://pic12.secooimg.com/imgextra/1/0/55/55/1ZbJzW77dff0ec3c554395ab804dcb5914ff82.jpg" alt="">
      <img class="insurance" src="https://pic12.secooimg.com/product/common/product-desc/app_price_description-min.png" alt="">
      <img src="https://pic16.secooimg.com/imagesNew/featuresPic/sk_index_171111/tu2@2x.png" alt="">
    </div>
    <div class="introduce">-精品推荐-</div>
    <div class="mod-list">
             <ul class="mod-list-goods">
                 <router-link 
                 :to="item.path"
                 v-for="(item,index) in list" :key="index"
                 tag="li"
                 >
                     <div class="imgContainer">
                         <img :src="item.src" alt="" :id="(index+1)%2==0 ? 'bor':''">
                     </div>
                     <div class="txtContent">
                         <div class="text-first">{{item.text}}</div>
                        <p class="text-second">{{item.text1}}</p>
                        <p class="text-price">{{item.price}}</p>
                        <p class=".text-vipprice">{{item.vipprice}}</p>
                        <p class="text-selfsell">{{item.selfsell}}</p>
                     </div>
                 </router-link>
             </ul>
         </div>
         </div>
         </Bscroll>
         <!-- <router-view /> -->
         <!-- <Bottom/> -->
          <div id="bottom">
        
            <span class="service">
                <img src="../../../public/img/wode.png" alt="">
                <span>客服</span>
            </span>
             <span class="shopbag">
                <img src="../../../public/img/gouwudai.png" alt="">
                <router-link 
                :to="{name:'shopcar',params:{goods:info}}"
                tag="span"
                >购物袋</router-link>
            </span>
            <router-link 
            tag:div
            :to="{name:'shopcar',params:{goods:info}}"
            class="addshop" >加入购物袋</router-link>
            <div class="buy" >立即购买</div>
    </div>
  

  </div>
</template>

<script>
import {mapActions,mapState} from "vuex";
export default {
  name:"Details",
  data() {
    return {
      flag: false,
      info:"",
      pre:"",
      list:[
                {
                    src:"https://pic10.secooimg.com/product/374/374/2019/0525/28f7702c25fd4a79ad68f581edc3f504.png_!!0x0.webp",
                    text:"Louis Vuitton",
                    text1:"【包邮包税】  19年 春夏爆款 女士老花水桶包 黑色/红色内里 斜挎包 M44020  M44021",
                    price:"￥13,702",
                    vipprice:"￥13,427",
                    selfsell:"自营",
                    path:"/details"
                },
                 {
                    src:"https://pic10.secooimg.com/product/374/374/2019/0525/28f7702c25fd4a79ad68f581edc3f504.png_!!0x0.webp",
                    text:"Louis Vuitton",
                    text1:"【包邮包税】  19年 春夏爆款 女士老花水桶包 黑色/红色内里 斜挎包 M44020  M44021",
                    price:"￥13,702",
                    vipprice:"￥13,427",
                    selfsell:"自营",
                    path:"/details"
                },
                 {
                    src:"https://pic10.secooimg.com/product/374/374/2019/0525/28f7702c25fd4a79ad68f581edc3f504.png_!!0x0.webp",
                    text:"Louis Vuitton",
                    text1:"【包邮包税】  19年 春夏爆款 女士老花水桶包 黑色/红色内里 斜挎包 M44020  M44021",
                    price:"￥13,702",
                    vipprice:"￥13,427",
                    selfsell:"自营",
                    path:"/details"
                },
                 {
                    src:"https://pic10.secooimg.com/product/374/374/2019/0525/28f7702c25fd4a79ad68f581edc3f504.png_!!0x0.webp",
                    text:"Louis Vuitton",
                    text1:"【包邮包税】  19年 春夏爆款 女士老花水桶包 黑色/红色内里 斜挎包 M44020  M44021",
                    price:"￥13,702",
                    vipprice:"￥13,427",
                    selfsell:"自营",
                    path:"/details"
                },
                 {
                    src:"https://pic10.secooimg.com/product/374/374/2019/0525/28f7702c25fd4a79ad68f581edc3f504.png_!!0x0.webp",
                    text:"Louis Vuitton",
                    text1:"【包邮包税】  19年 春夏爆款 女士老花水桶包 黑色/红色内里 斜挎包 M44020  M44021",
                    price:"￥13,702",
                    vipprice:"￥13,427",
                    selfsell:"自营",
                    path:"/details"
                },
                 {
                    src:"https://pic10.secooimg.com/product/374/374/2019/0525/28f7702c25fd4a79ad68f581edc3f504.png_!!0x0.webp",
                    text:"Louis Vuitton",
                    text1:"【包邮包税】  19年 春夏爆款 女士老花水桶包 黑色/红色内里 斜挎包 M44020  M44021",
                    price:"￥13,702",
                    vipprice:"￥13,427",
                    selfsell:"自营",
                    path:"/details"
                },
                 {
                    src:"https://pic10.secooimg.com/product/374/374/2019/0525/28f7702c25fd4a79ad68f581edc3f504.png_!!0x0.webp",
                    text:"Louis Vuitton",
                    text1:"【包邮包税】  19年 春夏爆款 女士老花水桶包 黑色/红色内里 斜挎包 M44020  M44021",
                    price:"￥13,702",
                    vipprice:"￥13,427",
                    selfsell:"自营",
                    path:"/details"
                },
                 {
                    src:"https://pic10.secooimg.com/product/374/374/2019/0525/28f7702c25fd4a79ad68f581edc3f504.png_!!0x0.webp",
                    text:"Louis Vuitton",
                    text1:"【包邮包税】  19年 春夏爆款 女士老花水桶包 黑色/红色内里 斜挎包 M44020  M44021",
                    price:"￥13,702",
                    vipprice:"￥13,427",
                    selfsell:"自营",
                    path:"/details"
                }
            ],
      nav: ["商品", "评论", "详情", "推荐"],
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
        },
        {
          src: "../../../public/img/wode.png",
          text: "我的寺库",
          path: "/home"
        }
      ]
    };
  },
  created(){

      this.pre=this.$route.params.info;
      console.log(this.pre)
    if(this.pre!={}){
      this.info=this.pre;
      sessionStorage.setItem("msg",JSON.stringify(this.info));
    }else{
      this.info=JSON.parse(sessionStorage.getItem("msg"));
    }
  
    // this.idKeep();
    // console.log(id)
    // this.id=id;
    // this.getDetailsGoods(this.id);
    // console.log(this.detailGoodsList)
    // console.log(this.detailGoodsList[0].brandCnName);
  },
  mounted() {
    
    // var mySwiper = new Swiper(".swiper-container", {
    //   // direction: 'vertical', // 垂直切换选项
    //   loop: true, // 循环模式选项

    //   // 如果需要分页器
    //   pagination: {
    //     el: ".swiper-pagination"
    //   }
    // });
  },
  computed:{
    ...mapState({
      detailGoodsList:state=>state.more.detailGoodsList,
    })
  },
  methods: {
    ...mapActions({
      getDetailsGoods:"more/getDetailsGoods"
    }),
    clickhandle() {
      this.flag = !this.flag;
    },
    detailsBack(){
      this.$router.back(-1)
    },
    // idKeep(){
    //   var pre="";
    //   if(this.id){
    //     pre=thid.id
    //   }else{
    //     this.id=pre;
    //   }
    // },
    handleto(){
      // let list=this.$refs.list.querySelector(".goodspic");
      // console.log(list.offsetTop);
      //  console.log(list.scrollTop)
      // this.$refs.scroll.handleScrollTop(list.offsetTop);
     
    }
  }
};
</script>

<style scoped>

.nav-wrap {
  width: 100%;
  height: 0.3667rem;
  
}
.nav {
  width: 100%;
  height: 0.3667rem;
  display: flex;
  position:fixed;
  background:white;
  z-index:2;
}
 .scroll_Top{
  overflow: hidden; 
  /* height:3.3333rem; */
 }
.backBtn {
  width: 0.4583rem;
  height: 0.3667rem;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}
.backBtn img {
  width: 0.1917rem;
  height: 0.1917rem;
}
.nav-ul {
  width: 2.3333rem;
  height: 0.3667rem;
  list-style: none;
  display: flex;
  justify-content: space-between;
}
.nav-ul li {
  width: 0.5833rem;
  height: 0.3667rem;
  font-size: 0.1167rem;
  display: flex;
  justify-content: center;
  align-items: center;
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
#rightList {
  width: 0.9583rem;

  z-index: 2;
  position: absolute;
  top: 0.3667rem;
  right: 0rem;
  background: white;
}
#rightList li {
  width: 100%;
  height: 0.4083rem;
  border-bottom: 0.0083rem solid #e1e1e1;
  display: flex;
  justify-content: baseline;
  align-items: center;
  font-size: 0.1167rem;
  color: black;
  font-family: Helvetica Neue;
  z-index: 1;
}
/* .nav-enter, .nav-leave-to{
    height:0rem;
    }
    .nav-leave-active, .nav-enter-active{
             transition: all .3s;
    } */
#rightList-img {
  width: 0.4167rem;
  height: 0.135rem;
  padding-left: 0.1667rem;
  padding-right: 0.0833rem;
}
.text {
  margin-top: 0.1017rem;
  margin-left: 0.0833rem;
}
.swiper-container {
  width: 3.125rem;
  height: 3.125rem;
}
.imgBanner {
  width: 3.125rem;
  height: 3.125rem;
}
.priceContain {
  font-size: 0.2rem;
  color: #000b0b;
  font-weight: bold;
  padding: 0.125rem 0.2083rem 0rem 0.2083rem;
}
.goodsName {
  width: 3.125rem;
  height: 0.5rem;
  padding: 0.125rem 0.2083rem 0rem 0.2083rem;
}
.goodsNmae-name {
  font-size: 0.125rem;
  color: #151515;
  font-weight: bold;
}
.goodsNmae-name span {
  color: #bea474;
}
.carrige {
  width: 3.125rem;
  height: 0.3333rem;
  font-size: 0.1083rem;
  margin: 0.125rem 0.2083rem 0.1875rem;
  margin-top: 30px;
}
.carrige-img {
  width: 2.7083rem;
  height: 0.1417rem;
  color: #1a191e;
  margin-right: 0.1042rem;
  font-size: 0.1083rem;
  display: flex;
}
.carrige-img i {
  margin-right: 0.0833rem;
}
.carrige-img img {
  width: 0.1917rem;
  height: 0.1542rem;
  float: left;
}
.text-nowrap {
  width: 2.7083rem;
  height: 0.1667rem;
  color: #1a191e;
  font-size: 0.1083rem;
  font-size: 0.1083rem;
}
.fenqi {
  width: 100%;
  height: 0.1667rem;
  color: #1a191e;
  font-size: 0.1083rem;
  padding: 0.15rem 0.3958rem 0.15rem 0.2083rem;
  display: flex;
  justify-content: space-between;
  border-top: 0.0083rem solid #504c4c;
  border-bottom: 0.0083rem solid #635f5f;
  align-items: center;
}
.col {
  width: 2.875rem;
  height: 0.3417rem;
  margin: 0.25rem 0.0417rem 0.25rem 0.3417rem;
  font-size: 0.125rem;
  display: flex;
}
.col p {
  width: 54px;
}
.col ul {
  width: 100%;
  list-style: none;
  display: flex;
}
.col ul li {
  float: left;
  width: 0.3917rempx;
  height: 0.2rem;
  border: 0.0083rem solid #ccc;
  margin-right: 0.125rem;
}
.server {
  width: 100%;
  height: 0.7541rem;
  background-color: #fafafa;
   display: flex;
  align-items: center;
}
.server ul {
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 0.2083rem;
  padding-right: 0.2083rem;
}
.server ul li {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
.server ul img {
  width: 0.225rem;
  height: 0.2833rem;
}
.bottom{
    font-size: 0.1083rem;
    margin-left: 0.2083rem;
    margin-right:0.2083rem;
}
.bottom h2 {
  width: 100%;
  margin: 0.25rem 0.2083rem 0.2167rem 0rem ;
  font-size: 0.1708rem;
  color: #1a191e;
}
.bottom table{
    border-collapse: collapse;
}
.product-info{
    line-height: 0.205rem;
}
.p{
    margin:0 0.0833rem;
}
.select-text{
    padding:0.0542rem 0.0625rem 0.0542rem 0rem;
}
.product-info td:first-child {
    padding-right: 0.4rem;
    /* min-width: 5.3333rem; */
    white-space: nowrap;
}
.introduce{
    width:100%;
    height:0.55rem;
    line-height: 0.55rem;
    text-align:center;
    font-size:0.15rem;
}
.mod-list{
        width:100%;
        overflow: hidden;
        padding-bottom: 0.5333rem;
    }
    .mod-list-goods{
        width:100%;
        list-style:none;
    }
    .mod-list-goods li{
        width:1.5625rem;
        height:2.725rem;
        padding-bottom:0.25rem;
        float:left;
    }
    #bor{
        border-right:none ;
    }
    .imgContainer{
        width:1.5583rem;
        height:1.5583rem;
       
    }
    .imgContainer img{
       width:1.5625rem;
       height:1.5583rem;
         border-bottom:0.0167rem solid black;
        border-right:0.0167rem solid black;
    }
    .txtContent{
        width:1.3083rem;
        padding-left:0.125rem;
        padding-right: 0.125rem;
        height:0.9583rem;
    }
    .text-first{
        width:1.3083rem;
        height:0.1292rem;
        margin-top:0.2083rem;
        font-size:100%;
    }
    .text-second{
        width:1.3083rem;
        height:0.1375rem;
        font-size: 100%;
        white-space:nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        margin-top: 0.0333rem;
    }
    .text-price{
        width:1.3083rem;
        height:0.2rem;
        margin-top:0.0833rem;
        font-size: 0.1375rem;
        color:#1c1717;
    }
    .text-vipprice{
        width:1.3083rem;
        height:0.1667rem;
        margin-top:0.0083rem;
        color:#1c1717;
    }
    .text-selfsell{
        width:1.3083rem;
        height:0.1417rem;
        margin-top:0.0583rem;
        font-size: 0.1rem;
        color:#8b572a;
    }
    .goodspic{
      font-size: 0.1083rem;
      margin-left: 0.2083rem;
      margin-right:0.2083rem;
    }
    .goodspic h2{
      width: 100%;
      margin: 0.25rem 0.2083rem 0.2167rem 0rem ;
      font-size: 0.1708rem;
      color: #1a191e;
    }
    .goodspic img{
      width:2.7083rem;
      height:1.3917rem;
    }
    .goodspic .explain{
      width:2.7083rem;
      height:1.8333rem;
    }
    .goodspic .insurance{
      width:100%;
      height:1.75rem;
    }
     #bottom{
        width: 100%;
        height: 0.375rem;
        background: white;
        padding:0.0417rem 0rem 0.0417rem 0.0417rem;
        border-top:0.0083rem solid #ccc;
        display: flex;
        justify-content: center;
        align-items: center;
        color:#fff;
        font-size:.36rem;
        position: fixed;
        left:0;
        bottom:0;
        z-index:2;
    }
    .service{
        width:0.5417rem;
        height:0.2917rem;
        padding-top:0.0542rem;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        font-size: 0.1167rem;
        color:#1a191e;
    }
    .service img {
        width:0.1834rem;
        height:0.1842rem;
    }
     .shopbag img{
        width:0.1834rem;
        height:0.1842rem;
    }
    .shopbag{
        width:0.5417rem;
        height:0.2917rem;
        padding-top:0.0542rem;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        font-size: 0.1167rem;
        color:#1a191e;
    }
    .addshop{
        width:1rem;
        height:0.375rem;
        background:rgb(26, 25, 30);
        line-height: 0.375rem;
        text-align: center;
        font-size: 0.125rem;
        color:white;
    }
    .buy{
        width:1rem;
        height:0.375rem;
        background:#f8a120;
        line-height: 0.375rem;
        text-align: center;
        font-size: 0.125rem;
        color:white;
    }
</style>