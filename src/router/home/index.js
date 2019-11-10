export default{
    name:"home",
    path:"/home",
    //按需加载引入路由
    meta:{
        flag:true,
    },
    component:()=>import("@pages/home"),
    children:[
        {name:"carouse",path:"carouse",component:()=>import("@components/homesport")},
    ]
}