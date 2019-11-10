<template>
    <div class="search">
        <div class="searchinput">
            <input type="text" placeholder="美满" >
            <router-link 
                to="/home"
                tag="span"
            >取消</router-link>
        </div>
      
        <div class="searchhotsale">
            <h2 class="searchtitle"> 热销推荐</h2>
            <ul class="title">
                <li>优酷联名卡</li>
                <li>美酒节</li>
                
            </ul>
            <ul class="searchrecode">
                <li @click="clickSearchHandler($event)" v-for="(item,index) in list" :key="index">{{item}}</li>
            </ul>
        </div>
        <div class="searchinfo" v-if="flag">
            <h2>搜索历史<span class="searchdelet">删除</span></h2>
             <ul class="searchList" >
                 <li v-for="(item,index) in searchlist " :key=index>{{item}}</li>
             </ul>
        </div>
        <Hotsale />
    </div>
</template>
<script>
import Hotsale from "@pages/home/hotsale";
export default {
    name:"Search",
    data(){
        return{
            flag:false,
            searchlist:[],
            list:["Apple","戴森","SKII","Estee Lauder","Lv女包","Gucci女包",]
        }
    },
    components:{
        Hotsale,
    },
    created(){

    },
    methods:{
        clickSearchHandler(e){
            if(this.searchlist.length>0){
                this.flag=true;
            }
            var text=e.target.innerHTML;
            this.searchlist.push(text);
        }
    }
    
}
</script>
<style scoped>
.search{
    margin-top: 0.4333rem;
}
.searchinput{
    position: fixed;
    top: 0;
    background:white;
    padding: 0.1rem 0 0.1rem 0.125rem  
}
.searchinput input 
{   
   
    background: #f5f5f5;
    border: 0px solid #ccc;
    width:2.4583rem;
    height: 0.2667rem;
    padding:0 0.4333rem 0 0.2667rem
}
.searchinput span{
    font-size: 0.125rem;
    padding: 0.133rem;
}
.searchhotsale{
    font-size: 0.1083rem;
    padding: 0 0rem 0.0833rem;;
    background: #f5f5f5;
}
.searchtitle{
    background: white;
   padding: 0.0833rem  0.125rem  0.125rem;
   font-size:0.125rem;
   font-weight: normal;
   color: #1c1717; 
}
.title{
    background: white;
    display: flex;
    justify-content: space-around;
}
.title li{
    width: 1.4rem;
    height: 0.2917rem;
   text-align: center;
    line-height: 0.2917rem;
    border: 1px solid red;
}
.searchrecode{
    /* height:0.775rem; */
    padding:0 0.125rem;
    background: white;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding-bottom: 0.1417rem;
}  
.searchrecode li{
    text-align: center;
    line-height: 0.25rem;
    width: 0.9rem;
    height: 0.25rem;
    margin-top: 0.0633rem;
    background: #f8f8f8;
}
.searchinfo{
    background: #f5f5f5;
    padding-bottom: 0.0833rem;
}
.searchinfo h2{
     padding: 0.1667rem 0.125rem 0.125rem;
     background: white;
     font-size: 0.125rem;
     font-weight: normal;
}
.searchinfo h2 .searchdelet{
    margin-left:2.05rem; 
}
.searchList{
    background: white;
    padding: 0 0.125rem 0.1417rem;
    display: flex;
    padding: 0 0.125rem;
    flex-wrap: wrap;
}
.searchList li{
    padding: 0.0833rem;
    margin-bottom:0.0833rem; 
    background: #f5f5f5;
    margin-right:0.0833rem; 
}
</style>

