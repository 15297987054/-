<template>
    <div>
        <ul>
            <router-link 
            tag="li"
            :to="{name:'details',params:{info:item}}"
            v-for="(item,index) in oldgoodsList" :key="index">
                <img :src="item.imgUrl" alt="">
                <p>{{item.brandEnName}}</p>
                <p>{{item.productName}}</p>
                <p>￥:{{item.tipPrice}}</p>
                <p>￥:{{item.refPrice}}</p>
            </router-link>
        </ul>
    </div>
</template>
<script>

import {mapState,mapActions} from "vuex"
export default {
    name:"Oldgoods",
    data(){
        return{
           
        }
    },
     created(){
        this.handleOldgoodsList();
        //console.log(111)
    },
    computed:{
        ...mapState({
            oldgoodsList:state=>state.old.oldgoodsList
        }),
    },
    methods:{
        ...mapActions({
            handleOldgoodsList:"handleOldgoodsList"
        })
    },
   
}
</script>
<style scoped>
li{
    float: left;
    width: 1.558rem;
    height: 2.733rem;
    
    margin-bottom: 10px;
}
li img{
    width:1.5625rem;
    height:1.5625rem;
    margin-bottom: 25px;
}
li p{
    width: 100%;
    padding-left:20px;
    font-size: 16px;
}
li p:nth-of-type(2){
    height:0.183rem;
    overflow: hidden;
}
</style>