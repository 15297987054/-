import {
    Home,
    Login,
    Addbooks,
    Bookslist,
    Userinfo,
    Userlist,
    BooksArticle,
    Read
} from "@pages";

export const layoutRoute=[
    {
        path:"/home",
        key:"/home",
        component:Home,
        icon:"home",
        name:"首页"
    },
    {
        path:"/books",
        key:"/books",
        icon:"appstore",
        name:"书籍管理",
        children:[
            {
                path:"/books/addbooks",
                key:"/books/addbooks",
                component:Addbooks,
                icon:"number",
                name:"手写文章",
            },
            {
                path:"/books/bookslist",
                key:"/books/bookslist",
                component:Bookslist,
                icon:"bars",
                name:"书籍列表",
            },
            {
                path:"/books/booksarticle",
                key:"/books/booksarticle",
                component:BooksArticle,
                icon:"user",
                name:"用户文章",
            }
        ]
    },
    {
        path:"/user",
        key:"/user",
        icon:"user",
        name:"用户",
        children:[
            {
                path:"/user/userinfo",
                key:"/user/userinfo",
                component:Userinfo,
                icon:"user",
                name:"用户信息",
            },
            {
                path:"/user/userlist",
                key:"/user/userlist",
                component:Userlist,
                icon:"menu",
                name:"用户列表",
            }
        ]
    },
   
]

export const noLayoutRoute = [
    {
        path: "/login",
        key: "/login",
        component: Login,
        icon: "",
        name: "登陆",
    },
    {
        path:"/read",
        key:"/read",
        component:Read,
        icon:"menu",
        name:"畅读",
    }
]

export const baseConfigRoute = layoutRoute.concat(noLayoutRoute)