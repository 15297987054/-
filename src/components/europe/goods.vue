<template>
    <div>
        <ul>
            <router-link 
            tag="li"
            :to="{name:'details',params:{info,item}}"
            v-for="(item,index) in goods" :key="index">
                <img src="item.src" alt="">
                <p>{{item.name}}</p>
                <p>￥{{item.oldprice}}</p>
                <p>￥{{item.nowprice}}</p>
            </router-link>
        </ul>
    </div>
</template>
<script>
export default {
    data(){
        return{
            goods:[
                {name:"巴黎世界/balancejasniasj",oldprice:4480,nowprice:4390,src:"https://pic12.secooimg.com/product/300/300/2019/0813/285da5b24e1547e6a30143386950cb11.jpg_!!0x0.webp"},
                {name:"巴黎世界/balancejasniasj",oldprice:4480,nowprice:4390,src:"https://pic12.secooimg.com/product/300/300/2019/0813/285da5b24e1547e6a30143386950cb11.jpg_!!0x0.webp"},
                {name:"巴黎世界/balancejasniasj",oldprice:4480,nowprice:4390,src:"https://pic12.secooimg.com/product/300/300/2019/0813/285da5b24e1547e6a30143386950cb11.jpg_!!0x0.webp"},
                {name:"巴黎世界/balancejasniasj",oldprice:4480,nowprice:4390,src:"https://pic12.secooimg.com/product/300/300/2019/0813/285da5b24e1547e6a30143386950cb11.jpg_!!0x0.webp"},
                {name:"巴黎世界/balancejasniasj",oldprice:4480,nowprice:4390,src:"https://pic12.secooimg.com/product/300/300/2019/0813/285da5b24e1547e6a30143386950cb11.jpg_!!0x0.webp"},
                {name:"巴黎世界/balancejasniasj",oldprice:4480,nowprice:4390,src:"https://pic12.secooimg.com/product/300/300/2019/0813/285da5b24e1547e6a30143386950cb11.jpg_!!0x0.webp"},
            ]
        }
    }
}
</script>
<style scoped>
ul{
    width: 100%;
    height: 1.75rem;
    overflow: hidden;
}
li{
    list-style: none;
    width: 1.083rem;
    height: 1.583rem;
    background:#F5F5F5;
    float: left;
    margin-right: 0.041rem;
}
li img{
    width:1rem;
    height: 1rem;
}
li p:nth-of-type(1){
  white-space: nowrap;
}
</style>