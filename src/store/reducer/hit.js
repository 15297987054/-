import {handleActions} from "redux-actions";

const defaultState={
    hit_list:[]
}

export default handleActions({
    hit_list:(state,action)=>{
        let data=Object.assign({},state);
        data.hit_list=action.payload.data;
        return data;
    }
},defaultState)