import {connect} from "react-redux";
import {GET_NEW_LIST_ACTION} from "@actions/discoverlist"
export const mapStateToProps=(state)=>({
    discoverlist:state.discoverlist.discoverlist,
    tag_id:state.discoverlist.tag_id,
    tar:state.discoverlist.tar,
})
export const mapDispatchToProps =(dispatch)=>({
   async handlenewlist(tag_id,str,type){
      let data= await dispatch(GET_NEW_LIST_ACTION(tag_id,str,type))
      console.log(data);
        return data;
    }
})
