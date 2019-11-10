import {createAction} from "redux-actions";
import {Running_list} from "@api/basketballList";

const RUNNING_LIST_ACTION=createAction("running_list",(data)=>(data));

export const RUNNING_LIST=(channel_type)=>{
    return async (dispatch)=>{
        let data=await Running_list(channel_type);
        dispatch(RUNNING_LIST_ACTION(data))
    }
}