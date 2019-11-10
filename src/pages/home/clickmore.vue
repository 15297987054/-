<template>
    <div class="clickmore">
        <div>
            <li><img :src="imgicon" alt=""></li>
            <li><h3>{{title}}</h3><p>{{text}}</p><span>点击查看</span></li>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            imgicon:"https://pic12.secooimg.com/res/topic/d9237e60353341988a3d5d28c907855c.jpeg_!!0x0.webp",
            title:"19秋上新｜鄂尔多斯",
            text:"19秋冬 甄选美衣来袭  ERDOS活泼且富有趣味的服装为你开启别样的秋冬时尚！部分商品每满1000减100！",
        }
    }
}
</script>
<style>
    .clickmore{
        background:#f5f5f5;
        height: 3.6rem;
        padding-bottom:0.0833rem; 
    }
    .clickmore img{
        width: 100%;
    }
    .clickmore li:nth-of-type(2){
        padding: 0 0.25rem;
        display: flex;
        flex-direction: column;
        align-items: center
    }
    .clickmore>div{
        /* padding-bottom: 0.19rem; */
        padding-bottom: 0.2583rem;
        background: white;
    }
    .clickmore h3{
        margin: 0.2083rem 0 0;
        color: #1a191e;
        font-size:0.1667rem;
        width: 1.6167rem;
        height: 0.2417rem;
    }
    .clickmore p{
        font-size: 0.1083rem;
        color: #666;
        margin: 0.125rem 0;
    }
    .clickmore span{
        text-align: center;
        line-height: 0.2583rem;
        border: 1px solid #ccc;
        color:  #1c1717;
        font-size: 0.1rem;
        display: inline-block;
        width: 1.0083rem;
        height: 0.2583rem;
    }
</style>