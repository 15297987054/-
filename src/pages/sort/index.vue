<template>
    <div>
       <div class="nav">
    <div class="goback" @click="handleGoback()">
      <img src="//mpic.secooimg.com/zhuanti_pic/back@3x_go.png" />
    </div>
    <ul>
      <router-link
        :to="item.path"
        v-for="(item,index) in arr"
        :key="index"
          tag="li"
      >{{item.name}}</router-link>
    </ul>
    <div class="gohome" @click="handleGohome()">
      <img src="//mpic.secooimg.com/zhuanti_pic/index@3x1.png" />
    </div>
    
    
  </div>
  <router-view></router-view>
    </div>
</template>
<script>
export default {
    data() {
        return {
            arr: [{name:"分类",path:"/sort/sorttype"},{name:"品牌",path:"/sort/sortbrands"}],
     
    };
    },
    methods:{
        handleGoback(){
            this.$router.back();
        },
        handleGohome(){
            this.$router.push("/home");
        },
    }

}
</script>
<style scoped>
.nav {
  width: 100%;
  height: 0.375rem;
background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
   position: fixed;
        left:0;
        top: 0;
}
.goback img {
  width: 0.15rem;
  height: 0.15rem;
  margin: 0 auto;
}

.goback,
.gohome {
  width: 0.375rem;
  height: 0.375rem;
  padding-top: 0.108rem;
}
.gohome img {
  width: 0.166rem;
  height: 0.166rem;
  margin: 0 auto;
}
ul li {
  width: 1.175rem;
  height: 0.233rem;
  float: left;
  line-height: 0.233rem;
  text-align: center;
  font-size: 0.13rem;
}
.active {
  background: #474747;
  color: aliceblue;
}
.router-link-active{
    color:white;
    background:#474747;
}
</style>