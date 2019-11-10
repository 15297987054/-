import {homelistApi} from "@api/home";
const state={
    homecarouseimg:[],
    homechannerinfo:[],
    homebannerimg1:"",
    homebannerimg2:"",
    homepopularlist:[],
    homeupdatalist:[],
    homebannerswiper:[],

}
const mutations={
    homegoodslistMutation(state,info){
        state.homecarouseimg=info.floors[0].list;
        state.homechannerinfo=info.floors[1].list;

        state.homechannerinfo[0].path="/todybargin";
        state.homechannerinfo[1].path="/todybargin";
        state.homechannerinfo[2].path="/todybargin";
        state.homechannerinfo[3].path="/todybargin";
        state.homechannerinfo[4].path="/oldgoods";
        state.homechannerinfo[5].path="/europe";
       
        console.log(state.homechannerinfo);
        state.homebannerimg1=info.floors[2].list[0].img;
        state.homebannerimg2=info.floors[3].list[0].img;

        state.homebannerswiper=info.floors[4].list
        console.log(state.homebannerswiper);

        state.homepopularlist=info.floors[46].list[1]


        let arr=[];
        for(var i=5;i<43;i++ ){
            arr.push(info.floors[i].list[0])
        }
        state.homeupdatalist=arr;

       
        // console.log(state.homeupdatalist);
        // console.log(state.homecarouseimg)

    },
    // homehostMutation(state,info){
    //     console.log(info);
    // }
}
const actions={
    async homegodslist({commit}){

        let datalist
        if(!sessionStorage.getItem("data")){
             datalist=await homelistApi();
            console.log(datalist);
            sessionStorage.setItem("data",JSON.stringify(datalist))
        }else{
             datalist=JSON.parse(sessionStorage.getItem("data"))
        }
          
            commit("homegoodslistMutation",datalist)

            let data=await homelistApi();
            console.log(data);
            commit("homegoodslistMutation",data)

    },

}
export default {
    state,
    actions,
    mutations,
    namespaced:true
}