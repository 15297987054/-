import Vue from "vue";
import VueRouter from "vue-router"
import cinema from "./cinema";
import city from "./city";
import details from "./details";
import movie from "./movie";
import search from "./search";
import mine from "./mine"
Vue.use(VueRouter);

const router= new VueRouter({
    mode:"hash",
    routes:[
        {
            path:"/",
            redirect:"/movie"
        },
        cinema,
        city,
        details,
        movie,
        search,
        mine
    ]
})

export default router;