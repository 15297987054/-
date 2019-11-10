import {createAction} from "redux-actions";
import {Digital_list} from "@api/basketballList";

const DIGITAL_LIST_ACTION=createAction("digital_list",(data)=>(data));

export const DIGITAL_LIST=(channel_type)=>{
    return async (dispatch)=>{
        let data=await Digital_list(channel_type);
        dispatch(DIGITAL_LIST_ACTION(data))
    }
}