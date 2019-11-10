import {handleActions} from "redux-actions";

const defaultState={
    basketball_list:[]
}

export default handleActions({
    basketabll_list:(state,action)=>{
        let data=Object.assign({},state);
        data.basketball_list=action.payload.data;
        return data;
    }
},defaultState)