import {handleActions} from "redux-actions";

const defaultState={
    running_list:[]
}

export default handleActions({
    running_list:(state,action)=>{
        let data=Object.assign({},state);
        data.running_list=action.payload.data;
        return data;
    }
},defaultState)