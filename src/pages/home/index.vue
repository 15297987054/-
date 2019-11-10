<template>
  <div class="home">
    <el-form
      style="margin:40px;"
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="书籍名称" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="图书位置" prop="region">
        <el-select v-model="ruleForm.region" placeholder="请选择图书位置">
          <el-option label="逸夫楼" value="逸夫楼"></el-option>
          <el-option label="图书馆" value="图书馆"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="入库时间" required>
        <el-col :span="11">
          <el-form-item prop="date1">
            <el-date-picker
              type="date"
              placeholder="选择日期"
              v-model="ruleForm.date1"
              style="width: 100%;"
            ></el-date-picker>
          </el-form-item>
        </el-col>
        <!-- <el-col class="line" :span="2">-</el-col>
    <el-col :span="11">
      <el-form-item prop="date2">
        <el-time-picker placeholder="选择时间" v-model="ruleForm.date2" style="width: 100%;"></el-time-picker>
      </el-form-item>
        </el-col>-->
      </el-form-item>
      <el-form-item label="封面图片地址" prop="delivery">
        <el-input placeholder="请输入内容" v-model="input" clearable></el-input>
      </el-form-item>
      <el-form-item label="图书类型" prop="type">
        <el-checkbox-group v-model="ruleForm.type">
          <el-checkbox label="小说" name="type"></el-checkbox>
          <el-checkbox label="散文" name="type"></el-checkbox>
          <el-checkbox label="古籍" name="type"></el-checkbox>
          <el-checkbox label="科幻" name="type"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="图书来源" prop="resource">
        <el-radio-group v-model="ruleForm.resource">
          <el-radio label="学校购买"></el-radio>
          <el-radio label="捐赠"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="备注" prop="desc">
        <el-input type="textarea" v-model="ruleForm.desc"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">立即上传</el-button>
        <el-button @click="dataChange">修改</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import http from "../../utils/http";
export default {
  name: "home",
  data() {
    return {
      msg:true,
      booksname: "",
      input:"",
      ruleForm: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
        id: "",
        
      },
      rules: {
        name: [
          { required: true, message: "请输入书籍名称", trigger: "blur" },
          { min: 1, max: 12, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        region: [
          { required: true, message: "请选择书籍位置", trigger: "change" }
        ],
        date1: [
          {
            type: "date",
            required: true,
            message: "请选择日期",
            trigger: "change"
          }
        ],
        // date2: [
        //   { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
        // ],
        type: [
          {
            type: "array",
            required: true,
            message: "请至少选择一个图书类型",
            trigger: "change"
          }
        ],
        resource: [
          { required: true, message: "请选择图书来源", trigger: "change" }
        ],
        desc: [{ required: true, message: "请填写备注", trigger: "blur" }]
      }
    };
  },
  created() {
    this.id = this.$route.query.id;
    this.getOneData(this.id);
     this.$emit("parentShow",this.msg)
  },
  methods: {
    getOneData(num) {
      if (!num) return;
      http("get", "http://localhost:3000/bookslist/?id=" + num, {}).then(
        data => {
          console.log(data, 11), (this.ruleForm.name = data[0].booksname);
          this.ruleForm.region = data[0].booksPosition;
          this.ruleForm.date1 = data[0].dateTime;
          this.ruleForm.type = data[0].booksType;
          this.ruleForm.resource = data[0].booksRsource;
          this.ruleForm.desc = data[0].msg;
          this.input=data[0].url
        }
      );
    },
     
           
        
    submitForm(formName) {
      if (!this.ruleForm.name || !this.ruleForm.region || !this.ruleForm.type)
        return;
      if (this.id) return;
      http("post", " http://localhost:3000/bookslist", {
        booksname: this.ruleForm.name,
        booksPosition: this.ruleForm.region,
        dateTime: this.ruleForm.date1,
        booksType: this.ruleForm.type,
        booksRsource: this.ruleForm.resource,
        msg: this.ruleForm.desc,
        url:this.input,
      }).then(data => {
        this.ruleForm.name = "";
        this.ruleForm.region = "";
        this.ruleForm.date1 = "";
        this.ruleForm.type = [];
        this.ruleForm.resource = "";
        this.ruleForm.desc = "";
      });

      console.log(this.ruleForm.type);
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
      if (this.id) {
        this.$router.push("/books");
      }
    },
    dataChange() {
      http("patch", "http://localhost:3000/bookslist/" + this.id, {
        booksname: this.ruleForm.name,
        booksPosition: this.ruleForm.region,
        dateTime: this.ruleForm.date1,
        booksType: this.ruleForm.type,
        booksRsource: this.ruleForm.resource,
        msg: this.ruleForm.desc,
        url:this.input,
      }).then(data => {
        this.ruleForm.name = "";
        this.ruleForm.region = "";
        this.ruleForm.date1 = "";
        this.ruleForm.type = [];
        this.ruleForm.resource = "";
        this.ruleForm.desc = "";
      });
    }
  }
};
</script>

<style scoped>
.box {
  width: 500px;
  height: 500px;
  background: yellow;
}
</style>
