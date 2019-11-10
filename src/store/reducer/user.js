import {handleActions} from 'redux-actions';

const defaultState={
    code:"",
    username:"",

}

export default handleActions({
    login_code_action:(state,action)=>{
        let newCode=Object.assign({},state);
       
        newCode.code=action.payload;
        return newCode;
    },
    login_action:(state,action)=>{
        let newUser=Object.assign({},state);
        newUser.username=action.payload.username;
       
        return newUser;
    }
},defaultState)