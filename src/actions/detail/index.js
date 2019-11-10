import {createAction} from "redux-actions";
import {Detail_list} from "@api/detailList";

const DETAIL_LIST_ACTION=createAction("detail_list",(data)=>(data));

export const DETAIL_LIST=(val)=>{
    return async (dispatch)=>{
        let data=await Detail_list(val);
        dispatch(DETAIL_LIST_ACTION(data))
    }
}