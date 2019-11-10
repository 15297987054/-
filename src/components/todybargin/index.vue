<template>
<div>
      <header>
          <ul>
              <li>
                  <span>奢侈大牌</span>
                  <span>特价三折起</span>
              </li>
              <li>
                  <span>9.11</span>
                  <span>抢购中</span>
              </li>
              <li>
                  <span>奢侈大牌</span>
                  <span>特价三折起</span>
              </li>
              <li>
                  <span>奢侈大牌</span>
                  <span>特价三折起</span>
              </li>
              <li>
                  <span>奢侈大牌</span>
                  <span>特价三折起</span>
              </li>
             
          </ul>
      </header>
  <div class="todyindex">
    <router-link v-for="(item,index) in goodslist" :key="index" class="todybargin"
    :to="{name:'details',params:{info:item}}"
    tag="div"
    >
      <ul class="tody">
        <img :src="item.imgUrl" alt />
        <li class="text">
          <p>{{item.brandEnName}}</p>
          <p>{{item.productName}}</p>
          <p>{{item.refTag}}</p>
          <p>￥ {{item.secooPrice}}</p>
          <p>
            <span>￥ {{item.tipPrice}}</span>
            <span>仅剩{{item.inventory.size}}件</span>
          </p>
          <p>马上抢</p>
        </li>
      </ul>
    </router-link>
  </div>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {};
  },
  created() {
    this.gettodylist();
  },
  methods: {
    ...mapActions({
      gettodylist: "todybargin/todgoodslist"
    })
  },
  computed: {
    ...mapState({
      goodslist: state => state.todybargin.todgoodslist
    })

  }
}
   
</script>
<style scoped>

.todyindex{
  padding-bottom:0.0833rem ;
   background: #f5f5f5;
}
.tody {
  background: white;
  padding: 0.0833rem;
}
header{
    height: 0.4833rem;
    background: #e50000;
}
header ul{
    display: flex;
    height: 100%;

}
header ul li{
    width: 20%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; 
    color: rgba(255, 255, 255, 0.66)
}
header ul li span:nth-of-type(1){
    font-size: 0.1417rem;
}
header ul li span:nth-of-type(2){
    font-size:0.1rem 
}
.tody {
    background: white;
   padding: 0.0833rem;

  display: flex;
  position: relative;
}
.todybargin {
  padding: 0.0833rem 0.0833rem 0;
}
.todybargin img {
  width: 0.8833rem;
  height: 0.8833rem;
  margin-right: 0.0833rem;
     background: #f5f5f5;
    padding: 0.0833rem 0.0833rem 0;
 
  
}
.todybargin img {
  width: 0.8833rem;
  margin-right:0.0833rem;
}
.todybargin li {
  background: white;
}
.tody .text p:nth-of-type(1) {
  font-size: 0.1167rem;
}
.tody .text p:nth-of-type(2) {
  font-size: 0.1083rem;
  width: 1.7833rem;
  height: 0.15rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.tody .text p:nth-of-type(3) {
  margin-top: 0.1625rem;
  font-size: 0.1167rem;
  width: 0.3958rem;
  height: 0.1167rem;
  line-height: 0.1167rem;
  font-size: 12px;
  color: white;
  background: #ff3700;
  border-radius: 14px/7px 14px 14px 0;
}
.tody .text p:nth-of-type(4) {
  font-size: 0.1583rem;
  color: #e50000;
}
.tody .text p:nth-of-type(5) {
  display: flex;
  justify-content: space-between;
}
.tody .text p:nth-of-type(5) span:nth-of-type(1) {
  font-size: 0.0917rem;
  color: #888;
  text-decoration: line-through;
}
.tody .text p:nth-of-type(6) {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 0.625rem;
  height: 0.25rem;
  background: #ff6700;
  color: white;
  position: absolute;
  right: 0.0817rem;
  bottom: 0.225rem;
}
.tody .text p:nth-of-type(5) span:nth-of-type(2) {
  display: inline-block;
  color: #ff6700;
  width: 0.625rem;
  height: 0.125rem;
  text-align: center;
  /* margin-left:0.9rem  */
}
.tody .text p:nth-of-type(1){
    font-size: 0.1167rem;
}
.tody .text p:nth-of-type(2){
    font-size: 0.1083rem;
    width: 1.7833rem;
    height: 0.15rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis
}
.tody .text p:nth-of-type(3){
    margin-top:0.1625rem; 
    font-size: 0.1167rem;
    width: 0.3958rem;
    height: 0.1167rem;
    line-height: 0.1167rem;
    font-size:12px; 
    color: white;
    background: #ff3700;
    border-radius:14px/7px 14px 14px 0 ; 
}
.tody .text p:nth-of-type(4){
    font-size: 0.1583rem;
    color: #e50000;

}
.tody .text p:nth-of-type(5){
    font-size: 0.0917rem;
    color: #888;
    text-decoration: line-through;
}
.tody .text p:nth-of-type(6){
    display: flex;
    align-items: center;
    justify-content: center;
    width: 0.625rem;
    height: 0.25rem;
    background: #ff6700;
    color: white;
    position: absolute;
    right: 0.0817rem;
    bottom:0.225rem
}
.tody .text p:nth-of-type(5) span{
    display: inline-block;
    width: 0.625rem;
    height: 0.125rem;
    text-align: center;
    margin-left:0.97rem 
}
</style>