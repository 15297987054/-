export default{
    name:"sort",
    path:"/sort",
    //按需加载引入路由
    component:()=>import("@pages/sort"),
    meta:{
        flag:false
    },
    children:[
        {
            path:"/sort",
            redirect:"/sort/sorttype"
        },
        {
            path:"sorttype",
            meta:{
                flag:false
            },
            component:()=>import("@components/sorttype"),
        }, {
            path:"sortbrands",
            meta:{
                flag:false
            },
            component:()=>import("@components/sortbrands"),
        }
    ]

}