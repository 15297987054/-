<template>
  <div id="loginContainer">
    <div class="maskLogin">
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="用户名" prop="pass">
          <el-input type="text" v-model="ruleForm.pass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="checkPass">
          <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item id="verifyCode" label="验证码" prop="age" >
          <el-input v-model.number="ruleForm.age" style="width:250px;"></el-input>
           <el-button plain style="width:100px;">
            <span v-text="verifyCode" style="fontWeight:900;color:#999"></span>
           </el-button>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">注册</el-button>
          <el-button @click="resetForm()">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>


<script>
import http from '../../utils/http'
export default {
  name: "Login",
  data() {
    var checkAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("验证码不能为空"));
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error("请输入数字值"));
        // } else {
        //   if (value < 18) {
        //     callback(new Error("必须年满18岁"));
        //   } else {
        //     callback();
        //   }
        }
      }, 1000);
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    // var validatePass2 = (rule, value, callback) => {
    //   if (value === "") {
    //     callback(new Error("请再次输入密码"));
    //   } else if (value !== this.ruleForm.pass) {
    //     callback(new Error("两次输入密码不一致!"));
    //   } else {
    //     callback();
    //   }
    // };
    return {
      ruleForm: {
        pass: "",
        checkPass: "",
        age: ""
      },
      msg: false,
      input:"",
      verifyCode:"",
      data:[],
      rules: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        // checkPass: [{ validator: validatePass2, trigger: "blur" }],
        age: [{ validator: checkAge, trigger: "blur" }]
      }
    };
  },
  created() {
    this.$emit("parentShow", this.msg);
    //删除mock中的数据
    // http("delete","http://localhost:3000/userlist/"+3,{}).then(data=>{
    //   console.log(data,111)
    // })
    this.handleGetData();
    var code=""
      for(var i=0;i<6;i++){
       code +=Math.floor(Math.random()*10)
      }
    this.verifyCode=code
  },
  methods: {
    handleGetData(){
      http("get"," http://localhost:3000/userlist").then(data=>{
        console.log(data)
        this.data=data;
      })
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
          console.log(formName)
        } else {
          console.log("error submit!!");
          return false;
        }
      });
      if(this.ruleForm.pass==''||this.ruleForm.checkPass==''||this.ruleForm.age=='') return;
      http("post","http://localhost:3000/userlist",{
        userId:this.ruleForm.pass,
        passWord:this.ruleForm.checkPass,
        verifyCode:this.ruleForm.age
      }).then(data=>{
        this.ruleForm.pass="",
        this.ruleForm.checkPass="",
        this.ruleForm.age=""
      })
    },
    resetForm() {
      for(var j=0;j<this.data.length;j++){
        if(this.ruleForm.pass==this.data[j].userId&&this.ruleForm.checkPass==this.data[j].passWord&&this.ruleForm.age==this.verifyCode){
            this.$router.push({path:"/home"})
            console.log(1111)
            // this.open();
        }
      }
    },
     open() {
        this.$alert('恭喜登录成功', {
          confirmButtonText: '确定',
          // callback: action => {
          //   this.$message({
          //     type: 'info',
          //     message: `"亲", ${ "欢迎使用" }`
          //   });
          // }
        });
      }
  }
};
</script>

<style scoped>
#loginContainer {
  width: 100%;
  height: 620px;
  background-image: url(../../assets/logo.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
}
.maskLogin {
  width: 500px;
  height: 350px;
  background: rgba(43, 42, 42, 0.3);
  padding: 50px 50px 50px 0;
}
.el-form-item__content {
  margin-left: 0px !important;
}
</style>