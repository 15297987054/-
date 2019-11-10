export default{
    name:"mine",
    path:"/mine",
    //按需加载引入路由
// <<<<<<< HEAD
// =======
    meta:{
        flag:true,
    },
// >>>>>>> c9cfe97fe1280af3cb7b3c4af0973151513e30e2
    component:()=>import("@pages/mine")

}