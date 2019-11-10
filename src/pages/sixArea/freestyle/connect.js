import {FREESTYLE_LIST} from "../../../actions/freestyle";

export const mapStateToProps=(state)=>({
    freestyle_list:state.freestyle.freestyle_list,
   
})

export const mapDispatchToProps=(dispatch)=>({
    handleFreestyle(channel_type){
        dispatch(FREESTYLE_LIST(channel_type))
    }
})