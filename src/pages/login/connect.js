import {VERIFYCODE} from '../../actions/login';
import {LoginMsg} from "@api/login";
import Cookie from 'js-cookie'
export const mapStateToProps=(state)=>({
        userName:state.login.userName,
        userId:state.login.userId,
        url:state.login.url,
})

export const mapDispatchToProps=(dispatch)=>({
   async handleLogin(userId,password,verifyCode,e){
        e.preventDefault();
        let data= await LoginMsg(userId,password,verifyCode);
        console.log(data)
       
        if(data.is_active===1){
            console.log(this.props)
                if(this.props.location.state){
                    let path = this.props.location.state.from
                    Cookie.set("token","123")
                    this.props.history.push(path)
                }else{
                    this.props.history.push("/home")
                }
              
             
        }
    },
    verifyCode(){
        dispatch(VERIFYCODE())
    }
})

