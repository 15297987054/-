import {getgoods} from "@api/more/index";

const state={
    // goodslist:[],
    goodslist:JSON.parse(sessionStorage.getItem("goodslist"))||[],
    detailGoodsList:[],
    chooseGoods:JSON.parse(sessionStorage.getItem("chooseGoods"))||[],
    goods: [],
    selectedAll: false
}

const mutations={
    handleMutationGetgoods(state,params){
        if(JSON.parse(sessionStorage.getItem("goodslist"))) {
            state.goodslist=JSON.parse(sessionStorage.getItem("goodslist"))
            return;
        }
        state.goodslist=[];
        for(var i=0;i<params.length;i++){
            state.goodslist.push(params[i])
        }
        console.log(state.goodslist)
        sessionStorage.setItem("goodslist",JSON.stringify(state.goodslist))
    },
    handleMutationchooseGoods(state,params){
        let chooseGoods=[];
        for(var i=0;i<state.goodslist.length;i++){
            if(state.goodslist[i].brandEnName==params){
                chooseGoods.push(state.goodslist[i]);
            }
        }
        state.goodslist=chooseGoods;
    },
    MutationchooseOnetypeGoods(state,params){
        let chooseGoods=[];
        for(var i=0;i<state.goodslist.length;i++){
            if(state.goodslist[i].brandEnName==params){
                chooseGoods.push(state.goodslist[i]);
            }
        }
        state.goodslist=chooseGoods;
        state.chooseGoods=[];
        for(var i=0;i<state.goodslist.length;i++){
            if(state.goodslist[i].brandEnName==params){
                state.chooseGoods.push(state.goodslist[i]);
            }
        }
        sessionStorage.setItem("chooseGoods",JSON.stringify(state.chooseGoods))
    },
    MutationSortArr(state){
        var newlist=[];
        for(var i=0;i<state.goodslist.length;i++){
            var num =  Math.floor(Math.random()*(state.goodslist.length-1)) ;
            newlist.push(state.goodslist[num]);
        }
        state.chooseGoods=newlist;
    },
    MutationchooseOneTypeGoods(state,params){
        state.chooseGoods=[];
        for(var i=0;i<state.goodslist.length;i++){
            if(state.goodslist[i].brandEnName==params){
                state.chooseGoods.push(state.goodslist[i]);
            }
        }
    },
    MutationGetDetailsGoods(state,id){
        for(var i=0;i<state.goodslist.length;i++){
            if(state.goodslist[i].id==id){
                state.detailGoodsList.push(state.goodslist[i])
            }
        }
    },
    MutationgetShopCarGoods(state,params){
        state.goods=params;
    },
    handleGoodsChange(state,index){
      state.goods[index].flag = !state.goods[index].flag
      var bStop = true;
      for (var i = 0; i < state.goods.length; i++) {
        if (!state.goods[i].flag) {
          bStop = false;
          break;
        }
      }
      state.selectedAll = bStop;
    },
    handleReducer(state,index){
        if(state.goods[index].num<=1){
          state.goods[index].num = 1;
        }else{
          state.goods[index].num--
        }
      },
      handleAdd(state,index){
        state.goods[index].num++;
      },
      bottomSeclected(state){
        state.selectedAll = !state.selectedAll;
        state.goods.forEach(item => {
          item.flag = state.selectedAll;
        })
      },
}
const actions = {
    async handleGetgoods({commit}){
        let data = await getgoods();
        commit("handleMutationGetgoods",data.productList)
    },
    choosegoods({commit},name){
        commit("handleMutationchooseGoods",name)
    },
    chooseOneTypeGoods({commit},name){
        commit("MutationchooseOneTypeGoods",name)
    },
    chooseOnetypeGoods({commit},name){
        commit("MutationchooseOnetypeGoods",name)
    },
    sortArr({commit}){
        commit("MutationSortArr")
    },
    getDetailsGoods({commit},id){
        commit("MutationGetDetailsGoods",id)
    },
    getShopCarGoods({commit},shopCarInfo){
        commit("MutationgetShopCarGoods",shopCarInfo);
    }
}

const getters={
    goodsPrice(state) {
      let goodsCount = 0, goodsPriceSum = 0;
      for (var i = 0; i < state.goods.length; i++) {
        if (state.goods[i].flag) {
          goodsCount += state.goods[i].num;
          goodsPriceSum += state.goods[i].num * state.goods[i].refPrice;
        }
      }
      return {
        goodsCount,
        goodsPriceSum
      }
    }
}
export default {
    state,
    actions,
    mutations,
    getters,
    namespaced:true
}