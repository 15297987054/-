import {createAction} from 'redux-actions';

import {LoginMsg,VERIFYCODEPIC} from "@api/login";

const LOGIN_ACTION=createAction("login_action",(data)=>(data));

export const LOGIN=(userId,password,verifyCode)=>{
    return async (dispatch)=>{
        console.log(userId,password,3333333333)
        let data= await LoginMsg(userId,password,verifyCode);
        console.log(data)
        dispatch(LOGIN_ACTION(data));
        if(data.is_active===1){
            // console.log(this.props)
            //     if(this.props.location.state){
            //         let path = this.props.location.state.from
            //         this.props.history.push(path)
            //     }else{
            //         this.props.history.push("/home")
            //     }
              
             
        }
    }
}

const CODE_ACTION=createAction("code_action",(data)=>(data))
export const VERIFYCODE=()=>{
    return async (dispatch)=>{
        let data=await VERIFYCODEPIC();
        dispatch(CODE_ACTION(data))
    }
}