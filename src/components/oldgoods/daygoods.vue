<template>
  <div>
    <van-swipe :show-indicators="false" :width="120">
      <van-swipe-item v-for="(image, index) in oldgoods" :key="index">
        <img v-lazy="image.imgUrl" />
        <p>{{image.brandEnName}}</p>
        <p>{{image.productName}}</p>
        <p>{{image.tipPrice}}</p>
        <p>{{image.secooPrice}}</p>
      </van-swipe-item>
    </van-swipe>

  </div>
</template>
<script>
import {oldgoodsApi} from "@api/oldgoods" 
export default {
  data() {
    return {
      oldgoods: [
       
        
      ]
    }
  },
  async created(){
      let data= await oldgoodsApi();
      this.oldgoods=data.productList.slice(20,30);
      console.log(this.oldgoods)
  }
};
</script>
<style scoped>

.van-swipe-item{
    width: 1rem;
    height: 0.141rem;
}
.van-swipe-item img{
    width: 0.75rem;
    height: 0.75rem;
    margin: 0 auto;
}
.van-swipe__track{
    height:100%;
}
.van-swipe-item p:nth-of-type(2){
    height:0.166rem;
    overflow: hidden;
    
}
.van-swipe-item p{
    padding-left: 20px;
}
</style>