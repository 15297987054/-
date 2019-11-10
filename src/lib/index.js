// <<<<<<< HEAD
import Headerlib from "./header/index.vue";
import Bscroll from "./bscoll/index.vue";
import Bottom from "./bottom/index.vue"
// import Bscroll from "./better-scroll/index.vue"
const components =[
    Headerlib,
    Bscroll,
    Bottom
]
// const install =(Vue)=>{
// // =======

// const components = [
//     Bottom,
//     Bscroll
// ]
// }

const install = (Vue)=>{
// >>>>>>> c9cfe97fe1280af3cb7b3c4af0973151513e30e2
    if(Vue){
        components.map(item=>{
            Vue.component(item.name,item);
        })
    }
}
// <<<<<<< HEAD
// =======

// >>>>>>> c9cfe97fe1280af3cb7b3c4af0973151513e30e2
export default install;