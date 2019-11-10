import React from "react";
import {LoginWrapper} from "./styled";
import {Link} from 'react-router-dom';
import http from '@utils/http';
import {connect} from 'react-redux';
import {mapStateToProps,mapDispatchToProps} from "./connect"
class Login extends React.Component{
    constructor(){
        super()
        this.state={
            userId:"",
            password:"",
            verifyCode:""
        }
    }
    render(){
        let {userId,password,verifyCode} = this.state
        let {url}=this.props
        console.log(url)
        return(
            <LoginWrapper>
             <div className="logoImg">
                  <img src="https://ss2.bdstatic.com/8_V1bjqh_Q23odCf/pacific/1789918885.jpg"/>
            </div>
              <div className="login-form">
                    <form id="login" onSubmit={this.props.handleLogin.bind(this,userId,password,verifyCode)}>
                        <label><span>账号:</span><input type="text" 
                             value={userId}
                             onChange={this.handleUser.bind(this,1)}
                        /></label>

                        <label><span>密码:</span><input type="password" 
                             value={password}
                             onChange={this.handleUser.bind(this,2)}
                        /></label>
                        <label style={{display:"flex"}}><span style={{whiteSpace:"nowrap",marginRight:"0.0817rem"}}>验证码:</span><input type="text" 
                             value={verifyCode}
                             onChange={this.handleVerifyCode.bind(this)}
                        /><div className="login">
                        <img src={url}/>
              </div></label>
                        <p className="userInfo"><Link to="/register">没有账号? 立即注册</Link></p>
                        <button type="submit">登陆</button>
                    </form>
              </div>
            </LoginWrapper>
        )
    }
    handleUser(type,e){
        let val = e.target.value;
        if(type == 1){
            this.setState({
                userId:val
            })
        }else{
            this.setState({
                password:val
            })
        }
    }
    componentDidMount(){
     this.props.verifyCode();
    //  console.log(()=>http.post("/user/v1/captchas"))
    }
    handleVerifyCode(e){
        let val=e.target.value;
        this.setState({
            verifyCode:val
        })
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login);