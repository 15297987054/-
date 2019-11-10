import {handleActions} from "redux-actions";

const defaultState={
    football_list:[]
}

export default handleActions({
    football_list:(state,action)=>{
        let data=Object.assign({},state);
        data.football_list=action.payload.data;
        return data;
    }
},defaultState)