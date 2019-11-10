import {handleActions} from "redux-actions";

const defaultState={
    digital_list:[]
}

export default handleActions({
   digital_list:(state,action)=>{
        let data=Object.assign({},state);
        data.digital_list=action.payload.data;
        return data;
    }
},defaultState)