<template>
    <div class="banner">
            <img :src="this.$store.state.home.homebannerimg1" alt="">
            <img :src="this.$store.state.home.homebannerimg2" alt="">

            <!-- <img v-for="(item,index) in bannerimg" :key="index" 
            :src="item.icon" alt=""> -->

           
    </div>
</template>

<script>
export default {
    data(){
        return{

          


        }
    }
}
</script>
<style>
.banner{
    padding:0.0625rem 0; 
    background: #f5f5f5;
}
.banner img{
   width: 100%;
   margin-bottom:0.0625rem; 
}
.banner img:nth-of-type(2){
    margin-bottom:0; 
}
</style>