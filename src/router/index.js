import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./home";
import Europe from "./europe";
import Europeshop from "./europeshop";
import Oldgoods from "./oldgoods"
// <<<<<<< HEAD
import Honecarouse from "./home/other/homecarouse"
// =======
// >>>>>>> c9cfe97fe1280af3cb7b3c4af0973151513e30e2
import Brand from "./brand";
import Sort from "./sort";
import Shoppingbag from "./shoppingbag";
import Mine from "./mine";
// <<<<<<< HEAD
import Search from "./search";
import Todybargin from "./todybargin";
// =======
import More from "./more";
import Details from "./details"
import Shopcar from "./shopcar"
// >>>>>>> c9cfe97fe1280af3cb7b3c4af0973151513e30e2

Vue.use(VueRouter);

const router =new VueRouter({
    mode:"hash",
    routes:[
        {path:'/',redirect:"/home"},
        Home,
// <<<<<<< HEAD
        Honecarouse,
// =======
// >>>>>>> c9cfe97fe1280af3cb7b3c4af0973151513e30e2
        Brand,
        Sort,
        Shoppingbag,
        Mine,
// <<<<<<< HEAD
        Search,
        Todybargin,
// =======
        More,
        Details,
        Shopcar,
        Europe,
        Europeshop,
        Oldgoods
// >>>>>>> c9cfe97fe1280af3cb7b3c4af0973151513e30e2
    ]
})
export default router;