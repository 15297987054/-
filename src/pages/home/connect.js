import {GOODS_ACTION_ASYNC} from "../../actions/homeActions/shihuo"

export const mapStateToProps=(state)=>({
    home_goodsList:state.goods.home_goodsList,
})

export const mapDispatchToProps=(dispatch)=>({
    handleHomeList(type,channel_type){
        dispatch(GOODS_ACTION_ASYNC(type,channel_type))
    }
})

