export default{
    name:"europeshop",
    path:"/europeshop",
    meta:{
        flag:false
    },
    //按需加载引入路由
    component:()=>import("@pages/home/europeshop"),

}