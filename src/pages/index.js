import Loadable from "react-loadable";
import Loading from "@common/loading";

const Home=Loadable({
    loader:()=>import("./home"),
    loading:Loading
})



const Login=Loadable({
    loader:()=>import("./login"),
    loading:Loading
})



const Addbooks=Loadable({
    loader:()=>import("./books/addbooks"),
    loading:Loading
})

const Bookslist=Loadable({
    loader:()=>import("./books/bookslist"),
    loading:Loading
})

const Userlist=Loadable({
    loader:()=>import("./user/userlist"),
    loading:Loading
})

const Userinfo=Loadable({
    loader:()=>import("./user/userinfo"),
    loading:Loading
})

const BooksArticle=Loadable({
    loader:()=>import("./books/booksArticle"),
    loading:Loading
})

const Read =Loadable({
    loader:()=>import("./read"),
    loading:Loading
})
export{
    Home,
    Login,
    Addbooks,
    Bookslist,
    Userinfo,
    Userlist,
    BooksArticle,
    Read
}