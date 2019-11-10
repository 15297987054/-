import {BASKETBALL_LIST} from "../../../actions/basketballList";

export const mapStateToProps=(state)=>({
    basketball_list:state.basketball.basketball_list
})

export const mapDispatchToProps=(dispatch)=>({
    handleBasketball(channel_type){
        dispatch(BASKETBALL_LIST(channel_type))
    }
})