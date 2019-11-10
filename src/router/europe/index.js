export default{
    name:"europe",
    path:"/europe",
    meta:{
        flag:false
    },
    //按需加载引入路由
    component:()=>import("@pages/home/europe/index"),
    // children:[
    //     {
    //         path:"europeshop",
    //         component:()=>import("@pages/home/europe/europeshop"),
    //     }
    // ],
}