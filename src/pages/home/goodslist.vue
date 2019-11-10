<template>
     <div class="goodslist">
        <ul v-for="(item,index) in list" :key="index">
            <h3>{{item.title}}</h3>
            <h4>{{item.text}}</h4>
            <img :src="item.icon" />
        </ul>
    </div>
</template>
<script>
export default {
    data(){
            return{
                list:[
                {title:"出行必备|经典包装特惠",text:" 新秀丽ORFEO拉杆箱 849限时秒杀", icon:"https://pic12.secooimg.com/res/topic/a87ce3c3e638400ca2b913827bec78fd.jpg_!!0x0.webp"},
                {title:"出行必备|经典包装特惠",text:" 新秀丽ORFEO拉杆箱 849限时秒杀", icon:"https://pic12.secooimg.com/res/topic/a87ce3c3e638400ca2b913827bec78fd.jpg_!!0x0.webp"},
                {title:"出行必备|经典包装特惠",text:" 新秀丽ORFEO拉杆箱 849限时秒杀", icon:"https://pic12.secooimg.com/res/topic/a87ce3c3e638400ca2b913827bec78fd.jpg_!!0x0.webp"},
            ],
            }
    }
}
</script>
<style>
     .goodslist{
/* <<<<<<< HEAD */
        /* padding:0.0833rem 0 0.01rem 0;  */
/* ======= */
        padding:0.0833rem 0; 
/* >>>>>>> c9cfe97fe1280af3cb7b3c4af0973151513e30e2 */
        background: #f5f5f5;
    }
    .goodslist >ul{
     padding: 0.1667rem 0.125rem ;
     background: white;
     margin-bottom:0.0833rem; 
    }
    .goodslist img{
        width: 100%;
    }
    .goodslist h3{
        width: 2.1rem;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        font-weight: bolder;
        font-size: 0.1583rem;
        margin-bottom: 0.0167rem;
    }
    .goodslist h4{
        margin-bottom:0.125rem; 
    }
</style>