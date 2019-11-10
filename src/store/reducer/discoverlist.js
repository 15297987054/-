import {handleActions} from "redux-actions";
const defaultState={
    discoverlist:[],
    tag_id:283,
    str:"",
    type:"",

    disnewlist:[],
    disinfo:[],
    disnewstr:"",
}
export default handleActions({
    get_new_list:(state,action)=>{
        console.log(action)
        let discoverlist=Object.assign({},state);
       if(action.payload.type==="scroll"){  
           console.log("scroll11111")
        discoverlist.discoverlist=[...discoverlist.discoverlist,...action.payload.data.data];
       }else if(action.payload.type==='click'){
           console.log("click11111")
        discoverlist.tag_id=action.payload.tag_id;
        discoverlist.discoverlist=action.payload.data.data
       }
       return discoverlist;
    },
    // dis_mdd_action:(state,action)=>{
    //     console.log(action);
    //     let dismdd=Object.assign({},state);
    //     dismdd.tag_id=action.payload.data;
    //     dismdd.type=action.payload.type;
    //     return dismdd;
    // },
    get_new:(state,action)=>{
       let disnewlist=JSON.parse(JSON.stringify(state));
            disnewlist.disnewlist=[...disnewlist.disnewlist,...action.payload.data.list]
            disnewlist.disinfo=action.payload.data.head;
            disnewlist.disnewstr=action.payload.data.list[19].data.param_str;
            console.log(disnewlist.disnewstr);
        return disnewlist;
    }

},defaultState)