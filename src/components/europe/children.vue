<template>
    <div>
        <ul>
            <li v-for="(item,index) in man" :key="index">
                <img :src="item.src" alt="">
                <p>{{item.enm}}</p>
                <p>{{item.nm}}</p>
                <p>￥{{item.oldprice}}</p>
                <p>￥{{item.nowprice}}</p>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data(){
        return{
            man:[
                {enm:"489489498D",nm:"就是那我可",oldprice:7851,nowprice:6542,src:"https://pic12.secooimg.com/product/300/300/52/98/4b95397b72284d219526d7834c2bd5d2.jpg_!!0x0.webp"},
                {enm:"684ew89489D",nm:"就是那我可",oldprice:7851,nowprice:6542,src:"https://pic12.secooimg.com/product/300/300/52/98/4b95397b72284d219526d7834c2bd5d2.jpg_!!0x0.webp"},
                {enm:"IU8qw4e89489SD",nm:"就是那我可",oldprice:7851,nowprice:6542,src:"https://pic12.secooimg.com/product/300/300/52/98/4b95397b72284d219526d7834c2bd5d2.jpg_!!0x0.webp"},
                {enm:"IUSIUIUSD",nm:"就是那我可",oldprice:7851,nowprice:6542,src:"https://pic12.secooimg.com/product/300/300/52/98/4b95397b72284d219526d7834c2bd5d2.jpg_!!0x0.webp"},
                {enm:"IUSIUIUSD",nm:"就是那我可",oldprice:7851,nowprice:6542,src:"https://pic12.secooimg.com/product/300/300/52/98/4b95397b72284d219526d7834c2bd5d2.jpg_!!0x0.webp"},
            ]
        }
    }
}
</script>
<style scoped>
li{
    float:left;
    width: 1.554rem;
    height:2.983rem;
    margin-bottom: 0.125rem;
}
li img {
    width: 1.558rem;
    height: 1.558rem;
    margin-bottom: 0.208rem;
}
li p{
    width: 1.554rem;
    padding-left:0.375rem;
    height: 0.183rem;
    font-size: 16px;
}
</style>