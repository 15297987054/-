import {handleActions} from 'redux-actions';

const defaultState={
    userName:"",
    userId:"",
    url:""
}

export default handleActions({
    login_action:(state,action)=>{
       return state;
    },
    code_action:(state,action)=>{
        let data=Object.assign({},state);
        
        data.url=action.payload.code
        return data;
    }
},defaultState)