<template>
    <div class="sort">
        <dl v-for="(item,index) in names" :key="index">
            <dt>{{item}}</dt>
            <router-link 
            tag="dd"
            to="/more"
            v-for="(item1,index1) in sortList[index] " :key="index1">{{item1.brandEnName}}</router-link>
        </dl>
    </div>
    
</template>
<script>
import {bagsApi} from "@api/sort"
export default {
    data(){
        return{
            names:["包装袋&Bags","服装宝石&clothes","玩具乐高&games","吃喝玩乐","家居"],
            sortList1:[],
            sortList2:[],
            sortList3:[],
            sortList4:[],
            sortList5:[],
            sortList:[],
        }
    },
    async created(){
        let data=await bagsApi();
        this.sortList1=data.productList.slice(0,8);
        this.sortList2=data.productList.slice(8,16);
        this.sortList3=data.productList.slice(17,25);
        this.sortList4=data.productList.slice(26,34);
        this.sortList5=data.productList.slice(35,40);
        this.sortList.push( this.sortList1);
        this.sortList.push( this.sortList2);
        this.sortList.push( this.sortList3);
        this.sortList.push( this.sortList4);
        this.sortList.push( this.sortList5);
        console.log(this.sortList);
    
    },
}
</script>
<style scoped>
    .sort{
        width: 100%;
        padding-top: 0.375rem;
        background-color:#e0dede;
    }
    dl{
        
        margin-bottom: 0.8rem;;
    }
    .sort dt{
        width: 100%;
        height: 0.266rem;
        text-align: center;
        line-height: 0.266rem;
        font-size: 0.116rem;
       color: #474747;
      
       margin-bottom:0.071rem; 
    }
    .sort dd{
        width:25%;
        
        height: 0.333rem;
        float: left;
        text-align: center;
        background-color: white;
        line-height: 0.333rem;
    }
</style>