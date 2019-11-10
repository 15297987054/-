import React, { Component } from 'react'
import {LoginWrapper} from "./styled"
import {Link} from 'react-router-dom'
// import {registerApi} from "@api/user"
export default class Regiter extends Component {
    constructor(){
        super()
        this.state = {
            userId:"",
            password:""
        }
    }
    render() {
        let {userId,password} = this.state;
        return (
            <LoginWrapper>
              {/*<div className="login">
                  <img src="https://assets.maizuo.com/h5/mz-auth/public/app/img/logo.19ca0be.png"/>
        </div>*/}
              <div className="login-form">
                    <form id="login"
                     >
                        <label><span>账号:</span><input type="text" 
                            value={userId}
                            /></label>

                        <label><span>密码:</span><input type="text" 
                            value={password}
                            /></label>

                        <p className="userInfo"><Link to="/login">已有账号,立即登陆</Link></p>
                        <button type="submit">注册</button>
                    </form>
              </div>
            </LoginWrapper>
        )
    }
//     handleUser(type,e){
//         let val = e.target.value;
//         if(type == 1){
//             this.setState({
//                 userId:val
//             })
//         }else{
//             this.setState({
//                 password:val
//             })
//         }
//     }
//    async handleRegister(e){
//         e.preventDefault();
    
//         let userId = this.state.userId;
//         let password = this.state.password;

//         let data = await registerApi(userId,password);
//         console.log(data);

//         if(data.data.code == 1){
//             alert("注册成功");
//             this.props.history.push("/login")
//         }
        
//     }
}
