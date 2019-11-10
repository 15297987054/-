<template>
  <div>
    <el-input style="width:250px;margin-left:100px;margin-top:40px;margin-bottom:20px;margin-right:10px;" placeholder="请输入图书名" prefix-icon="el-icon-search" v-model="input2"></el-input>
      <el-button type="primary" @click="handleSearch">搜索图书</el-button>
    <el-row id="center">
      <el-col
        :span="8"
        v-for="(item, index) in arr"
        :key="index"
        :offset="index > 0 ? 2 : 0"
        style="margin-left:40px;width:183px;margin-bottom:20px;"
      >
        <el-card style="width:187px;height:285px;" :body-style="{ padding: '0px' }">
          <img
            :src="item.url"
            class="image"
          />
          <div style="padding: 14px;" class="booksBox">
            <span>{{item.booksname}}</span>
            <br />
            <span class="over">{{item.msg}}</span>
          
            <span>{{(item.booksType).join("/")}}</span>
            <div class="bottom clearfix">
              <el-button
               
                type="primary"
                @click="addBooks(item.id)"
                style="width:60px;text-align:center;padding-left:0px;padding-right:0;background:#409eff;color:white;"
              >修改</el-button>
              <el-button
                type="success"
                @click="delBooks(item.id)"
                style="width:60px;text-align:center;padding-left:0px;padding-right:0;"
              >删除</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <div class="page">
      <paging
        :dataAll="all"
        :dataCur="cur"
        :datanum="num"
        :dataDatanum="dataNum"
        @change="pageChange"
      ></paging>
    </div>
  </div>
</template>

<script>
import http from "../../utils/http";
import Paging from "./pageing";
export default {
  name: "Top",
  components: {
    Paging
  },
  data() {
    return {
      // arr:4,
      arr: [],
      msg:true,
      currentDate: new Date(),
      activeIndex: "1",
      activeIndex2: "1",
      all: 5, //总页数
      cur: 1, //当前页码
      num: 5, //一页显示的数量  必须是奇数
      dataNum: 5, //数据,
      input2:""
    };
  },
  created() {
    this.handleGetData();
    this.$emit("parentShow",this.msg)
  },
  methods: {
    handleSearch(){
        http("get","http://localhost:3000/booksList?q="+this.input2,{

        }).then((data)=>{
          this.arr=data;
        })
    },
    pageChange: function(page) {
      this.cur = page;
    },
    handleGetData() {
      http("get", "http://localhost:3000/booksList").then(data => {
        console.log(data);
        this.arr = data;
      });
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    delBooks(id) {
      http("delete", "http://localhost:3000/bookslist/" + id, {}).then(data => {
        console.log(data);
      });
      // this.arr=this.arr-1;
      this.handleGetData();
    },
    addBooks(num) {
      this.arr = this.arr + 1;
      this.$router.push({path:"/home",query:{id:num}})
    },
    open() {
      this.$alert("这是一段内容", "标题名称", {
        confirmButtonText: "确定",
        callback: action => {
          this.$message({
            type: "info",
            message: `action: ${action}`
          });
        }
      });
    }
  }
};
</script>

<style scoped>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}
#center {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
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
.booksBox {
  /* display: flex; */
  /* justify-content: center;
  align-content: center; */
  font-size: 15px;
}
.image {
  width: 100%;
  height:150px;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}
.over {
  width:157px;
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.page {
  width: 100%;
  min-width: 1068px;
  height: 36px;
  margin: 40px auto;
}
</style>
