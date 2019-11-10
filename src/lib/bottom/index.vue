<template>
    <div id="bottom">
        
            <span class="service">
                <img src="../../../public/img/wode.png" alt="">
                <span>客服</span>
            </span>
             <span class="shopbag">
                <img src="../../../public/img/gouwudai.png" alt="">
                <router-link 
                to="/shopcar"
                tag="span"
                >购物袋</router-link>
            </span>
            <div class="addshop" >加入购物袋</div>
            <div class="buy" >立即购买</div>
    </div>
</template>
<script>
export default {
    name:"Bottom",
   
}
</script>

<style scoped>
    #bottom{
        width: 100%;
        height: 0.375rem;
        background: white;
        padding:0.0417rem 0rem 0.0417rem 0.0417rem;
        border-top:0.0083rem solid #ccc;
        display: flex;
        justify-content: center;
        align-items: center;
        color:#fff;
        font-size:.36rem;
        position: fixed;
        left:0;
        bottom:0;
        z-index:2;
    }
    .service{
        width:0.5417rem;
        height:0.2917rem;
        padding-top:0.0542rem;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        font-size: 0.1167rem;
        color:#1a191e;
    }
    .service img {
        width:0.1834rem;
        height:0.1842rem;
    }
     .shopbag img{
        width:0.1834rem;
        height:0.1842rem;
    }
    .shopbag{
        width:0.5417rem;
        height:0.2917rem;
        padding-top:0.0542rem;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        font-size: 0.1167rem;
        color:#1a191e;
    }
    .addshop{
        width:1rem;
        height:0.375rem;
        background:rgb(26, 25, 30);
        line-height: 0.375rem;
        text-align: center;
        font-size: 0.125rem;
        color:white;
    }
    .buy{
        width:1rem;
        height:0.375rem;
        background:#f8a120;
        line-height: 0.375rem;
        text-align: center;
        font-size: 0.125rem;
        color:white;
    }
</style>