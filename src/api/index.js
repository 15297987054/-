import http from "@utils/http.js"
export const movieNowApi=(id=1)=>http({
    method:"get",
    url:"/api/movieOnInfoList",
    data:{
        cityId:id
    }
})

export const movieCommingApi = (id=10)=>http({
    method:"get",
    url:"/api/movieComingList",
    data:{
        cityId:id
    }
})

export const movieSearch=(id,value)=>http({
    url:"/api/searchList",
    data:{
        cityId:id,
        kw:value
    }
})

export const movieDetail=(movieId)=>http({
    url:"/api/detailmovie",
    data:{
        movieId:movieId,
    }
})
