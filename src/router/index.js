import Vue from "vue";
import VueRouter from "vue-router"
import Top from "../pages/books";
import Editor from "../pages/fuwenben";
import home from "../pages/home";
import Login from "../pages/login"
Vue.use(VueRouter);


const router = new VueRouter({
    mode:"hash",
    routes:[
        {path:"/",redirect:"/login"},
        {path:"/login",component:Login},
        {path:"/books",component:Top},
        {path:"/home",component:home},
        {path:"/fuwenben",component:Editor}
       
    ]
})


export default router;