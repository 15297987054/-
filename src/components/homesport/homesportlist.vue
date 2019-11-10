<template>
  <div class="homesportlist">

          <router-link v-for="(item,index) in goodslist" :key="index"
          :to="{name:'details',params:{info:item}}"
          tag="div"
          >
            <div class="homesportlistimg"> <img :src="item.imgUrl" alt=""></div>
            <div class="goodsinfo">
                <P>{{item.brandCnName}}</P>
                <P>{{item.productName}}</P>
                <P>¥ {{item.refPrice}}</P>
                <P>¥ {{item.tipPrice}}</P>
                <P>立即购买</P>
            </div>
          </router-link>
  </div>  
</template>
<script>
import {todygoodslistApi} from "@api/todybargin"
export default {
    data(){
        return{
            // goodslist:[
            //     {icon:"https://pic12.secooimg.com/product/300/300/2019/0801/ae5cb3c1954041d38238657830981199.jpg_!!0x0.webp",title:"Swarovski",text:"SWAROVSKI/施华洛世奇 DUOEVILEYE 女士玫瑰金色恶魔之眼吊坠项链5172560",pirce:"389",oldprice:"563"},
            //     {icon:"https://pic12.secooimg.com/product/300/300/2019/0801/ae5cb3c1954041d38238657830981199.jpg_!!0x0.webp",title:"Swarovski",text:"SWAROVSKI/施华洛世奇 DUOEVILEYE 女士玫瑰金色恶魔之眼吊坠项链5172560",pirce:"389",oldprice:"563"},
            //     {icon:"https://pic12.secooimg.com/product/300/300/2019/0801/ae5cb3c1954041d38238657830981199.jpg_!!0x0.webp",title:"Swarovski",text:"SWAROVSKI/施华洛世奇 DUOEVILEYE 女士玫瑰金色恶魔之眼吊坠项链5172560",pirce:"389",oldprice:"563"},
            //     {icon:"https://pic12.secooimg.com/product/300/300/2019/0801/ae5cb3c1954041d38238657830981199.jpg_!!0x0.webp",title:"Swarovski",text:"SWAROVSKI/施华洛世奇 DUOEVILEYE 女士玫瑰金色恶魔之眼吊坠项链5172560",pirce:"389",oldprice:"563"},
            //     {icon:"https://pic12.secooimg.com/product/300/300/2019/0801/ae5cb3c1954041d38238657830981199.jpg_!!0x0.webp",title:"Swarovski",text:"SWAROVSKI/施华洛世奇 DUOEVILEYE 女士玫瑰金色恶魔之眼吊坠项链5172560",pirce:"389",oldprice:"563"},
            //     {icon:"https://pic12.secooimg.com/product/300/300/2019/0801/ae5cb3c1954041d38238657830981199.jpg_!!0x0.webp",title:"Swarovski",text:"SWAROVSKI/施华洛世奇 DUOEVILEYE 女士玫瑰金色恶魔之眼吊坠项链5172560",pirce:"389",oldprice:"563"},
            // ]
            goodslist:[],
        }
    },
    async created(){
        let data =await todygoodslistApi();
        console.log(data);
        this.goodslist=data.productList
    }
}   


</script>
<style>
.homesportlist{
    padding :0rem  0.125rem 0.2083rem 0.125rem; 

}
.homesportlist>div{
    padding:0.2083rem 0;
    display: flex;
    border-bottom: 1px solid #ccc; 

}
.homesportlist .homesportlistimg img{
    width: 1.0833rem;
    height: 1.0833rem;
    margin-right:0.0833rem; 
}
.homesportlist .goodsinfo p:nth-of-type(2){
    font-family: "PingFangSC-Light";
    padding: 0.0417rem 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width:1.6667rem
}
.homesportlist .goodsinfo p:nth-of-type(3){
        font-family: STHeiti,Helvetica Neue;
        font-size: 0.15rem;
        color:#1C1717;
}
.homesportlist .goodsinfo p:nth-of-type(4){
        color: #ccc;
        text-decoration: line-through;
        margin: 0.0333rem 0 0.1042rem 0 ;
}
.homesportlist .goodsinfo p:nth-of-type(5){
    display: inline-block;
        padding:0.0625rem 0.2083rem;
        border: 1px solid #1C1717;
}
</style>