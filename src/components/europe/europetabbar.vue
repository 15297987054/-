<template>
    <div class="europetabbar">
        <ul>
          
                <router-link 
            :to="item.path" tag="li"
            v-for="(item,index) in shop" :key="index">
                {{item.name}}
            </router-link>
        </ul>
    </div>
</template>
<script>

export default {
    data(){
        return{
            shop:[{name:"海外直邮",path:"/europe"},
            {name:"实力探店",path:"/europeshop"},
            ]
        }
    }
}
</script>
<style scoped>
    li{
        list-style: none;
        float: left;
        width: 1.5625rem;
        height:0.4rem;
        text-align: center;
        line-height: 0.4rem;
        background:white;
        font-size: 16px;
    }
    .europetabbar{
        position: fixed;
        left:0;
        bottom:0;
    }
   .router-link-active{
    color:purple;
    
}
</style>