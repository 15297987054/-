<template>
    <div>
        <ul>
            <router-link v-for="(item,index) in mans" :key="index"
            :to="{name:'details',params:{info:item}}"
            tag="li"
            >
                <img :src="item.imgUrl" alt="">
                <p>{{item.brandEnName}}</p>
                <p class="title">{{item.name}}</p>
                <p>￥{{item.refPrice}}</p>
                
            </router-link>
        </ul>
    </div>
</template>
<script>
import {europeManApi,europeShoeApi} from "@api/europe"
export default {
    data(){
        return{
           
            mans:[],
        }
    },
    async created(){
        let data =await europeManApi();
        this.mans=data.productList;
        //console.log(this.mans);
        // let data1 =await europeShoeApi();
        
        // console.log(data1);
    },
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
li .title{
     width: 1.554rem;
      height: 0.366rem;
      overflow: hidden;
}
</style>