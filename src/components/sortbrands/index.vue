<template>
    <div class="brand">
        
        <ul>
            <router-link 
            to="/brand"
            tag="li"
            v-for="(item2,index2) in brandsList" :key="index2">
                <p class="brandleft">{{item2.list[0].cnm}}</p>
                <p class="brandright">{{item2.list[0].enm}}</p>
                </router-link>
            
        </ul>
    </div>
    
</template>
<script>

 import {sortbrandsApi} from "@api/sort"
export default {
    data(){
        return{
            brandList:[
                {name:"阿迪达斯",english:"adish"},
                {name:"阿迪达斯1",english:"adish1"},
                {name:"阿迪达斯2",english:"adish2"},
                {name:"阿迪达斯3",english:"adish4"},
                ],
            brandsList:[],  
        }
    }
,
async created(){
        let data=await sortbrandsApi();
        //console.log(data.productList);

        for (var i=0;i<data.productList.length;i++){
           let first=data.productList[i].brandEnName.slice(0,1).toUpperCase();
            this.brandsList.push({index:first,list:[{enm:data.productList[i].brandEnName,cnm:data.productList[i].brandCnName}]})
           
        }
        console.log(this.brandsList)
        console.log(this.brandsList[1].list[0].cnm)
         
    },
 }
</script>
<style scoped>
.brand{
        width: 100%;
        
        padding-top: 0.375rem;
        background-color:#e0dede;
    }
   
    
    .brand li{
        width: 100%;
        height: 0.333rem;
        margin-bottom: 0.008rem;
        background-color: white;
    }
    .brand p{
        width: 50%;
        height: 0.333rem;
        line-height:  0.333rem;
        font-size: 0.1rem;
    }
    
    .brandleft{
        padding-left: 0.093rem;
        float: left;
    }
    .brandright{
       float:right;
       text-align: right;
       padding-right: 0.093rem;
    }
</style>