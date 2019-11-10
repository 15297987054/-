import {RUNNING_LIST} from "../../../actions/runningList";

export const mapStateToProps=(state)=>({
    running_list:state.running.running_list,
})

export const mapDispatchToProps=(dispatch)=>({
    handleRunning(channel_type){
        dispatch(RUNNING_LIST(channel_type))
    }
})