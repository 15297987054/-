import {handleActions} from "redux-actions";
const defaultState={
   home_goodsList:[],
}
export default handleActions({
    goods_action:(state,action)=>{
        let data=Object.assign({},state);
        
        data.home_goodsList=action.payload.data;
        return data;
    }
},defaultState)