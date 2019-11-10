import {handleActions} from "redux-actions";

const defaultState={
    detail_list:[]
}

export default handleActions({
    detail_list:(state,action)=>{
        let data=Object.assign({},state);
        data.detail_list=action.payload.data;
        return data;
    }
},defaultState)