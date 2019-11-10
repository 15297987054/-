export default{
    name:"shopcar",
    path:"/shopcar/:goods",
    meta :{
        flag:false
    },
    component:()=>import("@components/shopcar")
}