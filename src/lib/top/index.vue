<template>
  <div>
    <div class="line"></div>
    <el-menu  
     style="width:100%"
    v-show="loginMsg"
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item index="1">管理中心</el-menu-item>
    </el-menu>
    <el-container style="height: 500px; border: 1px solid #eee">
      <el-aside  v-show="loginMsg" width="200px" style="background-color: rgb(238, 241, 246)">
        <el-menu :default-openeds="['1', '3']">
          <div @click="clickRouteHome">
          <el-submenu index="1">
            <template slot="title"  >
              <i class="el-icon-message"></i>上传图书
            </template>
          </el-submenu>
          </div>
          <div @click="clickRouteBooks">
            <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-menu"></i>图书管理
            </template>
          </el-submenu>
          </div>
          <div @click="clcikRouteFuwenben">
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-setting"></i>创作图书
            </template>
          </el-submenu>
          </div>
        </el-menu>
      </el-aside>
      <router-view  @parentShow="show"></router-view>
          <!-- <el-row  id="center">
  <el-col  :span="8" v-for="(o, index) in arr" :key="o" :offset="index > 0 ? 2 : 0" style="margin-left:40px;">
    <el-card style="width:187px;height:285px;" :body-style="{ padding: '0px' }">
      <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
      <div style="padding: 14px;">
        <span>好吃的汉堡</span>
        <div class="bottom clearfix">
         
            <el-button type="primary" @click="addBooks" style="width:60px;text-align:center;padding-left:0px;padding-right:0;">添加</el-button>
            <el-button type="success" @click="delBooks" style="width:60px;text-align:center;padding-left:0px;padding-right:0;">删除</el-button>
        </div>
      </div>
    </el-card>
  </el-col>
</el-row> -->
    </el-container>
  </div>
</template>

<script>
export default {
  name: "Top",
  data() {
    return {
        arr:4,
    currentDate: new Date(),
      activeIndex: "1",
      activeIndex2: "1",
      loginMsg:true
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    delBooks(){
        this.arr=this.arr-1;
    },
    addBooks(){
        this.arr=this.arr+1;
    },
    open() {
        this.$alert('这是一段内容', '标题名称', {
          confirmButtonText: '确定',
          callback: action => {
            this.$message({
              type: 'info',
              message: `action: ${ action }`
            });
          }
        });
      },
      clickRouteHome(){
        this.$router.push("/home")
      },
      clickRouteBooks(){
        this.$router.push("/books")
      },
      clcikRouteFuwenben(){
        this.$router.push("/fuwenben")
      },
      show(data){
       console.log(data)
       this.loginMsg=data;
     }
  }
};
</script>

<style>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}
#center{
  width:100%; 
   display: flex;
}
.el-aside {
  color: #333;
}
.time {
    font-size: 13px;
    color: #999;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
    display: flex;
  }         
  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }
</style>