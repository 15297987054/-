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
                {enm:"I8484864ewcwIUSD",nm:"就是那我可",oldprice:7851,nowprice:6542,src:"https://pic12.secooimg.com/product/300/300/2019/0819/c53e262e59dd411caba48ff15efb89b9.jpg_!!0x0.webp"},
                {enm:"IqerqerSD",nm:"就是那我可",oldprice:7851,nowprice:6542,src:"https://pic12.secooimg.com/product/300/300/2019/0819/c53e262e59dd411caba48ff15efb89b9.jpg_!!0x0.webp"},
                {enm:"IUSIUIUSD",nm:"就是那我可",oldprice:7851,nowprice:6542,src:"https://pic12.secooimg.com/product/300/300/2019/0819/c53e262e59dd411caba48ff15efb89b9.jpg_!!0x0.webp"},
                {enm:"IUSqweqwSD",nm:"就是那我可",oldprice:7851,nowprice:6542,src:"https://pic12.secooimg.com/product/300/300/2019/0819/c53e262e59dd411caba48ff15efb89b9.jpg_!!0x0.webp"},
                {enm:"IqweqeSD",nm:"就是那我可",oldprice:7851,nowprice:6542,src:"https://pic12.secooimg.com/product/300/300/2019/0819/c53e262e59dd411caba48ff15efb89b9.jpg_!!0x0.webp"},
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