<template>
  <div class="todyheader">
       <header>
      <ul >
        <li>
          <!-- <span>{{todyheadlist[0].title}}</span>
          <span>{{todyheadlist[0].subTitle}}</span> -->
           <span>轻奢主义</span>
          <span>特价三折起</span>
        </li>
        <li>
          <span>9.12</span>
          <span>抢购中</span>
        </li>
        <li>
          <span>9.13</span>
          <span>即将开始</span>
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
    <Todaygoods />
  </div>
</template>
<script>
import Todaygoods from "@components/todybargin";
import {todyheaderApi} from "@api/todybargin"
export default {
    data(){
        return{
            todyheadlist:[],
        }
    },
  components: {
    Todaygoods
  },

  async created(){
      let data=await todyheaderApi();
      console.log(data);
      this.todyheadlist=data.data.items;
  }

};
</script>
<style scoped>
.todyheader{
  margin: 0.4833rem  0;
 }
header {
  height: 0.4833rem;
  background: #e50000;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10;
}
header ul {
  display: flex;
  height: 100%;
}
header ul li {
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: rgba(255, 255, 255, 0.66);
}
header ul li span:nth-of-type(1) {
  font-size: 0.1417rem;
}
header ul li span:nth-of-type(2) {
  font-size: 0.1rem;
}
</style>



