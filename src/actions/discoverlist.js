import {createAction} from "redux-actions";
import {getdiscoverlist,getdisnewlist} from "@api/discoverlist"

export const GET_NEW_LIST_ACTION=(tag_id,str,type)=>{
    const GET_NEW_LIST=createAction("get_new_list",(data,tag_id,type)=>({data,tag_id,type}))

    return async (dispatch)=>{
        console.log("GET_NEW_LIST第一次请求")
        let data=await getdiscoverlist(tag_id,str);
        dispatch(GET_NEW_LIST(data,tag_id,type))
        if(data) return true;
    }
}
// todolist
export const DIS_MOD=(tag_id,type)=>{
    const GET_NEW_LIST=createAction("get_new_list",(data,tag_id,type,)=>({data,tag_id,type}))
    return async (dispatch)=>{
        console.log("GET_NEW 第二次请求");
        let data=await getdiscoverlist(tag_id);
        dispatch(GET_NEW_LIST(data,tag_id,type))
        if(data) return true;
    }
}
export const GET_NEW_LIST=(str)=>{
    const GET_NEW=createAction("get_new",data=>data)

    return async (dispatch)=>{
        console.log(str,"action");
        let data=await getdisnewlist(str);
        dispatch(GET_NEW(data))
        if(data) return true;
    }
}