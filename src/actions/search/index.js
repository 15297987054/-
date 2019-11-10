
import {createAction} from "redux-actions";
import {Search_list} from "@api/searchList";

const SEARCH_LIST_ACTION=createAction("search_list",(data)=>(data));

export const SEARCH_LIST=(val)=>{
    return async (dispatch)=>{
        let data=await Search_list(val);
        dispatch(SEARCH_LIST_ACTION(data))
    }
}
