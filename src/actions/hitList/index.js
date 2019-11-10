import {createAction} from "redux-actions";
import {Hit_list} from "@api/basketballList";

const HIT_LIST_ACTION=createAction("hit_list",(data)=>(data));

export const HIT_LIST=(channel_type)=>{
    return async (dispatch)=>{
        let data=await Hit_list(channel_type);
        dispatch(HIT_LIST_ACTION(data))
    }
}