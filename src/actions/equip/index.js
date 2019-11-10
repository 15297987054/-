import {createAction} from "redux-actions";
import {Equip_list} from "@api/equip";

const EQUIP_LIST_ACTION=createAction("equip_list",(data)=>(data));

export const EQUIP_LIST=()=>{
    return async (dispatch)=>{
        let data=await Equip_list();
        dispatch(EQUIP_LIST_ACTION(data))
    }
}