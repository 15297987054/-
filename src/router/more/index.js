export default{
    name:"more",
    // path:"/more/:name",
    path:"/more",
    //按需加载引入路由
    meta:{
        flag:true,
    },
    component:()=>import("@components/more")

}