<template>
      <div class="wrapper" ref="wrapper">
        <slot></slot>
    </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
    name:"Bscroll",
    mounted(){
        this.scroll=new BScroll(this.$refs.wrapper,{
            pullDownRefresh:true,
            pullUpLoad:true,
            tap:true,
            click:true,
            scrollX:true
        });
    },
    methods:{
        handlepullingDown(cb){
            this.scroll.on("pullingDown",()=>{
                cb()
            })
        },
        handlefinishPullDown(){
            this.scroll.finishPullDown();
            this.scroll.refresh();
        },
        handlepullingUp(cb){
            this.scroll.on("pullingUp",()=>{
                cb();
            })
        },
        handlefinishPullUp(){
            this.scroll.finishPullUp();
            this.scroll.refresh();
        },
        handleScrollTop(t){
            this.scroll.scrollTo(0,-t,300)
        }
    }
}
</script>

<style>
.wrapper{
        height: 100%;
    }
</style>