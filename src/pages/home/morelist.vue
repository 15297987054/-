<template>
<div>
    <Updategoodslisr />
    <Clickmore />
    <Popularbrand/>
    <Goodslist/>
</div>
   
</template>
<script>
import Goodslist from "./goodslist"
import Clickmore from "./clickmore"
import Popularbrand from "./popularbrand"
import Updategoodslisr from "./updatagoodslisr"
export default {
    data(){
        return{
            list:[
                {title:"出行必备|经典包装特惠",text:" 新秀丽ORFEO拉杆箱 849限时秒杀", icon:"https://pic12.secooimg.com/res/topic/a87ce3c3e638400ca2b913827bec78fd.jpg_!!0x0.webp"},
                {title:"出行必备|经典包装特惠",text:" 新秀丽ORFEO拉杆箱 849限时秒杀", icon:"https://pic12.secooimg.com/res/topic/a87ce3c3e638400ca2b913827bec78fd.jpg_!!0x0.webp"},
                {title:"出行必备|经典包装特惠",text:" 新秀丽ORFEO拉杆箱 849限时秒杀", icon:"https://pic12.secooimg.com/res/topic/a87ce3c3e638400ca2b913827bec78fd.jpg_!!0x0.webp"},
            ],
            list1:[
                {title:"GIUSEPPE ZANOTTI FW19全新系列",text:"新品会员尊享价 更有经典款运动鞋5折GET", icon:"https://pic12.secooimg.com/res/topic/7c48717451df4702adc970e98f0fd3cb.jpeg_!!0x0.webp"},
                {title:"GIUSEPPE ZANOTTI FW19全新系列",text:"新品会员尊享价 更有经典款运动鞋5折GET", icon:"https://pic12.secooimg.com/res/topic/7c48717451df4702adc970e98f0fd3cb.jpeg_!!0x0.webp"},
                {title:"GIUSEPPE ZANOTTI FW19全新系列",text:"新品会员尊享价 更有经典款运动鞋5折GET", icon:"https://pic12.secooimg.com/res/topic/7c48717451df4702adc970e98f0fd3cb.jpeg_!!0x0.webp"},
            ]
        }
    },
    components:{
        Clickmore,
        Popularbrand,
        Goodslist,
        Updategoodslisr,
    }
}
</script>
<style>
    .morelist{
        margin-top:0.0833rem; 
        background: #f5f5f5;
    }
    .morelist >ul{
     padding: 0.1667rem 0.125rem ;
     background: white;
     margin-bottom:0.0833rem; 
    }
    .morelist img{
        width: 100%;
    }
    .morelist h3{
        width: 2.1rem;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        font-weight: bolder;
        font-size: 0.1583rem;
        margin-bottom: 0.0167rem;
    }
    .morelist h4{
        margin-bottom:0.125rem; 
    }
</style>