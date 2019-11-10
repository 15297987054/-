import {FOOTBALL_LIST} from "../../../actions/footList";

export const mapStateToProps=(state)=>({
    football_list:state.football.football_list,
   
})

export const mapDispatchToProps=(dispatch)=>({
    handleFootball(channel_type){
        dispatch(FOOTBALL_LIST(channel_type))
    }
})