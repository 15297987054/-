import {
    Home,
    Discount,
    Discover,
    Equip,
    More,  
    BeforeLogin,
    Basketball,
    Running,
    Hit,
    Football,
    Freestyle,
    Digital,
    Detail,
    ShopCar,
    Search,
    Login,
    Register,
    Newwest,
    Newhot
} from "@pages"

export const TabBarRoutes=[
    {
        key:"/home",
        path:"/home",
        name:"首页",
        icon:"\ue611",
        component:Home,
        exact:true,
        meta:{
            requireAuth:false,
            flag:true,
        }
    },
    {
        key:"/discount",
        path:"/discount",
        name:"优惠",
        icon:"\ue773",
        component:Discount,
        exact:true,
        meta:{
            requireAuth:false,
            flag:true,
        }
    },
    {
        key:"/discover",
        path:"/discover",
        name:"发现",
        icon:"\ue746",
        component:Discover,
        exact:true,
        meta:{
            requireAuth:false,
            flag:true,
        }
    },
    {
        key:"/equip",
        path:"/equip",
        name:"装备",
        icon:"\ue613",
        component:Equip,
        exact:true,
        meta:{
            requireAuth:false,
            flag:true
        }
    },
    {
        key:"/more",
        path:"/more",
        name:"更多",
        icon:"\ue62e",
        component:More,
        exact:true,
        meta:{
            requireAuth:false,
            flag:true,
        }
    },
   
   
]

export const noTabBarRoutes=[
    {
        key:"/beforeLogin",
        path:"/beforeLogin",
        name:"登录前",
        icon:"\ue62e",
        component:BeforeLogin,
        exact:true,
        meta:{
            requireAuth:false,
            flag:true,
        }
    },
    {
        key:"/basketball",
        path:"/basketball",
        name:"篮球专区",
        icon:"\ue62e",
        component:Basketball,
        exact:true,
        meta:{
            requireAuth:false,
            flag:false,
        }
    },
    {
        key:"/running",
        path:"/running",
        name:"跑步专区",
        icon:"",
        component:Running,
        exact:true,
        meta:{
            requireAuth:false,
            flag:false,
        }
    },
    {
        key:"/hit",
        path:"/hit",
        name:"健身专区",
        icon:"",
        component:Hit,
        exact:true,
        meta:{
            requireAuth:false,
            flag:false,
        }
    },
    {
        key:"/football",
        path:"/football",
        name:"足球专区",
        icon:"",
        component:Football,
        exact:true,
        meta:{
            requireAuth:false,
            flag:false,
        }
    },
    {
        key:"/freestyle",
        path:"/freestyle",
        name:"潮流专区",
        icon:"",
        component:Freestyle,
        exact:true,
        meta:{
            requireAuth:false,
            flag:false,
        }
    },
    {
        key:"/digital",
        path:"/digital",
        name:"数码专区",
        icon:"",
        component:Digital,
        exact:true,
        meta:{
            requireAuth:false,
            flag:false,
        }
    },
    {
        key:"/detail",
        path:"/detail",
        name:"详情页",
        icon:"",
        component:Detail,
        exact:true,
        meta:{
            requireAuth:false,
            flag:false,
        }
    },
    {
        key:"/shopcar",
        path:"/shopcar",
        name:"购物车",
        icon:"",
        component:ShopCar,
        exact:true,
        meta:{
            requireAuth:true,
            flag:false,
        }
    },
    {
        key:"/search",
        path:"/search",
        name:"搜索",
        icon:"",
        component:Search,
        exact:true,
        meta:{
            requireAuth:false,
            flag:false,
        }
    },
    {
        key:"/login",
        path:"/login",
        name:"登录",
        icon:"",
        component:Login,
        exact:true,
        meta:{
            requireAuth:false,
            flag:false,
        }
    },
    {
        key:"/register",
        path:"/register",
        name:"注册",
        icon:"",
        component:Register,
        exact:true,
        meta:{
            requireAuth:false,
            flag:false,
        }
    },
    {
        key: "/newwest",
        path: "/newwest",
        name: "最新",
        component:Newwest,
        exact: true,
        meta: {
            requireAuth: false
        }
    },
    {
        key: "/newhot",
        path: "/newhot",
        name: "最热",
        component:Newhot,
        exact: true,
        meta: {
            requireAuth: false
        }
    }

]

export const beforeLogin=[
   
]

export const baseConfigRoutes=TabBarRoutes.concat(noTabBarRoutes);

