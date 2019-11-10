import {DISCOUNT_GOODS_LIST} from "../../actions/discountActions/index"


export const mapStateToProps=(state)=>({
    discount_list:state.discount.discount_list,
})

export const mapDispatchToProps=(dispatch)=>({
    handleGetDiscountList(r){
        dispatch(DISCOUNT_GOODS_LIST(r))
    }
})