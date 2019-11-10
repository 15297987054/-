export default {
    path:"/movie",
    name:"movie",
    
    component:()=>import("@pages/movie"),
    children:[
        {
            path:"/movie",
            redirect:"/movie/currentMovie"
        },
        {
            path:"currentMovie",
            name:"currentMovie",
            meta:{
                flag:true
            },
            component:()=>import("@components/currentMovie")
        },
        {
            path:"movieComming",
            name:"movieComming",
            meta:{
                flag:true
            },
            component:()=>import("@components/movieComming")
        }
    ]
}