import {handleActions} from "redux-actions";

const defaultState={
    freestyle_list:[]
}

export default handleActions({
    freestyle_list:(state,action)=>{
        let data=Object.assign({},state);
        data.freestyle_list=action.payload.data;
        return data;
    }
},defaultState)