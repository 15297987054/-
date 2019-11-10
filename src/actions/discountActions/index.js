import {createAction} from "redux-actions";
import {discount_goods} from "@api/discountList";

const DISCOUNT_GOODS_LIST_ACTION=createAction("discount_goods_list",(data)=>(data));

export const DISCOUNT_GOODS_LIST=(r)=>{
    return async (dispatch)=>{
        let data= await discount_goods(r);
        dispatch(DISCOUNT_GOODS_LIST_ACTION(data))
    }
}