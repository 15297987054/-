export default{
    name:"oldgoods",
    path:"/oldgoods",
    //按需加载引入路由
    component:()=>import("@pages/home/oldgoods"),
    meta:{
        flag:false
    },
}