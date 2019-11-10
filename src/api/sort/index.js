import http from "@utils/http.js"

export const sortbrandsApi=()=>http({
    method:"get",
    url:"/api/recommend/recommend?type=buy-buy&count=40&from=cart&c_platform_type=0"
}) 


export const bagsApi=()=>http({
    method:"get",
    url:"/api/recommend/recommend?type=buy-buy&count=40&from=cart&c_platform_type=0"
})

