import {DIS_MOD} from "@actions/discoverlist"
export const mapStateToProps=(state)=>({
    
})
export const mapDispatchToProps=(dispatch)=>({
      async  handlereplace(str,type){
         await   dispatch(DIS_MOD(str,type))
        }
})