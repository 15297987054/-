import {createAction} from "redux-actions";
import {Basketball_list} from "@api/basketballList";

const BASKETBALL_LIST_ACTION=createAction("basketabll_list",(data)=>(data));

export const BASKETBALL_LIST=(channel_type)=>{
    return async (dispatch)=>{
        let data=await Basketball_list(channel_type);
        dispatch(BASKETBALL_LIST_ACTION(data))
    }
}