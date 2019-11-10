<template>
    <div class="login">
        <h2><span @click="loginback()">返回</span>注册账号</h2>
        <div class="login-input">
            <label for="">
                <input type="text" placeholder="请输入手机号">
            </label>
            <label for="">
                <input type="password" placeholder="请输入密码">
            </label>  
        </div>
        <a href="">注册</a>
        <dir class="togglelogin" @click="clichandetoggleLogin"> 已有账号?立即登录</dir>
    </div>
</template>
<script>
 import {mapMutations} from "vuex";
export default {
    name:"Login",
    
    methods:{
        ...mapMutations({
            clichandetoggleLogin:"clichandetoggleLogin"
        }),
        loginback(){
            this.$router.back();
        }
    }
   
}
</script>
<style>
.login{
    padding: 0rem 0.125rem 0;
}
.login h2{
    height: 0.3833rem;
    font-size: 0.1417rem; 
    font-weight: normal;
    text-align: center;
    line-height: 0.3833rem;
    position: relative;
}
.login h2 span{
    font-size:0.125rem;
    padding: 0 0 0 0.0833rem ;
    position: absolute;
    left:0;
    top:0;
}
    .login-input{
        padding-top:0.8917rem; 
        display: flex;
        flex-direction: column;
    }
    .login-input input{
        width: 100%;
        /* padding: 0.2083rem 0; */
        padding: 0.0833rem 0;
         font-size: 0.15rem;
        border: 0px solid #ccc;
        border-bottom: 1px solid #ccc; 
    }
    .login a{
        margin-top: 0.125rem;
        display: inline-block;
        text-align: center;
        font-size: 0.1333rem;
        width: 100%;
        background: black;
        color: white;
        padding: 0.1458rem
    }
    .togglelogin{
         position: relative;
         top:0.0833rem;
         left: 1.85rem;
        padding:0;
        display: inline;
        text-align: right;
        font-size: 0.1167rem;
        color: #bea474;
    }
</style>