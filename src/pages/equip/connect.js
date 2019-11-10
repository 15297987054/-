import {EQUIP_LIST} from "../../actions/equip";

export const mapStateToProps=(state)=>({
    equip_list:state.equip.equip_list
})

export const mapDispatchToProps=(dispatch)=>({
    handleEquip(val){
        dispatch(EQUIP_LIST(val))
    }
})