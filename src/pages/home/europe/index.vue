<template>
  <div>
    <div class="nav">
      <div class="goback" @click="handleGoback()">
        <img src="//mpic.secooimg.com/zhuanti_pic/back@3x_go.png" />
      </div>
      
        <p>欧洲直邮</p>
     
      <div class="gohome" @click="handleAppear()">
        <img src="//mpic.secooimg.com/zhuanti_pic/index@3x1.png" />
      </div>
    </div>

   <div>
        <Swiper/>
   </div>
   <div class="banner1"> 
       <img src="https://pic12.secooimg.com/res/topic/349c5eb116cc4116b03931d18e77e468.jpg_!!0x0.webp" alt="">
   </div>
   <div>
       <Daygoods/>
   </div>
     <div class="banner2"> 
       <img src="https://pic12.secooimg.com/res/topic/349c5eb116cc4116b03931d18e77e468.jpg_!!0x0.webp" alt="">
   </div>
   <div class="sorts">
       <img src="https://pic12.secooimg.com/res/topic/7b9d20af780c4025a24994e244671a71.jpg_!!0x0.webp" alt="">
       <img src="https://pic12.secooimg.com/res/topic/9dc05f99fec04c8493ea49e7927274fe.jpg_!!0x0.webp" alt="">
   </div>
   <div class="banner3">
       <img src="https://pic12.secooimg.com/res/topic/ca616052434541589240807753ce5f39.jpg_!!0x0.webp" alt="">
       <p>热卖爆款</p>
       <p>看看欧洲在卖什么</p>
   </div>
   
       <ul class="type">
           <li v-for="(item1,index1) in types" :key="index1">
               <img :src="item1.src" alt="">
               <p>{{item1.name}}</p>
           </li>
       </ul>
   <ul  class="active">
       <li v-for="(item2,index2) in active" :key="index2">
           <img :src="item2.src" alt="">
           <p>{{item2.name}}</p>
       </li>
   </ul>
   
       <img class="fenge" src="https://pic12.secooimg.com/res/topic/9dc05f99fec04c8493ea49e7927274fe.jpg_!!0x0.webp" alt="">
   
   <div class="eroupeGoods">
       <ul>
           <li @click="handleMan()" >商品预览</li>
       </ul>
       <Man v-if="appear1"/>
      
   </div>
   <Europetabbar/>
  </div>
</template>
<script>
import Daygoods from "@components/oldgoods/daygoods"

import Swiper from "@components/europe/swiper"
import Goods from "@components/europe/goods"
import Man from "@components/europe/man"
import Woman from "@components/europe/woman"
import Children from "@components/europe/children"
import Europetabbar from "@components/europe/europetabbar"
export default {
    name:"Europe",
    data(){
        return{
            flag:false,
            types:[
                {name:"皮包",src:"https://pic12.secooimg.com/res/topic/14153f4478394235840977104c1a2ff5.png_!!0x0.webp"},
                {name:"皮包",src:"https://pic12.secooimg.com/res/topic/14153f4478394235840977104c1a2ff5.png_!!0x0.webp"},
                {name:"皮包",src:"https://pic12.secooimg.com/res/topic/14153f4478394235840977104c1a2ff5.png_!!0x0.webp"},
                {name:"皮包",src:"https://pic12.secooimg.com/res/topic/14153f4478394235840977104c1a2ff5.png_!!0x0.webp"},
                {name:"皮包",src:"https://pic12.secooimg.com/res/topic/14153f4478394235840977104c1a2ff5.png_!!0x0.webp"},
                {name:"皮包",src:"https://pic12.secooimg.com/res/topic/14153f4478394235840977104c1a2ff5.png_!!0x0.webp"},
            ],
            active:[
                {name:"凉鞋清仓",src:"https://pic12.secooimg.com/res/topic/d5de1f40cb3c48349aed69cdae7aedde.jpg_!!0x0.webp"},
                {name:"凉鞋清仓",src:"https://pic12.secooimg.com/res/topic/d5de1f40cb3c48349aed69cdae7aedde.jpg_!!0x0.webp"},
                {name:"凉鞋清仓",src:"https://pic12.secooimg.com/res/topic/d5de1f40cb3c48349aed69cdae7aedde.jpg_!!0x0.webp"},
            ],
           appear1:true,
           appear2:true,
           appear3:true,
        }
    },
    methods:{
        handleGoback(){
            this.$router.back();
        },
        handleAppear(){
            this.flag=!this.flag;
        },
        handleMan(){
            console.log(111);
             this.apper1=true;
            this.apper2=false;
            this.apper3=false;
        },
        handleWoman(){
            console.log(222);
            this.apper1=false;
            this.apper2=true;
            this.apper3=false;
        },
        handleChildren(){
            console.log(333);
            this.apper1=false;
            this.apper2=false;
            this.apper3=true;
        }
    },
    components:{
        Swiper,
        Goods,
        Man,
        Woman,
        Children,
        Europetabbar,
        Daygoods
    }
};
</script>
<style scoped>
.nav {
  width: 100%;
  height: 0.375rem;
background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
   position: fixed;
        left:0;
        top: 0;
        z-index: 2;
}
.goback img {
  width: 0.15rem;
  height: 0.15rem;
  margin: 0 auto;
}

.goback,
.gohome {
  width: 0.375rem;
  height: 0.375rem;
  padding-top: 0.108rem;
}
.gohome img {
  width: 0.166rem;
  height: 0.166rem;
  margin: 0 auto;
}
p {
  width: 1.175rem;
  height: 0.233rem;
  float: left;
  line-height: 0.233rem;
  text-align: center;
  font-size: 0.13rem;
}
.box{
    width: 1.108rem;
    height:1.25rem;background:pink;
    position:relative;
    top:0.375rem;
    left: 2rem;
    z-index: 3;
}
.box li{
    width:1.108rem;
    height: 0.416rem;
    font-size:20px;
    line-height: 0.416rem;
    text-align: center;
}
.move-leave-to,.move-enter{
      top:-1.25rem;
    }
    .move-leave-active,.move-enter-active{
      transition: all 2s;
    }
.banner1 img{
    width:100%;
    height:0.708rem;
}   

.banner2 img{
     width:100%;
     height: 0.708rem;
}
.sorts img{
    width:100%;
    
}
.banner3{
    width: 100%;
    height: 2rem;
    /* background:pink; */
    /* background-image: url(https://pic12.secooimg.com/res/topic/ca616052434541589240807753ce5f39.jpg_!!0x0.webp) n0-repeat; */
}
.banner3 img{
    width: 100%;
    height: 2rem;
}
.banner3 p:nth-of-type(1){
    position:relative;
    top:-1.726rem;
    left:1.041rem;
    color:white;
    font-size: 25px;
}
.banner3 p:nth-of-type(2){
    position:relative;
    top:-1.526rem;
    left:-20px;
    color:white;
    font-size: 15px;
}
.type{position: relative;
top:-1rem;
left:0.166rem;
      width:2.791rem;
    height: 1.75rem;
    background: white;
}

.type li{
    float: left;
    width: 0.833rem;
    height:0.791rem;
    text-align: center;
     background: white;
     margin-bottom: 0.041rem;
}
.type li img{
    width:0.625rem;
    height:0.625rem;
    margin: 0 auto;
}
.type li p {
      width: 0.833rem;
    
    text-align: center;
     margin: 0 auto;
}
.active{
    width: 100%;
    height: 1.25rem;
    position: relative;
    top:-70px;
    display: flex;
    justify-content: space-around;
    position:none;
}
.active li{
    text-align: center;
    width:0.708rem;
    height: 0.941rem;
}
.active img{
    width: 0.708rem;
    height: 0.708rem;
    border-radius: 50px;
}
.active p{
    text-align: center;
    width:0.708rem;
    
}
.fenge{
    width: 100%;
  position: relative;
  top:-100px;
}
.eroupeGoods{
    position: relative;
    top:-120px;
}
.eroupeGoods ul{
    width: 100%;
    height: 0.416rem;
}
.eroupeGoods li{
    float: left;
    width:100%;
    height: 0.416rem;
    text-align: center;
    background:#1C1717;
    color:white;
    line-height: 0.416rem;
    font-size: 20px;
}
</style>