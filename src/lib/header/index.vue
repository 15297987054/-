<template>
    <div id="allheader">
        <div class="back" @click="clickHandlerBack()">返回</div>
        <h2 class="allheader-title">奥莱节-运动/adidas</h2>
        <div>目录</div>
    </div>
</template>
<script>
export default {
    name:"xiao-header",
    methods:{
        clickHandlerBack(){
            this.$router.back();
        }
    }
}
</script>
<style>
    #allheader{
        font-size:0.1042rem;
        height:0.3583rem;
        display:flex;
        justify-content: space-around;
        align-items: center;
    }
    #allheader .allheader-title{
        width: 2.2083rem;
        text-align: center;
    }
    #allheader .back{
        padding: 0.0833rem;
    }
</style>