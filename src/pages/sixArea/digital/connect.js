import {DIGITAL_LIST} from "../../../actions/digital";

export const mapStateToProps=(state)=>({
    digital_list:state.digital.digital_list
})

export const mapDispatchToProps=(dispatch)=>({
    handleDigital(channel_type){
        dispatch(DIGITAL_LIST(channel_type))
    }
})