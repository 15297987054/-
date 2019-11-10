import {oldgoodsApi} from "@api/oldgoods"
const state={
    oldgoodsList:[]
}
const actions={
     async  handleOldgoodsList({commit}){
        let data= await oldgoodsApi();
        commit("handleMutationOldGoods",data);
        //console.log(data.productList)
    }
}
const mutations={
    handleMutationOldGoods(state,data){
        var list={src:"",brand:"",name:"",tipPrice:"",refPrice:''};
        for(var i=0;i<data.productList.length;i++){
            
            // list.src=data.productList[i].imgUrl;
            // list.brand=data.productList[i].brandEnName;
            // list.refPrice=data.productList[i].refPrice;
            // list.tipPrice=data.productList[i].tipPrice;
            // list.name=data.productList[i].productName;
            state.oldgoodsList.push(data.productList[i]);
        }
        //console.log(state.oldgoodsList)
    }
}
export default{
    state,
    actions,
    mutations,
    namespace:true,
}