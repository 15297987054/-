import {handleActions} from "redux-actions";

const defaultState={
    search_list:[]
}

export default handleActions({
    search_list:(state,action)=>{
        let data=Object.assign({},state);
        data.search_list=action.payload.data;
        return data;
    }
},defaultState)