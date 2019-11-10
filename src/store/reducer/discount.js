import {handleActions} from "redux-actions";

const defaultState={
    discount_list:[],
}

export default handleActions({
    discount_goods_list:(state,action)=>{
        let data=Object.assign({},state)
        
       
        data.discount_list=action.payload.data;
       
        return data;
    }
},defaultState)