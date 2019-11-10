<template>
<div class="sliderbox">
    <div class="swiper-containerslide sliderbanner">
      <div class="swiper-wrapper" >
        <div class="swiper-slide"  v-for="(item,index) in slidelist" :key="index">
            <h2>{{item.title}}<span>{{item.subTitle}}</span></h2>
            <img :src="item.img" alt="">
        </div>
      </div>
    </div>
    <div class="sliderboxfooter"></div>
</div>
</template>
<script>
import {mapState} from "vuex"
export default {
    data(){
        return{ 
        //    slidelist:[
        //        {text:"MEIXIN//美心月饼",icon:"https://pic12.secooimg.com/res/topic/8ef06e1510714bc7bac69e0c70715b75.jpg_!!0x0.webp"},
        //        {text:"MEIXIN//美心月饼",icon:"https://pic12.secooimg.com/res/topic/8ef06e1510714bc7bac69e0c70715b75.jpg_!!0x0.webp"},
        //        {text:"MEIXIN//美心月饼",icon:"https://pic12.secooimg.com/res/topic/8ef06e1510714bc7bac69e0c70715b75.jpg_!!0x0.webp"},
        //        {text:"MEIXIN//美心月饼",icon:"https://pic12.secooimg.com/res/topic/8ef06e1510714bc7bac69e0c70715b75.jpg_!!0x0.webp"},
        //    ]
        }
    },
    computed:{
        ...mapState({
            slidelist:state=>state.home.homebannerswiper,
        })
    },
    mounted(){
       var mySwiper = new Swiper ('.swiper-containerslide', { 
            loop: false,
       })
    }
}
</script>
<style>
    .sliderbox{
        height: 1.9792rem;
        /* background: #f5f5f5; */
    }
    .sliderboxfooter{
        height: 0.0833rem;
        background: #f5f5f5;
    }
    .sliderbanner{
        width: 2.4583rem;
         height: 1.9792rem;
    }
   
    .swiper-slide{
         margin: 0 0.0667rem;
         /* padding-bottom:60px;  */
    }
    .swiper-slide h2{
        padding-top:0.1667rem; 
        font-size: 0.1583rem;
        margin: 0.05rem;
    }
    .swiper-slide img{
        width: 100%;
        margin-bottom: 0.25rem;
    }
</style>