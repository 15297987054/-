import http from "@utils/http.js"

//正在热映
export const getgoods = ()=> http({
    method:"get",
    url:"api/recommend/recommend?type=buy-buy&count=40&from=cart&c_platform_type=0",
    // data:{
    //     cityId:id
    // }
})