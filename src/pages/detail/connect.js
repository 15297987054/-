import {DETAIL_LIST} from "../../actions/detail";

export const mapStateToProps=(state)=>({
    detail_list:state.detail.detail_list
})

export const mapDispatchToProps=(dispatch)=>({
    handleDetail(val){
        dispatch(DETAIL_LIST(val))
    }
})