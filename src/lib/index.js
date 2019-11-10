import Top from "./top/index.vue"

const components=[
   Top,
]

const install = (Vue)=>{
    if(Vue){
        components.map(item=>{
            Vue.component(item.name,item);
        })
    }
}
export default install;