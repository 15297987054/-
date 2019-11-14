import Loadable from "react-loadable";
import Loading from "../common/loading";
const Detail=Loadable({
    loader:()=>import ("./detail"),
    loading:Loading,
})

const Size=Loadable({
    loader:()=>import ("./size"),
    loading:Loading,
})

export {
    Detail,
    Size
}