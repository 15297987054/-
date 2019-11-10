import Vue from "vue"
import Vuex from "vuex"
import more from "./more"
import home from "./home"
import todybargin from "./todybargin"
import old from "./old"
// <<<<<<< HEAD


Vue.use(Vuex)
const store=new Vuex.Store({
    state:{
        flag:true
    },
    mutations:{
        clichandetoggleLogin(state){
            state.flag=!state.flag;
        }
    },
    modules:{
        home,
        more,
        todybargin,
        old
    }
})

// =======

// Vue.use(Vuex)
// const store=new Vuex.Store({

//     modules:{
//         more
// // >>>>>>> c9cfe97fe1280af3cb7b3c4af0973151513e30e2
//     }
// })

export default store;