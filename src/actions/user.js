import {createAction} from "redux-actions";
import {LoginApi,LoginApiCode} from '@api/user'
const LOGIN_ACTION = createAction("login_action",data=>data);
export const LOGIN_ACTION_ASYNC=(values)=>{
    return async (dispatch)=>{
        let data=await LoginApi(values);
        dispatch(LOGIN_ACTION(data))
        if(data.is_active==1){
            
            return true
        }
    }
}

const LOGIN_CODE_ACTION = createAction("login_code_action",data=>data);
export const LOGIN_CODE=()=>{
    return async (dispatch)=>{
        let data=await LoginApiCode();
        dispatch(LOGIN_CODE_ACTION(data.code))
    }
}