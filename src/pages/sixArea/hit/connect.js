import {HIT_LIST} from "../../../actions/hitList";

export const mapStateToProps=(state)=>({
    hit_list:state.hit.hit_list,
   
})

export const mapDispatchToProps=(dispatch)=>({
    handleHit(channel_type){
        dispatch(HIT_LIST(channel_type))
    }
})