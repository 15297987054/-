import Loadable from "react-loadable";
import Loading from "../common/loading";

const Home=Loadable({
    loader:()=>import ("./home"),
    loading:Loading,
})

const Discount=Loadable({
    loader:()=>import ("./discount"),
    loading:Loading,
})
const Discover=Loadable({
    loader:()=>import ("./discover"),
    loading:Loading,
})
const Equip=Loadable({
    loader:()=>import ("./equip"),
    loading:Loading,
})
const More=Loadable({
    loader:()=>import ("./more"),
    loading:Loading,
})

const BeforeLogin = Loadable({
    loader:()=>import("./beforeLogin"),
    loading:Loading,
})

const Basketball=Loadable({
    loader:()=>import("./sixArea/basketball"),
    loading:Loading,
})

const Running=Loadable({
    loader:()=>import("./sixArea/running"),
    loading:Loading,
})

const Hit=Loadable({
    loader:()=>import ("./sixArea/hit"),
    loading:Loading,
})

const Football=Loadable({
    loader:()=>import ("./sixArea/football"),
    loading:Loading
})

const Freestyle=Loadable({
    loader:()=>import ("./sixArea/freestyle"),
    loading:Loading
})

const Digital=Loadable({
    loader:()=>import ("./sixArea/digital"),
    loading:Loading
})

const Detail= Loadable({
    loader:()=>import ("./detail"),
    loading:Loading
})

const ShopCar = Loadable({
    loader:()=>import ("./shopcar"),
    loading:Loading
})

const Search =Loadable({
    loader:()=>import("./search"),
    loading:Loading
})

const Login=Loadable({
    loader:()=>import("./login"),
    loading:Loading
})

const Register=Loadable({
    loader:()=>import("./register"),
    loading:Loading
})

const Newwest=Loadable({
    loader:()=>import ("./newwest"),
    loading:Loading,
})
const Newhot=Loadable({
    loader:()=>import ("./newhot"),
    loading:Loading,
})
export {
    Home,
    Discount,
    Discover,
    More,
    Equip,
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
}