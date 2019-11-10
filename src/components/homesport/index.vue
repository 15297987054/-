<template>
    <div class="home-sport">
        <xiao-header />
        <div class="home-sport-banner">
            <img src="https://pic12.secooimg.com/res/topic/4a8c5ff4b7b4420681a0c939a6beaff0.jpg_!!0x0.webp" alt="">
        </div>
        <div class="home-sport-sale">
            <h4>距离特卖结束还剩</h4>
            <ul>
                <li>06</li>&nbsp;:&ensp;
                <li>05</li>&nbsp;:&nbsp;
                <li>04</li>
            </ul>
        </div>
        <Homesport />
        <!-- <router-view /> -->
    </div>
</template>
<script>
import Homesport from "./homesportlist"
export default {
    name:"Homesportindex",
    components:{
        Homesport,
    }
}
</script>
<style>
    .home-sport-banner img{
        width: 100%;
    }
    .home-sport-sale{
        display: flex;
        flex-direction: column;
       justify-content: center;
        text-align: center;
        height:0.625rem;
        font-size: 0.125rem;
    }
    .home-sport-sale ul{
        display: flex;
        justify-content: center;
    }
    .home-sport-sale ul li{
        color: white;
        width: 0.2083rem;
        height: 0.2rem;
        background: black;
    }
</style>