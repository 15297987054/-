import {createAction} from "redux-actions";
import {Freestyle_list} from "@api/basketballList";

const FREESTYLE_LIST_ACTION=createAction("freestyle_list",(data)=>(data));

export const FREESTYLE_LIST=(channel_type)=>{
    return async (dispatch)=>{
        let data=await Freestyle_list(channel_type);
        dispatch(FREESTYLE_LIST_ACTION(data))
    }
}