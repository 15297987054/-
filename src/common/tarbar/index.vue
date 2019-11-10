<template>
    <div class="footer">
        <ul>
            <router-link v-for="(item,index) in tags" :key="index"
            :to="item.path"
            tag="li"
            >
            <i class="iconfont" v-html="item.icon"></i>
            <span>{{item.text}}</span>
            </router-link>
        </ul>
    </div>
</template>
<script>
export default {
    name:"Tabbarindex",
    data(){
        return{
            tags:[
                { icon:"&#xe508;",text:"首页",path:"/home" },
                { icon:"&#xe62c;",text:"品牌",path:"/brand" },
// <<<<<<< HEAD
                { icon:"&#xe604;",text:"分类",path:"/sort" },
                // { icon:"&#xe6d7;",text:"购物袋",path:"/shoppingbag" },
// =======
                // { icon:"&#xe604;",text:"我的",path:"/sort" },
                { icon:"&#xe6d7;",text:"购物袋",path:"/shopcar" },
// >>>>>>> c9cfe97fe1280af3cb7b3c4af0973151513e30e2
                { icon:"&#xe616;",text:"我的",path:"/mine" },

            ]
        }
    }
}
</script>
<style>
    .footer{
        position: fixed;
        width: 100%;
        height: 0.4083rem;
        bottom: 0px;
/* <<<<<<< HEAD */
        background: white;
        border-top:1px solid #ccc; 
        z-index:10;
/* ======= */
        background: #ccc;
        border-top:1px solid #ccc; 
        z-index:2;
/* >>>>>>> c9cfe97fe1280af3cb7b3c4af0973151513e30e2 */
    }
    .footer ul{
        display: flex;
        justify-content: space-around;
        /* align-items: center; */
        height: 100%;
    }
    .footer ul .router-link-active{
        color: orange;
    }
    .footer ul li{
        width: 100%;
        font-size: 0.0667rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
      
</style>