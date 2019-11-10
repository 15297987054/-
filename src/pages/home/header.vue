<template>
  <header>
    <router-link to="/homesport" tag="div" class="swiper-container">
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <img class="carouseimg" v-lazy="image.img" />
        </van-swipe-item>
      </van-swipe>
    </router-link>
  </header>
</template>
<script>
import {mapState} from "vuex"
export default {
  name: "Header",
  data() {
    return {
      // images:[],
      carouselist: []
    };
  },
  computed:{
    ...mapState({
      images:state=>state.home.homecarouseimg,
    })
  },
}
</script>




<style >

.swiper-container {
  width: 100%;
  background: #ccc;
  height: 2.7083rem;
}
.swiper-container .van-swipe{
  width: 100%; 
   height: 100%;
}
.swiper-container .van-swipe .van-swipe__track {
  width: 100%;
  height: 100%;
  display: flex;
}
.carouseimg{
  width: 100%;
}
/* .van-swipe__indicator{
  width: 10px;
  height: 10px;
} */



.swiper-container {
    width: 100%;
    background: #ccc;
    height: 2.7083rem;
}  

</style>