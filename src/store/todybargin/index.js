import {todybarginApi} from "@api/todybargin"

const state={
    todgoodslist:[],
}
const actions={
   async  todgoodslist({commit}){
       let data= await todybarginApi();
        commit("todygoodsMutations",data);
    }
}
const mutations={
    todygoodsMutations(state,params){
        console.log(params);
        state.todgoodslist=params.productList
    }
}

export default {
    state,
    actions,
    mutations,
    namespaced:true
}