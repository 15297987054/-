import {handleActions} from "redux-actions";

const defaultState={
    equip_list:[]
}

export default handleActions({
    equip_list:(state,action)=>{
        let data=Object.assign({},state);
        data.equip_list=action.payload.data;
        return data;
    }
},defaultState)