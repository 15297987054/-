import http from "@utils/http.js"

export const europeShoeApi=()=>http({
    method:"post",
    url:"/api/topic/topic_product"
}) 

export const europeManApi=()=>http({
    method:"get",
    url:"/api/recommend/recommend?type=buy-buy&count=40&from=cart&c_platform_type=0"
}) 

export const europeWomanApi=()=>http({
    method:"post",
    url:"/api/topic/topic_product?id=9QNdo&number=11"
}) 