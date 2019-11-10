import {createAction} from "redux-actions";
import {Football_list} from "@api/basketballList";

const FOOTBALL_LIST_ACTION=createAction("football_list",(data)=>(data));

export const FOOTBALL_LIST=(channel_type)=>{
    return async (dispatch)=>{
        let data=await Football_list(channel_type);
        dispatch(FOOTBALL_LIST_ACTION(data))
    }
}