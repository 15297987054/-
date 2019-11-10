import {SEARCH_LIST} from "../../actions/search";

export const mapStateToProps=(state)=>({
    search_list:state.search.search_list
})

export const mapDispatchToProps=(dispatch)=>({
    handleSearch(val){
        dispatch(SEARCH_LIST(val))
    }
})