import {createAction} from "redux-actions";
import {home_goods} from "@api/homeList/goods";

const GOODS_ACTION=createAction("goods_action",(data)=>(data));

export const GOODS_ACTION_ASYNC=(type,channel_type)=>{
    return async (dispatch)=>{
        let data=await home_goods(type,channel_type);
        dispatch(GOODS_ACTION(data));
        if(data) return true;
    }
}